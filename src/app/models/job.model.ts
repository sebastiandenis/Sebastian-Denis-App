import { IJobRole } from "./job-role.model";
import { IJobLink } from "./job-link.model";

export interface IJob {
  id: string;
  startDate: string;
  endDate: string;
  roles: Array<IJobRole>;
  links: Array<IJobLink>;
}
