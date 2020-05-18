import React from "react";

import { GetNumberWithCommas } from "../../Assets/Functions/NumbersFormat";

import { ITextPanelProps } from "../../Interfaces/Interfaces";

import { Grid, Paragraph, Icon, MoodIcon, MoodBadIcon } from './TextPanel.style';

const TextPanel = ({ color, title, count, status }: ITextPanelProps) => {
  return (
    <Grid container justify="center" color={color}>
      <Grid item xs={12}>
        <Paragraph>
          {title}
        </Paragraph>
      </Grid>
      <Grid item xs={12}>
        <Icon className="material-icons">
          {status === 'overcame' ? (
            <MoodIcon fontSize="large"/>
          ) : (
            <MoodBadIcon fontSize="large"/>
          )}
        </Icon>
      </Grid>
      <Grid item xs={12}>
        <Paragraph>
          {count && GetNumberWithCommas(count)}
        </Paragraph>
      </Grid>
    </Grid>
  )
};

export default TextPanel;