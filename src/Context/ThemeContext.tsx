import React, { createContext, useReducer } from 'react';

import { IInitialThemeState, IThemeActionType } from "../Interfaces/ContextInterfaces";

const initialThemeState: IInitialThemeState = {
  theme: 'day'
};

export const Theme = createContext<IInitialThemeState | any>(initialThemeState);

function ThemeReducerFunc(state: IInitialThemeState, action: IThemeActionType): IInitialThemeState {

  switch (action.type) {
    case "SWITCH_THEME_NIGHT":
      return {
        theme: 'night'
      };
    case "SWITCH_THEME_DAY":
      return {
        theme: 'day'
      };
    default:
      return {
        theme: 'day'
      };
  }
}

export function ThemeProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(ThemeReducerFunc, initialThemeState);
  return <Theme.Provider value={{state, dispatch}}>{props.children}</Theme.Provider>
}