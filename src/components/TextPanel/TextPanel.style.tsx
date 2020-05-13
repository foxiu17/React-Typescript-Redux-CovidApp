import styled from 'styled-components';

import { IGridProps } from "../../Interfaces/Styles/StylesInterfaces";

import { Grid as commonGrid } from '../../Assets/Common/Containers.style';

export const Grid = styled(commonGrid)<IGridProps>`
  width: 100%;
  height: 100%;
`;