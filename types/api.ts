import { IHouses } from './houses';
import { IPagination } from './pagination';

export interface IError {
  msg: string;
  status: boolean;
}

export interface IExportData {
  houses: IHouses[];
  status: boolean;
  links: IPagination;
}
