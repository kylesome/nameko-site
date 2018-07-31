import * as React from 'react';
import { css } from 'emotion';
import { Flex, Box } from 'grid-styled';
import styled from 'react-emotion';

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
  `};
`;

function Extension({ title, description, link }) {
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
    `};
  `;

  return (
    <Box className={boxStyles} w={[1, 4 / 12]}>
      <div
        className={css`
          margin-bottom: 20px;
        `}
      >
        <FeatherIcon className={iconStyles} name="box" width="18" height="18" />
        <a href={link}>
          <h3 className={titleStyles}>{title}</h3>
        </a>
      </div>
      <p
        className={css`
          margin-bottom: 0;
        `}
      >
        {description}
      </p>
    </Box>
  );
}

const mobileSliderStyles = css`
  ${media.desktop`
    display: none !important; /* TODO: fix this */
  `};
`;

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slideInnerStyles = css`
  min-height: 140px;
`;

const DesktopFlex = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;

  ${media.mobile`
    display: none !important; /* TODO: fix this */
  `};
`;

export function Extensions({ data }) {
  return (
    <Container className={containerStyles}>
      <h2
        className={css`
          padding: 0 30px;
        `}
      >
        {data.title}
      </h2>
      <DesktopFlex>
        {data.extensions.map((extension, i) => (
          <Extension key={i} {...extension} />
        ))}
      </DesktopFlex>
      <Slider className={mobileSliderStyles} {...sliderSettings}>
        {data.extensions.map((extension, i) => (
          <Slide key={i} className={slideInnerStyles}>
            <Extension key={i} {...extension} />
          </Slide>
        ))}
      </Slider>
    </Container>
  );
}

export const query = graphql`
  fragment HomePageExtensions on HomeYaml {
    extensions {
      title
      extensions {
        title
        description
        link
      }
    }
  }
`;
