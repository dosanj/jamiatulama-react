import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { AppContent } from './components/AppContent';
import {
  sideMenuDetails,
  ISideMenuItem,
  IContentData,
} from './data/navigation-page.data';
import { createUrl, getContentData } from './services/utility-service';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';

export function App(props: Readonly<{}>) {
  // Hooks
  const { link } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const contentData = getContentData();

  // State
  const [isLightMode, setIsLightMode] = useState(true);
  const [isSmallDevice, setIsSmallDevice] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [sideNavData, setSideNavData] = useState(sideMenuDetails);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(
    (null as unknown) as IContentData
  );
  const [currentLink, setCurrentLink] = useState('');
  // Functions
  const checkIfSmallDevice = () => {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (width <= 576) {
      return true;
    }
    return false;
  };

  const toggleCurrentTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openLink = (item: ISideMenuItem) => {
    if (item) {
      if (item.url) {
        window.open(item.url, '_blank');
      } else {
        history.push(match.url + (createUrl(item) as string));
      }
    }
    if (isSmallDevice) {
      setIsMenuOpen(false);
    }
  };

  const selectionChanged = (link: string): void => {
    sideNavData.forEach((item) => {
      item.expand = false;
      const selected = markItemSelected(item, link);
      item.expand = selected || item.expand;
    });
    setSideNavData([...sideNavData]);
  };

  const markItemSelected = (
    item: ISideMenuItem,
    link: string | null
  ): boolean => {
    if (!item.children || item.children.length === 0) {
      item.selected = item.name && link ? createUrl(item) === link : false;
      return item.selected;
    }
    item.expand = false;
    item.children.forEach((i) => {
      const selected = markItemSelected(i, link);
      item.expand = selected || item.expand;
    });
    return item.expand;
  };
  const hideSideNav = () => {
    if (isSmallDevice) {
      setIsMenuOpen(false);
    }
  };

  // Logic
  useEffect(() => {
    setIsSmallDevice(checkIfSmallDevice());
    setIsMenuOpen(!isSmallDevice);
    if (link && link !== currentLink) {
      setCurrentLink(link);
      selectionChanged(link);
      setCurrentSelectedItem(contentData['/' + link]);
    }
  }, [link, currentLink, selectionChanged, contentData, isSmallDevice]);

  return (
    <div className={isLightMode ? 'light-mode main-app' : 'dark-mode main-app'}>
      <Header
        isSmallDevice={isSmallDevice}
        isLightMode={isLightMode}
        isMenuOpen={isMenuOpen}
        toggleTheme={toggleCurrentTheme}
        toggleMenu={toggleMenu}
      />

      <div className="app-layout">
        <SideNav
          changeSelection={(item) => openLink(item)}
          isMenuOpen={isMenuOpen}
          sideNavData={sideNavData}
        />
        <AppContent
          hideSideNav={hideSideNav}
          contentData={currentSelectedItem}
        />
      </div>
    </div>
  );
}
