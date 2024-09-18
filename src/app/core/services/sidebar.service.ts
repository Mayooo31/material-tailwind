import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpenSidebar_ = signal<boolean>(false);
  private collapseSidebar_ = signal<boolean>(false);

  isOpenSidebar = this.isOpenSidebar_.asReadonly();
  collapseSidebar = this.collapseSidebar_.asReadonly();

  toggleSidebar() {
    this.isOpenSidebar_.update((prevState) => !prevState);
  }
  openSidebar() {
    this.isOpenSidebar_.set(true);
  }
  closeSidebar() {
    this.isOpenSidebar_.set(false);
  }

  checkScreenWidth(): void {
    if (window.innerWidth > 1320) {
      this.isOpenSidebar_.set(true);
    } else {
      this.isOpenSidebar_.set(false);
    }
    if (window.innerWidth > 600) {
      this.collapseSidebar_.set(true);
    } else {
      this.collapseSidebar_.set(false);
    }
  }

  toggleIsCollapsedSidebar() {
    this.collapseSidebar_.update((prevState) => !prevState);
  }
}
