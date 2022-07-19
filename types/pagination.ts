export interface IPagination {
  [key: string]: IPage;
}

export interface IPage {
  page: string;
  pageSize: string;
  rel: string;
  url: string;
}
