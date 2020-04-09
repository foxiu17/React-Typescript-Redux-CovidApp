import styled from 'styled-components';

import { Grid as commonGrid } from '../../Assets/Common/Containers.style';

interface GetStyleProps {
  readonly color?: string;
}

export const Grid = styled(commonGrid)<GetStyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color ? props.color : 'inherit'};
`;