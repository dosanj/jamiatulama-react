import { ISideMenuItem } from '../data/navigation-page.data';

export interface IHeaderProps {
  isLightMode: boolean;
  isMenuOpen: boolean;
  isSmallDevice: boolean;
  toggleTheme: () => void;
  toggleMenu: () => void;
  goToHomePage: () => void;
  changeLanguage: (language: string) => void;
}

export interface ISideNavProps {
  currentLanguage: string;
  isMenuOpen: boolean;
  sideNavData: ISideMenuItem[];
  changeSelection: (item: ISideMenuItem) => void;
}

export interface ISideNavItemProps {
  item: ISideMenuItem;
  currentLanguage: string;
  navLevel: number;
  itemSelected: (item: ISideMenuItem) => void;
}
export interface IAppContentProps {
  currentLanguage: string;
  contentData: ISideMenuItem | null;
  hideSideNav: () => void;
}
