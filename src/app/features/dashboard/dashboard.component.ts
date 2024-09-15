import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Tab {
  title: string;
  content: string;
  contentText: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  tabs: Tab[] = [
    {
      title: 'Dashboard',
      content: 'dashboard',
      contentText:
        "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
    },
    {
      title: 'Profile',
      content: 'profile',
      contentText:
        'The reading of all good books is like a conversation with the finest minds of past centuries.',
    },
    {
      title: 'Settings',
      content: 'settings',
      contentText: 'Comparing yourself to others is the thief of joy.',
    },
  ];
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
