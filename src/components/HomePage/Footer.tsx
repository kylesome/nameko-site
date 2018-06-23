import * as React from 'react';
import { css } from 'emotion';

import { Container } from '../Layout';
import { colors } from '../../utils/css';

const containerStyles = css`
  color: ${colors.tundora};
  opacity: 0.7;
  padding-top: 30px !important; /* TODO: fix this */
  text-align: center;
`;

export function Footer() {
  return (
    <Container className={containerStyles}>
      <p>
        A team effort - designed by Andreea Hrincu and built by Kyle Stewart
      </p>
    </Container>
  );
}
