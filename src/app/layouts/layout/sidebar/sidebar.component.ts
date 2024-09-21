import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
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
  sidebarItems = this.sidebarService.sidebarItems;
  isOpenSidebar = this.sidebarService.isOpenSidebar;
  collapseSidebar = this.sidebarService.collapseSidebar;
  collapsedItem = this.sidebarService.collapsedItem;

  elRef = inject(ElementRef);

  constructor() {
    this.sidebarService.checkScreenWidth();
  }

  toggleIsCollapsedSidebar() {
    this.sidebarService.toggleIsCollapsedSidebar();
  }

  setToggleItem(id: number) {
    this.sidebarService.toggleItem(id);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.sidebarService.checkScreenWidth();
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.collapseSidebar()) {
      this.sidebarService.openSidebar();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.collapseSidebar() || window.innerWidth < 1320) {
      this.sidebarService.closeSidebar();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      console.log('Hello World!');
    }
  }
}
