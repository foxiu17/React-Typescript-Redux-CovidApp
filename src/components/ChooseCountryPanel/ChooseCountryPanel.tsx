import React, {useEffect} from "react";

import { ICountryPanelProps } from "../../Interfaces/Interfaces";
import { ICountries } from "../../Interfaces/FetchedDataInterfaces";

import { Grid, TextField, Button } from "./ChooseCountryPanel.style";

const ChooseCountryPanel = ({ countries, handleChange, currentValue, submitFunc }: ICountryPanelProps) => {
  useEffect(() => {
    countries.sort(function(a: ICountries, b: ICountries) {
      if (a.Country < b.Country) return -1;
      if (a.Country > b.Country) return 1;
      return 0;
    });
  });
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
          {countries.map((option: ICountries) => (
            <option key={option.ISO2} value={option.Slug}>
              {option.Country}
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