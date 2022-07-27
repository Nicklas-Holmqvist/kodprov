import parse from 'parse-link-header';

import { Houses } from './houses';

export interface Error {
  msg: string;
  status: boolean;
}

export interface ExportData {
  houses: Houses[];
  status: boolean;
  links: parse.Links | null;
}
