import React from "react";

import { Grid } from './TextPanel.style';

interface ITextPanelProps {
  color: string;
  title: string;
  count: number;
}

const TextPanel = ({ color, title, count }: ITextPanelProps) => {
  return (
    <Grid container justify="center" color={color}>
      <Grid item xs={12}>{title}</Grid>
      <Grid item xs={12}>{count}</Grid>
    </Grid>
  )
};

export default TextPanel;