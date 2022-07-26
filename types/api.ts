import parse from 'parse-link-header';

import { IHouses } from './houses';

export interface IError {
  msg: string;
  status: boolean;
}

export interface IExportData {
  houses: IHouses[];
  status: boolean;
  links: parse.Links | null;
}
