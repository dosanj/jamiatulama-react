import React, { MouseEvent } from 'react';
import { IHomePageProps } from '../models/components.props';
import { ImageSlider } from './ImageSlider';

export function HomePage(props: IHomePageProps) {
  const openSideMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.openSideMenu();
  };
  return (
    <div className="home-page">
      <div className="home-page__heading">
        <h1 className="arabicFont">
          اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا،
          وَعَمَلًا مُتَقَبَّلً
        </h1>
        <h1>
          ‘O Allah indeed I ask You for beneficial knowledge, and a good Halal
          provision, and actions which are accepted.’
        </h1>
      </div>
      <div className="home-page__purpose">
        Purpose of this website is to connect Ulama Akram with general
        population. Browse through the website to find advices for many
        prevelant issues faced by Muslim ummah, Insha Allah.
      </div>
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
        <ImageSlider />
      </div>
    </div>
  );
}
