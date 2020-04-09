import { FormEvent } from "../Types/Types";

export interface ICountryPanelProps {
  handleChange: FormEvent;
  submitFunc: FormEvent;
  currentValue: string;
}