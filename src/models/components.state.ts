import { ISideMenuItem } from '../data/navigation-page.data';

export interface IAppState {
  isLightMode: boolean;
  isMenuOpen: boolean;
  isSmallDevice: boolean;
  sideNavData: ISideMenuItem[];
  currentSelectedItem: ISideMenuItem | null;
}

export interface ISideNavItemState {
  isExpanded: boolean;
}
