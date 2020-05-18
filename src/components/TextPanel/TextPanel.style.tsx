import styled from 'styled-components';

import { IGridProps } from "../../Interfaces/Styles/StylesInterfaces";

import Mood from "@material-ui/icons/Mood";
import MoodBad from "@material-ui/icons/MoodBad";

import { Grid as commonGrid } from '../../Assets/Common/Containers.style';
import { Icon as commonIcon, Paragraph as commonParagraph } from "../../Assets/Common/Text";

export const Grid = styled(commonGrid)<IGridProps>`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Icon = styled(commonIcon)``;

export const Paragraph = styled(commonParagraph)`
  position: relative;
  font-size: 24px;
  z-index: 10;
`;

export const MoodIcon = styled(Mood)`
  position: relative;
  color: #fff;
  font-size: 34px;
  z-index: 10;
`;

export const MoodBadIcon = styled(MoodBad)`
  position: relative;
  color: #fff;
  font-size: 24px;
  z-index: 10;
`;
