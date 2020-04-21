import React from 'react';
import MenuOpenRounded from '@material-ui/icons/MenuOpenRounded';
import Menu from '@material-ui/icons/Menu';
import Brightness2Outlined from '@material-ui/icons/Brightness2Outlined';
import Brightness2 from '@material-ui/icons/Brightness2';
import { IHeaderProps } from '../models/components.props';

export function Header(props: IHeaderProps) {
  const getThemeSwitcherIcon = () => {
    if (props.isLightMode) {
      return <Brightness2Outlined />;
    }
    return <Brightness2 />;
  };

  const getMenuIcon = () => {
    if (props.isMenuOpen) {
      return <MenuOpenRounded />;
    }
    return <Menu />;
  };
  const showMenuIcon = () => {
    if (props.isSmallDevice) {
      return (
        <span
          className="app-header--logo__icon primary-color"
          onClick={props.toggleMenu}
        >
          {getMenuIcon()}
        </span>
      );
    }
    return null;
  };
  const goToHomePage = () => {
    props.goToHomePage();
  };
  return (
    <header className="app-header">
      <div className="app-header--logo">
        {showMenuIcon()}
        <span
          className="app-header--logo__name clickable"
          onClick={goToHomePage}
        >
          Jamiat Ulama{' '}
          <span className="app-header--logo__name__main"> Solapur</span>
        </span>
      </div>
      <div className="app-header--right-side">
        <span
          className={`app-header--right-side__theme-switcher clickable`}
          onClick={props.toggleTheme}
        >
          {getThemeSwitcherIcon()}
        </span>
      </div>
    </header>
  );
}
