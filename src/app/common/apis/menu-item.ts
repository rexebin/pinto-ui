export interface MenuItem {
  label?: string;
  icon?: string;
  url?: string;
  routerLink?: any;
  items?: MenuItem[];
  expanded?: boolean;
  disabled?: boolean;
}
