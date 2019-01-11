import { IGps } from "./gps.model";

export interface ILocationAddress {
  country: string;
  city: string;
  postalCode: string;
  street: string;
  streetNo: string;
  gps?: IGps;
}
