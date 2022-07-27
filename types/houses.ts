import { IPagination } from './pagination';

export interface Houses {
  houses: House[];
  status: boolean;
  links: IPagination;
}

export interface House {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles: any[];
  seats: any[];
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons: any[];
  cadetBranches: any[];
  swornMembers: any[];
}
