  import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';

import { Container } from '../layout';
import { media, colors } from '../../utils/css';

const containerStyles = css`
  margin: 88px auto;
  padding: 0 80px;
`;

const divStyles = css`
  background-color: ${colors.white};
  border-radius: 6px;
  box-shadow: 0 2px 3px 0 rgba(122, 121, 121, 0.5);
  padding: 18px 40px;
  margin-bottom: 48px;
`;

export function Installation({ data }) {
  return (
    <Container className={containerStyles}>
      <h2>{data.title}</h2>
      <p>{data.intro}</p>
      <pre className={divStyles}>
        {data.command}
      </pre>
      <p>{data.description}</p>
    </Container>
  );
};

export const query = graphql`
  fragment HomePageInstallationFragment on HomeYaml {
    installation {
      title
      intro
      command
      description
    }
  }
`;
