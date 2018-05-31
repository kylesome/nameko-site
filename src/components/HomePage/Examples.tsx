import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';

import { Container } from '../Layout';
import { media, colors } from '../../utils/css';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 80px;

  ${media.mobile`
    .gatsby-highlight {
      margin-left: -24px;
      margin-right: -24px;
      border-radius: 0;
    }
  `}
`;

const exampleContainerStyles = css`
  margin-bottom: 40px;
`;

export function Examples({ data }) {
  return (
    <Container className={containerStyles}>
      <h2>Examples</h2>
      {
        data.edges.map((edge, i) => (
          <div
            key={i.toString()}
            className={exampleContainerStyles}
            dangerouslySetInnerHTML={{ __html: edge.node.html }}
          />
        ))
      }
    </Container>
  );
};

export const query = graphql`
  fragment HomePageExamples on RootQueryType {
    homePageExamples: allMarkdownRemark(filter: {
      id: {regex: "/home/examples/"}
    }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
