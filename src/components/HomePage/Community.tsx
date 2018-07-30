import * as React from 'react';
import { css } from 'emotion';
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
  `};
`;

function Item({ title, description, link, image }) {

  const boxStyles = css`
    text-align: center;

    ${media.desktop`
      margin-bottom: 56px;
    `};
  `;

  const linkStyles = css`
  `;

  const imageStyles = css`
  `;

  const imageWrapperStyles = css`
  `;

  return (
    <Box className={boxStyles} w={[1, 5 / 20]}>
      <div
        className={css`
          margin-bottom: 20px;
        `}
      >
        <a href={link} className={linkStyles}>
          <Img
            className={imageStyles}
            outerWrapperClassName={imageWrapperStyles}
            alt={title}
            resolutions={image.resolutions}
          />
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

const desktopGridStyles = css`
  ${media.mobile`
    display: none;
  `};
`;

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
  min-height: 250px;
  display: flex;
  align-items: center;
`;

export function Community({ data, images }) {

  const getImage = name =>
    images.edges.find(edge => edge.node.resolutions.originalName === name).node;

  return (
    <Container className={containerStyles}>
      <h2
        className={css`
          padding: 0 30px;
        `}
      >
        {data.title}
      </h2>
      <Flex
        className={desktopGridStyles}
        flexWrap="wrap"
        justifyContent="center"
      >
        {data.items.map((item, i) => (
          <Item key={i} {...item} image={getImage(item.image)} />
        ))}
      </Flex>
      <Slider className={mobileSliderStyles} {...sliderSettings}>
        {data.items.map((item, i) => (
          <Slide key={i} className={slideInnerStyles}>
            <Item key={i} {...item} image={getImage(item.image)} />
          </Slide>
        ))}
      </Slider>
    </Container>
  );
}

export const query = graphql`
  fragment HomePageCommunity on HomeYaml {
    community {
      title
      items {
        title
        description
        link
        image
      }
    }
  }
  fragment CommunityImages on RootQueryType {
    communityImages: allImageSharp(
      filter: { id: { regex: "/images/community/" } }
    ) {
      edges {
        node {
          resolutions(width: 120) {
            ...GatsbyImageSharpResolutions_tracedSVG
            originalName
          }
        }
      }
    }
  }
`;
