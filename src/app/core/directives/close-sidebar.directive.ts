import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Directive({
  selector: '[closeSidebar]',
  standalone: true,
})
export class CloseSidebarDirective {
  constructor(
    private sidebarService: SidebarService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();

    if (window.innerWidth < 1320) {
      this.sidebarService.closeSidebar();
    }
  }
}
