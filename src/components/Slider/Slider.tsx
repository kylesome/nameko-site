import * as React from 'react';
import { default as ReactSlick } from 'react-slick';

import { PrevArrow } from './PrevArrow';
import { NextArrow } from './NextArrow';

const sliderSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function Slider(props) {
  const { children } = props;

  return (
    <ReactSlick {...sliderSettings} {...props}>
      {children}
    </ReactSlick>
  );
}
