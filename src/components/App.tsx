import React, { useState, useCallback } from "react";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { AppContent } from "./AppContent";
import { sideMenuDetails, ISideMenuItem } from "../data/navigation-page.data";
import {
  createUrl,
  getContentData,
  Languages,
} from "../services/utility-service";
import { Route, Switch } from "react-router-dom";
import { checkIfSmallDevice } from "../services/is-small-device-hook";
import { BecomeMember } from "./BecomeMember";
import { DonateUs } from "./DonateUs";
import { Manage } from "./admin/Manage";

export function App() {
  // Hooks
  const contentData = getContentData();
  const isSmallDevice = checkIfSmallDevice();

  // State
  const [isLightMode, setIsLightMode] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(
    Languages.ENGLISH as string
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState();
  const [sideNavData, setSideNavData] = useState(sideMenuDetails);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(
    (null as unknown) as ISideMenuItem
  );

  const linkChanged = (link: any) => {
    if (currentLink !== link) {
      selectionChanged(link);
      setCurrentSelectedItem(contentData[link]);
      setCurrentLink(link);
      closeSideMenu();
    }
  };

  // Functions

  const toggleCurrentTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideMenu = () => {
    setIsMenuOpen(false);
  };
  const openSideMenu = () => {
    setIsMenuOpen(true);
  };
  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const markItemSelected = useCallback(
    (item: ISideMenuItem, link: string | null): boolean => {
      if (!item.children || item.children.length === 0) {
        item.selected =
          item["english-name"] && link ? createUrl(item) === link : false;
        return item.selected;
      }
      item.expand = false;
      item.children.forEach((i) => {
        const selected = markItemSelected(i, link);
        item.expand = selected || item.expand;
      });
      return item.expand;
    },
    []
  );

  const selectionChanged = useCallback(
    (link: string): void => {
      sideNavData.forEach((item: ISideMenuItem) => {
        item.expand = false;
        const selected = markItemSelected(item, link);
        item.expand = selected || item.expand;
      });
      setSideNavData([...sideNavData]);
    },
    [markItemSelected, sideNavData]
  );

  return (
    <div className={isLightMode ? "light-mode main-app" : "dark-mode main-app"}>
      <Header
        isSmallDevice={isSmallDevice}
        isLightMode={isLightMode}
        isMenuOpen={isMenuOpen}
        toggleTheme={toggleCurrentTheme}
        toggleMenu={toggleMenu}
        changeLanguage={changeLanguage}
      />

      <div className="app-layout">
        <SideNav
          currentLanguage={currentLanguage}
          isMenuOpen={isMenuOpen}
          closeSideMenu={closeSideMenu}
          sideNavData={sideNavData}
        />
        <Switch>
          <Route path="/become-member">
            <BecomeMember />
          </Route>
          <Route path="/donate-us">
            <DonateUs />
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route path="/:link">
            <AppContent
              linkChanged={linkChanged}
              currentLanguage={currentLanguage}
              closeSideMenu={closeSideMenu}
              openSideMenu={openSideMenu}
              contentData={currentSelectedItem}
            />
          </Route>
          <Route path="/">
            <AppContent
              linkChanged={linkChanged}
              currentLanguage={currentLanguage}
              closeSideMenu={closeSideMenu}
              openSideMenu={openSideMenu}
              contentData={currentSelectedItem}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
