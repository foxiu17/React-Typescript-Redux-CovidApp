import React from 'react';
import {AxiosResponse} from "axios";

import { IActionType } from "../Interfaces/StoreInterfaces";

export const FETCH_SUMMARY = (data: AxiosResponse, dispatch: any) => {
  dispatch({
    type: "FETCH_COVID_SUMMARY",
    payload: data
  });
};

export const FETCH_BY_COUNTRY = (data: AxiosResponse, dispatch: any) => {
  dispatch({
    type: "FETCH_COVID_BY_COUNTRY",
    payload: data
  });
};

export const FETCH_COUNTRIES = (data: AxiosResponse, dispatch: any) => {
  dispatch({
    type: "FETCH_COVID_COUNTRIES",
    payload: data
  });
};

