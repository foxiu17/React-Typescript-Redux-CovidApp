import React from 'react';
import {AxiosResponse} from "axios";

// import { IActionType } from "../Interfaces/ContextInterfaces";

export const FETCH_SUMMARY = (data: AxiosResponse, dispatch: any): void => {
  dispatch({
    type: "FETCH_COVID_SUMMARY",
    payload: data
  });
};

export const FETCH_BY_COUNTRY = (data: AxiosResponse, dispatch: any): void => {
  dispatch({
    type: "FETCH_COVID_BY_COUNTRY",
    payload: data
  });
};

export const FETCH_COUNTRIES = (data: AxiosResponse, dispatch: any): void => {
  dispatch({
    type: "FETCH_COVID_COUNTRIES",
    payload: data
  });
};

export const SWITCH_THEME_NIGHT = (data: String, dispatch: any): void => {
  dispatch({
    type: "SWITCH_THEME_NIGHT",
    payload: data
  });
};
