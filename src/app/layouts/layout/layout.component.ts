import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../core/services/sidebar.service';
import { EmployeeListComponent } from '../../features/dashboard/certificated-staff-subjects/components/employee-list/employee-list.component';
import { InProgressComponent } from '../../shared/components/in-progress/in-progress.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    EmployeeListComponent,
    InProgressComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  sidebarService = inject(SidebarService);
  isOpenSidebar = this.sidebarService.isOpenSidebar;
  screenWidth = signal(window.innerWidth);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth.set(window.innerWidth);
  }
}
