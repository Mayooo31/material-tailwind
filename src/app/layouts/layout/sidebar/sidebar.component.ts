import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CloseNavbarDirective } from '../../../core/directives/close-sidebar.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CloseNavbarDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);
  isOpenSidebar = this.sidebarService.isOpenSidebar;

  constructor() {
    this.sidebarService.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.sidebarService.checkScreenWidth();
  }
}
