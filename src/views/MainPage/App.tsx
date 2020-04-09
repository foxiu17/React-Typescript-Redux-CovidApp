import React, { useState, useContext, useEffect } from 'react';
import axios, {AxiosResponse} from 'axios';

import { Store } from '../../Context/Store';

// actions
import { FETCH_SUMMARY, FETCH_BY_COUNTRY, FETCH_COUNTRIES } from "../../Actions/MainActions";

// const
import { fetchSummary, fetchByCountryTotal } from "../../Assets/Conts/fetchURL";
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

function App(): JSX.Element {
  const [currentValue, setCurrentValue] = useState<string>("Poland");
  const { state, dispatch } = useContext(Store);

  const handleChange = (event: FormElement): void => {
    setCurrentValue(event.currentTarget.value);
  };

  const fetchSummaryByCountry = async () => {
    const country = currentValue.toLowerCase();
    const data: AxiosResponse = await axios.get(`${fetchByCountryTotal}/${country}/status/confirmed`);
    dispatch({
      type: "FETCH_COVID_BY_COUNTRY",
      payload: data
    });
  };

  const fetchSummaryData = async () => {
    const data: AxiosResponse = await axios.get(fetchSummary);
    dispatch({
      type: "FETCH_COVID_SUMMARY",
      payload: data.data
    });
  };

  useEffect(() => {
    state.allData.length === initialArrayLength && fetchSummaryData();
  });

  console.log('context: ', state);
  return (
    <Container maxWidth="xl">
      <Grid container justify="center" spacing={4}>
        {state.allData.length !== initialArrayLength && (
          <>
            <Grid item xs={12}>
              <Headline totalCount={state.allData.Global.TotalConfirmed} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextPanel color="#2ae2ce" title="Total death" count={state.allData.Global.TotalDeaths}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextPanel color="#2ae2ce" title="Total overcame" count={state.allData.Global.TotalRecovered}/>
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <ChooseCountryPanel handleChange={handleChange} currentValue={currentValue} submitFunc={fetchSummaryByCountry}/>
        </Grid>
        {state.countryData.length !== initialArrayLength && (
          <Grid item xs={12}>
            <Table data={state.countryData.data}/>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;
