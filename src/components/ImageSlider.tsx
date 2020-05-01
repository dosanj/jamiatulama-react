import React from 'react';
import { IImageSliderProps } from '../models/components.props';
export function ImageSlider(props: IImageSliderProps) {
  return (
    <div className="image-slider">
      {props.images.map((image) => {
        return (
          <div
            className="image-slider--images"
            key={image['english-image-title']}
          >
            <img src={image.image} alt={image['english-image-title']} />
            <h4> {image['english-image-title']}</h4>
          </div>
        );
      })}
    </div>
  );
}
