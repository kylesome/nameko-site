import * as React from 'react';
import { css } from 'emotion';

import { media, colors } from '../../utils/css';
import { FeatherIcon } from '../Icons/FeatherIcon';

export function NextArrow({ onClick = () => {} }) {
  const nextArrowStyles = css`
    position: absolute;
    top: calc(50% - 18px);
    right: -25px;
    color: ${colors.dustyGray};
    cursor: pointer;

    ${media.desktop`
      right: -35px;
    `}
  `;

  return (
    <FeatherIcon
      onClick={onClick}
      className={nextArrowStyles}
      name="chevron-right"
      width="35"
      height="35"
    />
  );
}
