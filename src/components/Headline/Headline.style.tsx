import styled from 'styled-components';

import { BlockContainer as commonBlockContainer, Grid as commonGrid } from "../../Assets/Common/Containers.style";
import { Title as commonTitle, SubTitle as commonSubTitle } from '../../Assets/Common/Text';

export const Container = styled(commonBlockContainer)`
  padding: 10px 0 50px;
`;

export const Grid = styled(commonGrid)``;

export const Title = styled(commonTitle)`
  font-size: 72px;
  text-align: center;
`;

export const Subtitle = styled(commonSubTitle)`
  font-size: 24px;
  text-align: center;
`;