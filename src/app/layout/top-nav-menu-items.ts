
import { MenuItem } from '../common/apis/menu-item';

const topNavServiceUser: MenuItem = {
  label: 'Service User',
  items: [
    {label: 'Service User'},
    {label: 'Admission'},
    {label: 'Contact'},
    {label: 'Setting'}
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
