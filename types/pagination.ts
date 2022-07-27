export interface Pagination {
  [key: string]: Page;
}

export interface Page {
  page: string;
  pageSize: string;
  rel: string;
  url: string;
}
