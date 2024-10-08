import { Injectable, signal } from '@angular/core';
import { SidebarItem } from '../../types/types';

const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: 'Admin Section',
    icon: 'shield_person',
    children: [
      { label: 'Users', route: '/users' },
      { label: 'Passwords', route: '/passwords' },
    ],
  },
  {
    id: 2,
    label: 'Data Check',
    icon: 'database',
    children: [
      { label: 'Add-ons', route: '/addons' },
      { label: 'Contributions', route: '/contributions' },
      { label: 'Benefits', route: '/benefits' },
      { label: 'Job Codes', route: '/job-codes' },
      {
        label: 'Salary Costs',
        route: '/dashboard/salary-cost',
      },
      {
        label: 'Chart of Account',
        route: '/chart-of-account',
      },
    ],
  },
  {
    id: 3,
    label: 'Wizard',
    icon: 'automation',
    children: [
      { label: 'Users', route: '/users' },
      { label: 'Passwords', route: '/passwords' },
    ],
  },
  {
    id: 4,
    label: 'Reports',
    icon: 'assessment',
    children: [
      { label: 'Sales Reports', route: '/reports/sales' },
      { label: 'Expense Reports', route: '/reports/expenses' },
      { label: 'Profit & Loss', route: '/reports/profit-loss' },
      { label: 'Annual Summary', route: '/reports/annual-summary' },
    ],
  },
  {
    id: 5,
    label: 'Settings',
    icon: 'settings',
    children: [
      { label: 'Profile Settings', route: '/settings/profile' },
      { label: 'Security Settings', route: '/settings/security' },
      { label: 'Notification Settings', route: '/settings/notifications' },
    ],
  },
  {
    id: 6,
    label: 'Analytics',
    icon: 'insights',
    children: [
      { label: 'Dashboard Analytics', route: '/analytics/dashboard' },
      { label: 'Traffic Insights', route: '/analytics/traffic' },
      { label: 'User Behavior', route: '/analytics/user-behavior' },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpenSidebar_ = signal<boolean>(false);
  private collapseSidebar_ = signal<boolean>(false);
  private sidebarItems_ = signal<SidebarItem[]>(sidebarItems);
  private collapsedItem_ = signal<number | null>(null);

  isOpenSidebar = this.isOpenSidebar_.asReadonly();
  collapseSidebar = this.collapseSidebar_.asReadonly();
  sidebarItems = this.sidebarItems_.asReadonly();
  collapsedItem = this.collapsedItem_.asReadonly();

  toggleSidebar() {
    this.isOpenSidebar_.update((prevState) => !prevState);
  }
  openSidebar() {
    this.isOpenSidebar_.set(true);
  }
  closeSidebar() {
    this.isOpenSidebar_.set(false);
  }

  toggleItem(id: number) {
    if (id === this.collapsedItem_()) {
      this.collapsedItem_.set(null);
    } else {
      this.collapsedItem_.set(id);
    }
  }

  checkScreenWidth(): void {
    if (window.innerWidth > 1320) {
      this.isOpenSidebar_.set(true);
    } else {
      this.isOpenSidebar_.set(false);
    }
    if (window.innerWidth > 960) {
      this.collapseSidebar_.set(false);
    } else if (window.innerWidth > 600) {
      this.collapseSidebar_.set(true);
    } else {
      this.collapseSidebar_.set(false);
    }
  }

  toggleIsCollapsedSidebar() {
    this.collapseSidebar_.update((prevState) => !prevState);
  }
}
