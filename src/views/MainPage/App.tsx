import React, { useState, useContext, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import { Store } from '../../Context/Store';
import { Theme } from '../../Context/ThemeContext';

// actions
import { FETCH_SUMMARY, FETCH_BY_COUNTRY, FETCH_COUNTRIES, SWITCH_THEME_NIGHT } from "../../Actions/MainActions";

// const
import { fetchSummary, fetchByCountryTotal, fetchCountries as fetchCountriesURL } from "../../Assets/Conts/fetchURL";
import { initialArrayLength } from "../../Assets/Conts/numbers";

// interfaces and types
import { FormElement } from "../../Types/Types";

// components
import Headline from "../../components/Headline";
import TextPanel from "../../components/TextPanel";
import ChooseCountryPanel from "../../components/ChooseCountryPanel";
import Table from "../../components/Table";

// styles
import { Container, Grid } from "./App.style";

// images
import CovidBg from "../../Assets/Images/Backgrounds/covid-bg.jpg";

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const { state: themeState, dispatch: themeDispatch } = useContext(Theme);
  const [currentValue, setCurrentValue] = useState<string>('');

  console.log('THEME: ', themeState);
  const handleChange = (event: FormElement): void => {
    setCurrentValue(event.currentTarget.value);
  };

  const handleChangeTheme = (): void => {
    SWITCH_THEME_NIGHT('night', themeDispatch);
  };

  const fetchSummaryByCountry = async () => {
    const data: AxiosResponse = await axios.get(`${fetchByCountryTotal}/${currentValue}/status/confirmed`);
    FETCH_BY_COUNTRY(data, dispatch);
  };

  const fetchSummaryData = async () => {
    const data: AxiosResponse = await axios.get(fetchSummary);
    FETCH_SUMMARY(data.data, dispatch);
  };

  const fetchCountries = async () => {
    const data: AxiosResponse = await axios.get(fetchCountriesURL);
    FETCH_COUNTRIES(data, dispatch);
  };

  useEffect(() => {
    state.allData.length === initialArrayLength && fetchSummaryData();
    state.countries.length === initialArrayLength && fetchCountries();
  }, );

  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container justify="center">
        <Grid item xs={12} section="true" image={CovidBg}>
          <Grid container justify="center">
            {state.allData.length !== initialArrayLength && (
              <>
                <Grid item xs={12}>
                  <Headline totalCount={state.allData.Global.TotalConfirmed} />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextPanel title="Total death" count={state.allData.Global.TotalDeaths} status="death"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextPanel title="Total overcame" count={state.allData.Global.TotalRecovered} status="overcame"/>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} section="true">
          <Grid container justify="center">
            <Grid item xs={12}>
              <button type="button" onClick={handleChangeTheme}>Theme</button>
            </Grid>
            {state.countries.length !== initialArrayLength && (
              <Grid item xs={12}>
                <ChooseCountryPanel countries={state.countries.data} handleChange={handleChange} currentValue={currentValue} submitFunc={fetchSummaryByCountry}/>
              </Grid>
            )}
            {state.countryData.length !== initialArrayLength && (
              <Grid item xs={12}>
                <Table data={state.countryData.data}/>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
