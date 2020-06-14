import React, { useState } from "react";
import MenuOpenRounded from "@material-ui/icons/MenuOpenRounded";
import Menu from "@material-ui/icons/Menu";
import Brightness2Outlined from "@material-ui/icons/Brightness2Outlined";
import Brightness2 from "@material-ui/icons/Brightness2";
import {
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@material-ui/core";
import { IHeaderProps } from "../models/components.props";
import { Languages } from "../services/utility-service";
import { Link } from "react-router-dom";

export function Header(props: IHeaderProps) {
  const [languagePopupOpen, setLanguagePopupOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState("Aبअ");

  const changeLanguage = () => {
    setLanguagePopupOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any, language = "") => {
    if (
      (anchorRef as any).current &&
      (anchorRef as any).current.contains(event.target)
    ) {
      return;
    }
    if (language) {
      props.changeLanguage((language as unknown) as string);
      setCurrentLanguage(language);
    }
    setLanguagePopupOpen(false);
  };

  function handleListKeyDown(event: any) {
    if (event.key === "Tab") {
      event.preventDefault();
      setLanguagePopupOpen(false);
    }
  }
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
    return (
      <span
        className="app-header--logo__icon primary-color"
        onClick={props.toggleMenu}
      >
        {getMenuIcon()}
      </span>
    );
  };
  const displayCurrentLanguage = (currentLanguage: string) => {
    if (currentLanguage === Languages.URDU) {
      return "اردو";
    }
    if (currentLanguage === Languages.HINDI) {
      return "हिन्दी";
    }
    return currentLanguage;
  };
  return (
    <header className="app-header">
      <div className="app-header--logo">
        {showMenuIcon()}
        <Link to="/">
          {" "}
          <span className="app-header--logo__name clickable">
            Jamiat Ulama{" "}
            <span className="app-header--logo__name__main"> Solapur</span>
          </span>
        </Link>
      </div>
      <div className="app-header--right-side">
        <span
          className={`app-header--right-side__language-switcher clickable`}
          ref={anchorRef}
          aria-controls={languagePopupOpen ? "language-switcher" : undefined}
          aria-haspopup="true"
          onClick={changeLanguage}
        >
          {displayCurrentLanguage(currentLanguage)}
        </span>
        <Popper
          open={languagePopupOpen}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={languagePopupOpen}
                    id="language-switcher"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={(event) =>
                        handleClose(event, Languages.ENGLISH as string)
                      }
                    >
                      {displayCurrentLanguage(Languages.ENGLISH)}
                    </MenuItem>
                    <MenuItem
                      onClick={(event) =>
                        handleClose(event, Languages.URDU as string)
                      }
                    >
                      {displayCurrentLanguage(Languages.URDU)}
                    </MenuItem>
                    <MenuItem
                      onClick={(event) =>
                        handleClose(event, Languages.HINDI as string)
                      }
                    >
                      {displayCurrentLanguage(Languages.HINDI)}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
