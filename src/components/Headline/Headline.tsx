import React from "react";

import { IHeadlineProps } from "../../Interfaces/Interfaces";

import { Container, Grid, Title, Subtitle } from "./Headline.style";

const Headline = ({ totalCount }: IHeadlineProps) => {
  return (
    <Container>
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12}>
          <Title>CORONAVIRUS</Title>
        </Grid>
        <Grid item xs={12}>
          <Subtitle>{totalCount} infected people on all the world!</Subtitle>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Headline;