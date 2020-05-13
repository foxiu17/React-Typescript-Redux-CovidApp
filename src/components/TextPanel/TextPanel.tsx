import React from "react";

import { GetNumberWithCommas } from "../../Assets/Functions/NumbersFormat";

import { ITextPanelProps } from "../../Interfaces/Interfaces";

import { Grid } from './TextPanel.style';

const TextPanel = ({ color, title, count }: ITextPanelProps) => {
  return (
    <Grid container justify="center" color={color}>
      <Grid item xs={12}>{title}</Grid>
      <Grid item xs={12}>{count && GetNumberWithCommas(count)}</Grid>
    </Grid>
  )
};

export default TextPanel;