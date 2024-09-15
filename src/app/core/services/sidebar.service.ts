import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpenSidebar_ = signal<boolean>(false);
  isOpenSidebar = this.isOpenSidebar_.asReadonly();

  toggleSidebar() {
    this.isOpenSidebar_.update((prevState) => !prevState);
  }

  closeNavbar() {
    this.isOpenSidebar_.set(false);
  }

  checkScreenWidth(): void {
    if (window.innerWidth > 1320) {
      this.isOpenSidebar_.set(true);
    } else {
      this.isOpenSidebar_.set(false);
    }
  }
}
