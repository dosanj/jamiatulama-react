import { ISideMenuItem } from "../data/navigation-page.data";
import { IHomePageImage } from "../data/home-page.data";

export interface IHeaderProps {
  isLightMode: boolean;
  isMenuOpen: boolean;
  isSmallDevice: boolean;
  toggleTheme: () => void;
  toggleMenu: () => void;
  changeLanguage: (language: string) => void;
}

export interface ISideNavProps {
  currentLanguage: string;
  isMenuOpen: boolean;
  sideNavData: ISideMenuItem[];
  closeSideMenu: () => void;
}

export interface IVerifyCodeProps {
  code: string;
  setCode: (code: string) => void;
  verifyCode: (event: any) => void;
  error: Error;
}

export interface ISideNavItemProps {
  item: ISideMenuItem;
  currentLanguage: string;
  navLevel: number;
}
export interface IAppContentProps {
  currentLanguage: string;
  contentData: ISideMenuItem | null;
  closeSideMenu: () => void;
  openSideMenu: () => void;
  linkChanged: (link: any) => void;
}

export interface IHomePageProps {
  currentLanguage: string;
  openSideMenu: () => void;
}
export interface IImageSliderProps {
  images: IHomePageImage[];
}
export interface IBecomeMemberFormProps {
  codeSent: boolean;
  captchaValue: string;
  error: Error;
  submitButtonClicked: (data: IUserDetails) => void;
}
export interface IUserDetails {
  age: number;
  displayName: string;
  profession: string;
  gender: string;
  nearestMasjid: string;
  phoneNumber: { value: string; valid: boolean };
  masjidZimmedar: string;
}
