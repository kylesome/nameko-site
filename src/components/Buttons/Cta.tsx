import * as React from 'react';
import styled from 'react-emotion';

import { colors, media } from '../../utils/css';

const ButtonStyled = styled('button')`
  border-radius: 4px;
  background-color: ${colors.white};
  padding: 12px 50px;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.5px;
  color: ${colors.governorBay};
  cursor: pointer;

  ${media.desktop`
    padding: 18px 57px;
  `}
`;

export function Cta({ children }) {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
}
