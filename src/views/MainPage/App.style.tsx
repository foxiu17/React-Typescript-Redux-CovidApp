import styled from  'styled-components';

import { IGridProps } from "../../Interfaces/Styles/StylesInterfaces";

import { BlockContainer as commonBlockContainer, Grid as commonGrid } from '../../Assets/Common/Containers.style';

export const Container = styled(commonBlockContainer)`
  min-height: 100vh;
`;

export const Grid = styled(commonGrid)<IGridProps>`
  position: relative;
  min-height: ${props => props.section === 'true' ? '100vh' : 'auto'};
  padding: ${props => props.section === 'true' ? '30px 0 10px' : 'auto'};
  background-image: ${props => props.image ? `url(${props.image})` : ''};
  background-size: cover;
  background-position: center center;
  
  &::after {
    display: ${props => props.image ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
    content: "";
  }
`;