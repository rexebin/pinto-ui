
import { MenuItem } from '../common/apis/menu-item';

const topNavServiceUser: MenuItem = {
  label: 'Service User',
  items: [
    {label: 'Service User', icon: 'fa-user'},
    {label: 'Admission', icon: 'fa-calendar'},
    {label: 'Contact', icon:'fa-envelope-o'},
    {label: 'Setting', icon: 'fa-cog'}
  ]
};

const topNavFinance: MenuItem = {
  label: 'Finance',
  items: [
    {label: 'Supplier'},
    {label: 'Customer'},
    {label: 'Bank'},
    {label: 'Invoice'},
    {label: 'Setting'}
  ]
};
export const topNavMenuItems: MenuItem[] = [
  topNavServiceUser,
  topNavFinance,
  {label: 'About'}
];
