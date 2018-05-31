import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Img from 'gatsby-image';

import { Container } from '../layout';
import { media, colors } from '../../utils/css';
import { FeatherIcon } from '../Icons/FeatherIcon';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 80px;
`;

function Author(props) {
  const {
    name,
    githubHandle,
    twitterHandle,
    image,
  } = props;

  const iconStyles = css`
    color: ${colors.governorBay};
    vertical-align: middle;
    margin-right: 8px;
  `;

  const authorInfoStyles = css`
    padding-top: 10px;
    vertical-align: top;
    text-align: center;
    margin-bottom: 52px;

    ${media.desktop`
      display: inline-block;
      padding-top: 25px;
    `}
  `;

  const imageStyles = css`
    border-radius: 50%;
    border: 5px solid ${colors.white};

    ${media.desktop`
      display: inline-block;
      margin-right: 30px;
    `}
  `;

  const imageWrapperStyles = css`
    text-align: center;

    ${media.desktop`
      display: inline-block;
    `}
  `;

  const nameStyles = css`
    margin-bottom: 16px;
  `;

  const handleStyles = css`
    color: ${colors.governorBay};
  `;

  return (
    <>
      <Box w={[1, 6/12]}>
        <Img
          className={imageStyles}
          outerWrapperClassName={imageWrapperStyles}
          alt={name}
          resolutions={image.resolutions}
        />
        <div className={authorInfoStyles}>
          <p className={nameStyles}>{name}</p>
          <div>
            <FeatherIcon className={iconStyles} name="github" width="20" height="20" />
            <a
              className={css`text-decoration: none;`}
              href={`https://github.com/${githubHandle}`}
            >
              <span className={handleStyles}>{githubHandle}</span>
            </a>
          </div>
          <div>
            <FeatherIcon className={iconStyles} name="twitter" width="20" height="20" />
            <a
              className={css`text-decoration: none;`}
              href={`https://twitter.com/${twitterHandle}`}
            >
              <span className={handleStyles}>{twitterHandle}</span>
            </a>
          </div>
        </div>
      </Box>
    </>
  );
}

export function Authors({ data, images }) {
  const getImage = name => images.edges.find((edge) => (
    edge.node.resolutions.originalName === name
  )).node;

  return (
    <Container className={containerStyles}>
      <h2>{data.title}</h2>
      <Flex flexWrap="wrap" justifyContent="center">
      {
        data.authors.map((author, i) => (
          <Author
            key={i}
            {...author}
            image={getImage(author.image)}
          />
        ))
      }
      </Flex>
    </Container>
  );
};

export const query = graphql`
  fragment HomePageAuthorsFragment on HomeYaml {
    authors {
      title
      authors {
        name
        githubHandle
        twitterHandle
        image
      }
    }
  }
  fragment AuthorsImages on RootQueryType {
    authorsImages: allImageSharp(filter: {id: {regex: "/images\/authors/"}}) {
      edges {
        node {
          resolutions(width: 150) {
            ...GatsbyImageSharpResolutions_tracedSVG
            originalName
          }
        }
      }
    }
  }
`;
