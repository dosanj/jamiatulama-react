import React from 'react';
import { ISideNavItemProps } from '../models/components.props';
import { ISideNavItemState } from '../models/components.state';
import { ISideMenuItem } from '../data/navigation-page.data';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

export class SideNavItem extends React.Component<
  ISideNavItemProps,
  ISideNavItemState
> {
  state: ISideNavItemState = {
    isExpanded: false,
  };

  toggleChildren = () => {
    this.setState({
      ...this.state,
      isExpanded: !this.state.isExpanded,
    });
  };
  getChildrens = (children: ISideMenuItem[]) => {
    return (
      <div className="side-nav--item__children">
        {children.map((child) => {
          return (
            <SideNavItem
              key={child.name}
              itemSelected={(item) => this.selectItem(item)}
              item={child}
              navLevel={this.props.navLevel + 1}
            />
          );
        })}
      </div>
    );
  };
  selectItem = (item: ISideMenuItem, $event?: MouseEvent) => {
    this.props.itemSelected(item);
  };
  getItem = () => {
    if (this.props?.item) {
      const children = this.props.item?.children;
      if (children && children.length > 0) {
        return (
          <div
            className={`side-nav--item ${
              this.state.isExpanded ? 'expanded' : null
            }`}
          >
            <div className="side-nav--item__name" onClick={this.toggleChildren}>
              <span
                style={{ paddingLeft: `${1 + this.props.navLevel * 1}rem` }}
              >
                {this.props?.item?.name}
              </span>
              <span className={`side-nav--item__name__icon `}>
                {this.state.isExpanded ? <ExpandLess /> : <ExpandMore />}
              </span>
            </div>
            {this.state.isExpanded ? this.getChildrens(children) : null}
          </div>
        );
      }

      return (
        <div
          className="side-nav--item"
          onClick={($event) => this.selectItem(this.props.item)}
        >
          <div
            className={`side-nav--item__name ${
              this.props?.item.selected ? 'selected' : ''
            }`}
          >
            <span style={{ paddingLeft: `${1 + this.props.navLevel * 1}rem` }}>
              {this.props?.item?.name}
            </span>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.getItem();
  }
}
