import React from "react";

import { GetNumberWithCommas } from "../../Assets/Functions/NumbersFormat";

import { IHeadlineProps } from "../../Interfaces/Interfaces";

import { Container, Grid, Title, Subtitle } from "./Headline.style";

const Headline = ({ totalCount }: IHeadlineProps) => {
  return (
    <Container>
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12}>
          <Title>COVID-19</Title>
        </Grid>
        <Grid item xs={12}>
          <Subtitle>{totalCount && GetNumberWithCommas(totalCount)} infected people on all the world!</Subtitle>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Headline;