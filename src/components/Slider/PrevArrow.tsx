import * as React from 'react';
import { css } from 'emotion';

import { media, colors } from '../../utils/css';
import { FeatherIcon } from '../Icons/FeatherIcon';

export function PrevArrow({ onClick = () => {} }) {
  const prevArrowStyles = css`
    position: absolute;
    top: calc(50% - 18px);
    left: -25px;
    color: ${colors.dustyGray};
    cursor: pointer;

    ${media.desktop`
      left: -35px;
    `};
  `;

  return (
    <FeatherIcon
      onClick={onClick}
      className={prevArrowStyles}
      name="chevron-left"
      width="35"
      height="35"
    />
  );
}
