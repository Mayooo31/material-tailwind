export interface SidebarItem {
  id: number;
  label: string;
  icon: string;
  children?: SidebarItemChildren[];
}

interface SidebarItemChildren {
  label: string;
  route?: string;
}
