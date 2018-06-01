import { css } from 'react-emotion';

export const colors = {
  white: '#ffffff',
  governorBay: '#3023ae',
  lavender: '#c96dd8',
  tundora: '#484848',
  dustyGray: '#979797',
  wildSand: '#f4f4f4',
  amethyst: '#a25ace',
};

export const media = {
  desktop: (...args) => css`
    @media (min-width: 640px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 640px) {
      ${css(...args)}
    }
  `,
};

export const desktopOnly = css`
  ${media.mobile`
    display: none;
  `}
`;

export const mobileOnly = css`
  ${media.desktop`
    display: none;
  `}
`;