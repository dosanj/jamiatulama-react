import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { AppContent } from './components/AppContent';
import { sideMenuDetails, ISideMenuItem } from './data/navigation-page.data';
import {
  createUrl,
  getContentData,
  Languages,
} from './services/utility-service';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { checkIfSmallDevice } from './services/is-small-device-hook';

export function App(props: Readonly<{}>) {
  // Hooks
  const { link } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const contentData = getContentData();
  const isSmallDevice = checkIfSmallDevice();

  // State
  const [isLightMode, setIsLightMode] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(
    Languages.ENGLISH as string
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sideNavData, setSideNavData] = useState(sideMenuDetails);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(
    (null as unknown) as ISideMenuItem
  );
  const [currentLink, setCurrentLink] = useState('');
  // Functions

  const toggleCurrentTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openLink = (item: ISideMenuItem) => {
    if (item) {
      if (item['external-url']) {
        window.open(item['external-url'], '_blank');
      } else {
        const url = Object.keys(match.params).length
          ? match.path.replace(':link', createUrl(item) as string)
          : match.url + createUrl(item);
        history.push(url);
      }
    }
    setIsMenuOpen(false);
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
          item['english-name'] && link ? createUrl(item) === link : false;
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
  // Logic
  const goToHomePage = () => {
    setCurrentLink('/');
    selectionChanged('/');
    history.push('/');
    setCurrentSelectedItem((null as unknown) as ISideMenuItem);
    setIsMenuOpen(false);
  };
  useEffect(() => {
    if (link && link !== currentLink) {
      setCurrentLink(link);
      selectionChanged(link);
      setCurrentSelectedItem(contentData[link]);
    }
  }, [
    link,
    currentLink,
    contentData,
    isSmallDevice,
    sideNavData,
    history,
    selectionChanged,
  ]);

  return (
    <div className={isLightMode ? 'light-mode main-app' : 'dark-mode main-app'}>
      <Header
        goToHomePage={goToHomePage}
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
          changeSelection={(item) => openLink(item)}
          isMenuOpen={isMenuOpen}
          sideNavData={sideNavData}
        />
        <AppContent
          currentLanguage={currentLanguage}
          closeSideMenu={closeSideMenu}
          openSideMenu={openSideMenu}
          contentData={currentSelectedItem}
        />
      </div>
    </div>
  );
}
