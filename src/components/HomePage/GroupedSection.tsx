import * as React from 'react';
import { css } from 'emotion';

import { Container } from '../layout';
import { colors } from '../../utils/css';

const sectionStyles = css`
  background-color: ${colors.wildSand};
  overflow: hidden;

  & ~ & {
    .section-divider {
      border-top: 1px solid ${colors.dustyGray};
    }
  }
`;

export function GroupedSection({ children }) {
  return (
    <section className={sectionStyles}>
      <Container className="section-divider" />
      {children}
    </section>
  );
}
