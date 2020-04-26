import React, { useState } from 'react';
import { ISideNavProps } from '../models/components.props';
import { SideNavItem } from './SideNavItem';
import { ISideMenuItem } from '../data/navigation-page.data';

export function SideNav(props: ISideNavProps) {
  const [navLevel] = useState(0);
  const itemSelected = (item: ISideMenuItem) => {
    props.changeSelection(item);
  };
  return (
    <div className={`side-nav ${props.isMenuOpen ? 'show' : 'hide'}`}>
      {props.sideNavData.map((item) => (
        <SideNavItem
          currentLanguage={props.currentLanguage}
          key={item['english-name']}
          itemSelected={(content) => itemSelected(content)}
          item={item}
          navLevel={navLevel}
        />
      ))}
      <div className="donate-button">
        <button className="button button-primary clickable">Donate Us</button>
      </div>
    </div>
  );
}
