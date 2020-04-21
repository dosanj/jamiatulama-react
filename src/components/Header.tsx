import React from 'react';
import MenuOpenRounded from '@material-ui/icons/MenuOpenRounded';
import Menu from '@material-ui/icons/Menu';
import Brightness2Outlined from '@material-ui/icons/Brightness2Outlined';
import Brightness2 from '@material-ui/icons/Brightness2';
import { IHeaderProps } from '../models/components.props';

export class Header extends React.Component<IHeaderProps> {
  getThemeSwitcherIcon = () => {
    if (this.props.isLightMode) {
      return <Brightness2Outlined />;
    }
    return <Brightness2 />;
  };

  getMenuIcon = () => {
    if (this.props.isMenuOpen) {
      return <MenuOpenRounded />;
    }
    return <Menu />;
  };
  showMenuIcon = () => {
    if (this.props.isSmallDevice) {
      return (
        <span
          className="app-header--logo__icon primary-color"
          onClick={this.props.toggleMenu}
        >
          {this.getMenuIcon()}
        </span>
      );
    }
    return null;
  };
  render() {
    return (
      <header className="app-header">
        <div className="app-header--logo">
          {this.showMenuIcon()}
          <span className="app-header--logo__name">Jamiat Ulama Solapur</span>
        </div>
        <div className="app-header--right-side">
          <span
            className={`app-header--right-side__theme-switcher clickable`}
            onClick={this.props.toggleTheme}
          >
            {this.getThemeSwitcherIcon()}
          </span>
        </div>
      </header>
    );
  }
}
