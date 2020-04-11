import { FormEvent } from "../Types/Types";

export interface ICountryPanelProps {
  countries: [];
  handleChange: FormEvent;
  submitFunc: FormEvent;
  currentValue: string;
}