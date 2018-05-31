import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Img from 'gatsby-image';

import { Container } from '../layout';
import { media } from '../../utils/css';


const containerStyles = css`
  margin: 66px auto;

  &:first-of-type {
    margin-top: 80px;
  }

  &:last-of-type {
    margin-bottom: 80px;
  }

  ${media.desktop`
    &:first-of-type {
      margin-top: 120px;
    }

    &:last-of-type {
      margin-bottom: 120px;
    }
  `}
`;

const titleStyles = css`
  ${media.mobile`
    text-align: center;
  `}
`;

const imageStyles = css`
  ${media.mobile`
    margin-bottom: 50px;
  `}
`;

export function ValueProp({ data, images }) {
  const image = images.edges.find((edge) => (
    edge.node.resolutions.originalName === data.icon
  ));

  return (
    <Container className={containerStyles}>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box w={[1, 4/12]}>
          <Flex justifyContent="center">
            <Img className={imageStyles} alt={data.title} resolutions={image.node.resolutions}/>
          </Flex>
        </Box>
        <Box w={[1, 7/12]}>
          <h3 className={titleStyles}>
            {data.title}
          </h3>
          <p>
            {data.description}
          </p>
        </Box>
      </Flex>
    </Container>
  );
};

export const query = graphql`
  fragment HomePageValuePropsFragment on HomeYaml {
    valueProps {
      title
      description
      icon
    }
  }
  fragment ValuePropsImages on RootQueryType {
    valuePropsImages: allImageSharp(filter: {id: {regex: "/images\/value_props/"}}) {
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
