import React, { useState } from 'react';
import { ISideNavItemProps } from '../models/components.props';
import { ISideMenuItem } from '../data/navigation-page.data';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { Languages } from '../services/utility-service';

export function SideNavItem(props: ISideNavItemProps) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleChildren = () => {
    setExpanded(!isExpanded);
  };
  const getChildrens = (children: ISideMenuItem[]) => {
    return (
      <div className="side-nav--item__children">
        {children.map((child) => {
          return (
            <SideNavItem
              currentLanguage={props.currentLanguage}
              key={child['english-name']}
              itemSelected={(item) => selectItem(item)}
              item={child}
              navLevel={props.navLevel + 1}
            />
          );
        })}
      </div>
    );
  };
  const selectItem = (item: ISideMenuItem, $event?: MouseEvent) => {
    props.itemSelected(item);
  };
  const getCurrentName = () => {
    let name;
    if (props.currentLanguage === Languages.URDU) {
      name = props?.item?.['urdu-name'];
    }
    if (props.currentLanguage === Languages.HINDI) {
      name = props?.item?.['hindi-name'];
    }
    if (!name) {
      name = props?.item?.['english-name'];
    }
    return name;
  };

  const getItem = () => {
    const children = props.item?.children;
    if (children && children.length > 0) {
      return (
        <div className={`side-nav--item ${isExpanded ? 'expanded' : null}`}>
          <div className="side-nav--item__name" onClick={toggleChildren}>
            <span
              style={{ paddingLeft: `${1 + props.navLevel * 1}rem` }}
              className={
                props.currentLanguage === Languages.URDU ? 'urduText' : ''
              }
            >
              {getCurrentName()}
            </span>
            <span className={`side-nav--item__name__icon `}>
              {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </span>
          </div>
          {isExpanded ? getChildrens(children) : null}
        </div>
      );
    }
    return (
      <div
        className="side-nav--item"
        onClick={($event) => selectItem(props.item)}
      >
        <div
          className={`side-nav--item__name ${
            props?.item.selected ? 'selected' : ''
          }`}
        >
          <span
            style={{ paddingLeft: `${1 + props.navLevel * 1}rem` }}
            className={
              props.currentLanguage === Languages.URDU ? 'urduText' : ''
            }
          >
            {getCurrentName()}
          </span>
        </div>
      </div>
    );
  };

  return getItem();
}
