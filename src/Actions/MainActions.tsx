import React, { useContext } from 'react';
import { Store } from '../Context/Store';
import {AxiosResponse} from "axios";

export const FETCH_SUMMARY = (data: AxiosResponse) => {
  const { state, dispatch } = useContext(Store);

  dispatch({
    type: "FETCH_COVID_SUMMARY",
    payload: data.data
  });
};

export const FETCH_BY_COUNTRY = (data: AxiosResponse) => {
  const { state, dispatch } = useContext(Store);

  dispatch({
    type: "FETCH_COVID_BY_COUNTRY",
    payload: data
  });
};

export const FETCH_COUNTRIES = () => {
  const { state, dispatch } = useContext(Store);
};

