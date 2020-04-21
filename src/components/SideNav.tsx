import React from 'react';
import { ISideNavProps } from '../models/components.props';
import { SideNavItem } from './SideNavItem';
import { ISideMenuItem } from '../data/navigation-page.data';

export class SideNav extends React.Component<ISideNavProps, {}> {
  state = {
    navLevel: 0,
  };
  itemSelected = (item: ISideMenuItem) => {
    this.props.changeSelection(item);
  };
  render() {
    return (
      <div className={`side-nav ${this.props.isMenuOpen ? 'show' : 'hide'}`}>
        {this.props.sideNavData.map((item) => (
          <SideNavItem
            key={item.name}
            itemSelected={(content) => this.itemSelected(content)}
            item={item}
            navLevel={this.state.navLevel}
          />
        ))}
      </div>
    );
  }
}
