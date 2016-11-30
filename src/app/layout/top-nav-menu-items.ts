
import { MenuItem } from '../common/apis/menu-item';

const topNavServiceUser: MenuItem = {
  label: 'Service User',
  items: [
    {label: 'Current Occupancy', icon: 'fa-calendar'},
    {label: 'Service User', icon: 'fa-user', routerLink: ['./service-user']},
    {label: 'Admission', icon: 'fa-calendar'}
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

const setting: MenuItem = {
  label: 'Setting',
  items:[
    {label: 'Home Setting'},
    {label: 'Public Service'}
  ]
};

export const topNavMenuItems: MenuItem[] = [
  topNavServiceUser,
  topNavFinance,
  setting,
  {label: 'About'}
];
