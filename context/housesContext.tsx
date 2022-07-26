import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';

import { House, IHouses, IPagination } from '../types';

export const HousesContext = createContext<Context>(undefined!);

type Context = {
  noResult: {
    msg: string;
    resultBoolean: boolean;
  };
  houses: House[];
  loaded: boolean;
  pagination: IPagination;
  pageSize: number;
  searchValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetSearch: () => void;
  fetchAllHouses: (page: number, pageSize: number) => void;
  fetchSearchResult: () => void;
};

export const HousesProvider: FunctionComponent = ({ children }) => {
  const basePage = 1;
  const basePageSize = 10;

  const [houses, setHouses] = useState<House[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pagination, setPagination] = useState<IPagination>({});
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchValue, setSearchValue] = useState<string>('');
  const [noResult, setNoResult] = useState<{
    msg: string;
    resultBoolean: boolean;
  }>({
    msg: 'No house found by name, try with the full name!',
    resultBoolean: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (noResult.resultBoolean === true && searchValue.length >= 0) {
      return resetSearch();
    }
    setSearchValue(event.target.value);
  };

  const resetSearch = () => {
    setSearchValue('');
    fetchAllHouses(basePage, pageSize);
    setPageSize(pageSize);
    setNoResult((oldState) => ({
      ...oldState,
      resultBoolean: false,
    }));
  };

  /**
   * Gets a list of houses queried by the params
   * @param page pagenumber in the pagination that will be fetch in the api query
   * @param pageSize how many items to show per page, 10-50
   * @returns list of houses
   */
  const fetchAllHouses = async (page: number, pageSize: number) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, pageSize }),
    };

    const response = await fetch('api/houses', options);
    const data: IHouses = await response.json();
    if (!data.status) return;
    setHouses(data.houses);
    setLoaded(data.status);
    setPagination(data.links);
    setPageSize(Number(data.links['first'].pageSize));
  };

  /**
   * Gets the result of a search by housename
   */
  const fetchSearchResult = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageSize, basePage }),
    };

    const response = await fetch(`api/houses/${searchValue}`, options);
    const data: IHouses = await response.json();

    if (!data.status) return;
    setPagination(data.links);
    setPageSize(Number(data.links['first'].pageSize));

    if (data.houses.length === 0)
      return setNoResult((oldState) => ({
        ...oldState,
        resultBoolean: true,
      }));
    setLoaded(false);
    setNoResult((oldState) => ({
      ...oldState,
      resultBoolean: false,
    }));
    setHouses(data.houses);
    setLoaded(data.status);
  };

  /**
   * Runs at start once to fetch the list
   */
  useEffect(() => {
    fetchAllHouses(basePage, basePageSize);
  }, []);

  return (
    <HousesContext.Provider
      value={{
        houses,
        loaded,
        pageSize,
        noResult,
        pagination,
        searchValue,
        handleInputChange,
        resetSearch,
        fetchAllHouses,
        fetchSearchResult,
      }}
    >
      {children}
    </HousesContext.Provider>
  );
};

export function useHousesContext(): Context {
  return useContext<Context>(HousesContext);
}
