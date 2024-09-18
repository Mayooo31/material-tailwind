import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CloseSidebarDirective } from '../../../core/directives/close-sidebar.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CloseSidebarDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private sidebarService = inject(SidebarService);
  isOpenSidebar = this.sidebarService.isOpenSidebar;
  collapseSidebar = this.sidebarService.collapseSidebar;

  constructor() {
    this.sidebarService.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.sidebarService.checkScreenWidth();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.sidebarService.openSidebar();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.sidebarService.closeSidebar();
  }
}
