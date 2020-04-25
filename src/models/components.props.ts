import { ISideMenuItem } from '../data/navigation-page.data';

export interface IHeaderProps {
  isLightMode: boolean;
  isMenuOpen: boolean;
  isSmallDevice: boolean;
  toggleTheme: () => void;
  toggleMenu: () => void;
  goToHomePage: () => void;
}

export interface ISideNavProps {
  isMenuOpen: boolean;
  sideNavData: ISideMenuItem[];
  changeSelection: (item: ISideMenuItem) => void;
}

export interface ISideNavItemProps {
  item: ISideMenuItem;
  navLevel: number;
  itemSelected: (item: ISideMenuItem) => void;
}
export interface IAppContentProps {
  contentData: ISideMenuItem | null;
  hideSideNav: () => void;
}
