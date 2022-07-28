import { Pagination } from '../components/pagination/Pagination';

export interface Houses {
  houses: House[];
  status: boolean;
  links: Pagination;
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
