import { ILocationAddress } from "./location-address.model";
import { IPersonalInfoContact } from "./personal-info-contact.model";
import { ISocialMediaItem } from "./social-media-item.model";

export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  currentLocation: ILocationAddress;
  contact: IPersonalInfoContact;
  socialMedia: Array<ISocialMediaItem>;
}
