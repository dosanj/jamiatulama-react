import React from 'react';
import { IImageSliderProps } from '../models/components.props';
export function ImageSlider(props: IImageSliderProps) {
  return (
    <div className="slider">
      <div className="slides">
        {props.images.map((image) => {
          return (
            <div key={image['english-image-title']}>
              <img src={image.image} alt={image['english-image-title']} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
