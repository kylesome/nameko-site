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
  color: ${colors.tundora};
  opacity: 0.7;
  padding-top: 30px !important; /* TODO: fix this */
  text-align: center;
`;

export function Footer() {
  return (
    <Container className={containerStyles}>
      <p>
        A team effort - designed by Andreea Hrincu & built in the snazziest of ways by Kyle Stewart
      </p>
    </Container>
  );
}
