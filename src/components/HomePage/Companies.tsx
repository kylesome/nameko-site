import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Img from 'gatsby-image';

import { Container } from '../layout';
import { Slider } from '../Slider';
import { Slide } from '../Slider/Slide';
import { media, colors } from '../../utils/css';
import { FeatherIcon } from '../Icons/FeatherIcon';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 60px;
`;

const headingStyles = css`
  padding: 0 20px;
`;

const slideInnerStyles = css`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 137px;
  background-color: ${colors.white};
`;

export function Companies({ data, images }) {
  return (
    <Container className={containerStyles}>
      <h2 className={headingStyles}>{data.title}</h2>
      <Slider>
        {
          images.edges.map((edge, i) => (
            <Slide key={i} className={slideInnerStyles}>
              <Img resolutions={edge.node.resolutions} />
            </Slide>
          ))
        }
      </Slider>
    </Container>
  );
};

export const query = graphql`
  fragment HomePageCompaniesFragment on HomeYaml {
    companies {
      title
      logos
    }
  }
  fragment CompaniesImages on RootQueryType {
    companiesImages: allImageSharp(filter: {id: {regex: "/images\/companies/"}}) {
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
