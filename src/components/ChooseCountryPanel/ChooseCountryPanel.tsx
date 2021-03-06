import React, {useEffect} from "react";

import { ICountryPanelProps } from "../../Interfaces/Interfaces";
import { ICountries } from "../../Interfaces/FetchedDataInterfaces";

import { Grid, TextField, Button } from "./ChooseCountryPanel.style";

const ChooseCountryPanel = ({ countries, handleChange, currentValue, submitFunc }: ICountryPanelProps) => {
  const sortCountries = (a: ICountries, b: ICountries) => {
    if (a.Country < b.Country) {
      return -1;
    } else if (a.Country > b.Country) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    countries.sort(sortCountries);
  },[countries]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          select
          label="Select country"
          value={currentValue}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select country"
          variant="outlined"
        >
          <option value="">

          </option>
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