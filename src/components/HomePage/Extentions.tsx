import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Img from 'gatsby-image';

import { Container } from '../Layout';
import { media, colors } from '../../utils/css';
import { FeatherIcon } from '../Icons/FeatherIcon';
import { Slider } from '../Slider';
import { Slide } from '../Slider/Slide';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 50px;

  ${media.desktop`
    margin-bottom: 32px;
  `}
`;

function Extention({ title, description, link }) {
  const iconStyles = css`
    color: ${colors.governorBay};
    margin-right: 16px;
    vertical-align: middle;
  `;

  const titleStyles = css`
    display: inline-block;
    font-size: 18px;
    vertical-align: middle;
    margin-bottom: 0;
    color: ${colors.governorBay};
  `;

  const boxStyles = css`
    padding: 16px 30px;

    ${media.desktop`
      &:nth-child(3n) {
        border-right: 0;
      }
      border-right: 1px solid ${colors.dustyGray};
      margin-bottom: 56px;
    `}
  `;

  return (
    <Box className={boxStyles} w={[1, 4/12]}>
      <div className={css`margin-bottom: 20px;`}>
        <FeatherIcon className={iconStyles} name="box" width="18" height="18" />
        <a href={link}>
          <h3 className={titleStyles}>{title}</h3>
        </a>
      </div>
      <p className={css`margin-bottom: 0;`}>{description}</p>
    </Box>
  );
}

const desktopGridStyles = css`
  ${media.mobile`
    display: none;
  `}
`;

const mobileSliderStyles = css`
  ${media.desktop`
    display: none !important; /* TODO: fix this */
  `}
`;

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slideInnerStyles = css`
  min-height: 140px;
`;

export function Extentions({ data }) {
  return (
    <Container className={containerStyles}>
      <h2 className={css`padding: 0 30px;`}>{data.title}</h2>
      <Flex className={desktopGridStyles} flexWrap="wrap" justifyContent="center">
      {
        data.extentions.map((extention, i) => (
          <Extention key={i} {...extention} />
        ))
      }
      </Flex>
      <Slider className={mobileSliderStyles} {...sliderSettings}>
      {
        data.extentions.map((extention, i) => (
          <Slide key={i} className={slideInnerStyles}>
            <Extention key={i} {...extention} />
          </Slide>
        ))
      }
      </Slider>
    </Container>
  );
};

export const query = graphql`
  fragment HomePageExtentionsFragment on HomeYaml {
    extentions {
      title
      extentions {
        title
        description
        link
      }
    }
  }
`;
