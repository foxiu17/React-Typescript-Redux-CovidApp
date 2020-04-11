import React, { createContext, useReducer } from "react";

import { IInitialState, IActionType } from "../Interfaces/StoreInterfaces";

const initialState: IInitialState = {
  allData: [],
  countryData: [],
  countries: []
};

export const Store = createContext<IInitialState | any>(initialState);

function Reducers(state: IInitialState, action: IActionType): IInitialState {
  switch (action.type) {
    case "FETCH_COVID_SUMMARY":
      return {
        ...state,
        allData: action.payload
      };
    case "FETCH_COVID_BY_COUNTRY":
      return {
        ...state,
        countryData: action.payload
      };
    case "FETCH_COVID_COUNTRIES":
      return {
        ...state,
        countries: action.payload
      };
    default:
      return state;
  }
}
export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(Reducers, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};