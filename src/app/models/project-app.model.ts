import { IProjectLink } from "./project-link.model";

export interface IProjectApp {
  id: string;
  name: string;
  desc: string;
  technologies: Array<String>;
  startDate: string;
  endDate?: string;
  responsibilities?: Array<string>;
  moreInfo?: Array<string>;
  links?: Array<IProjectLink>;
}
