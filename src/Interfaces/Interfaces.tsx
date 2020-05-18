import { FormEvent } from "../Types/Types";

export interface ICountryPanelProps {
  countries: [];
  handleChange?: FormEvent;
  submitFunc?: FormEvent;
  currentValue: string;
}

export interface ITextPanelProps {
  color?: string;
  title?: string;
  count?: number;
  status?: string;
}

export interface IHeadlineProps {
  totalCount?: number
}