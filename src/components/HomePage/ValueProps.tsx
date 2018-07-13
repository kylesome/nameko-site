import * as React from 'react';
import { css } from 'emotion';
import { Flex, Box } from 'grid-styled';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import { Container } from '../Layout';
import { media } from '../../utils/css';

const titleStyles = css`
  ${media.mobile`
    text-align: center;
  `};
`;

const imageStyles = css`
  ${media.mobile`
    margin-bottom: 50px;
  `};
`;

const ValuePropFlex = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 66px;
`;

export function ValueProp({ data, images }) {
  const image = images.edges.find(
    edge => edge.node.resolutions.originalName === data.icon,
  );

  return (
    <ValuePropFlex flexWrap="wrap" justifyContent="center">
      <Box w={[1, 4 / 12]}>
        <Flex justifyContent="center">
          <Img
            className={imageStyles}
            alt={data.title}
            resolutions={image.node.resolutions}
          />
        </Flex>
      </Box>
      <Box w={[1, 7 / 12]}>
        <h3 className={titleStyles}>{data.title}</h3>
        <p>{data.description}</p>
      </Box>
    </ValuePropFlex>
  );
}

const containerStyles = css`
  margin: 80px auto 80px auto;

  ${media.desktop`
    margin: 120px auto 90px auto;
  `};
`;

export function ValueProps({ data, images }) {
  return (
    <Container className={containerStyles}>
      {data.map(valueProp => (
        <ValueProp key={valueProp.title} data={valueProp} images={images} />
      ))}
    </Container>
  );
}

export const query = graphql`
  fragment HomePageValueProps on HomeYaml {
    valueProps {
      title
      description
      icon
    }
  }
  fragment ValuePropsImages on RootQueryType {
    valuePropsImages: allImageSharp(
      filter: { id: { regex: "/images/value_props/" } }
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
