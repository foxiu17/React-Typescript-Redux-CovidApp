import React from "react";

import { ICountryPanelProps } from "../../Interfaces/Interfaces";

import { Grid, TextField, Button } from "./ChooseCountryPanel.style";

const countries = [
  { value: "Poland", label: "Poland" },
  { value: "Germany", label: "Germany"},
  { value: "Italy", label: "Italy"},
  { value: "Spain", label: "Spain"}
];

const ChooseCountryPanel = ({ handleChange, currentValue, submitFunc }: ICountryPanelProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          select
          label="Native select"
          value={currentValue}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="outlined"
        >
          {countries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button type="button" onClick={submitFunc}>Submit</Button>
      </Grid>
    </Grid>
  )
};

export default ChooseCountryPanel;