import styled from 'react-emotion';
import { Box } from 'grid-emotion';

import { media } from '../../utils/css';

export const Container = styled(Box)`
  ${media.desktop`
    max-width: 960px;
  `} ${media.mobile`
    padding-left: 24px;
    padding-right: 24px;
  `};
`;
Container.defaultProps = {
  mx: 'auto',
};
