import React, { MouseEvent } from "react";
import { IHomePageProps } from "../models/components.props";
import { ImageSlider } from "./ImageSlider";
import { homePageData } from "../data/home-page.data";
import { Languages } from "../services/utility-service";

export function HomePage(props: IHomePageProps) {
  const openSideMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.openSideMenu();
  };
  const getWebsitePurpose = () => {
    if (props.currentLanguage === Languages.URDU) {
      return (
        <div className="home-page__purpose urduText">
          {homePageData["urdu-purpose"]}
        </div>
      );
    }
    if (props.currentLanguage === Languages.HINDI) {
      return (
        <div className="home-page__purpose">
          {homePageData["hindi-purpose"]}
        </div>
      );
    }
    return (
      <div className="home-page__purpose">
        {homePageData["english-purpose"]}
      </div>
    );
  };
  return (
    <div className="home-page">
      {getWebsitePurpose()}
      <button
        className="home-page__know-more button button-primary"
        onClick={openSideMenu}
      >
        Click Here to Know More!
      </button>
      <div className="home-page__image-gallery-heading">
        <span className="home-page__image-gallery-heading-text">
          Image Gallery
        </span>
        <span className="home-page__image-gallery-heading-hr">
          <hr />
        </span>
      </div>
      <div className="home-page__image-gallery-slider">
        <ImageSlider images={homePageData["gallery-images"]} />
      </div>
    </div>
  );
}
