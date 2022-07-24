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
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetSearch: () => void;
  fetchAllHouses: (page: number, displayCount: number) => void;
  fetchSearchResult: () => void;
};

export const HousesProvider: FunctionComponent = ({ children }) => {
  const [houses, setHouses] = useState<House[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pagination, setPagination] = useState<IPagination>({});
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchValue, setSearchValue] = useState<string>('');
  const [noResult, setNoResult] = useState<{
    msg: string;
    resultBoolean: boolean;
  }>({
    msg: 'Inget hus hittades, försök med hela namnet!',
    resultBoolean: false,
  });

  const page = 1;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (noResult.resultBoolean === true && searchValue.length >= 0) {
      return resetSearch();
    }
    if (noResult.resultBoolean === false && searchValue.length >= 0) {
      resetSearch();
    }
    setSearchValue(event.target.value);
  };

  const resetSearch = () => {
    setSearchValue('');
    fetchAllHouses(page, pageSize);
    setPageSize(pageSize);
    setNoResult((oldState) => ({
      ...oldState,
      resultBoolean: false,
    }));
  };

  const fetchAllHouses = async (page: number, displayCount: number) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, displayCount }),
    };

    const response = await fetch('api/houses', options);
    const data: IHouses = await response.json();
    if (!data.status) return;
    setHouses(data.houses);
    setLoaded(data.status);
    setPagination(data.links);
    setPageSize(Number(data.links['first'].pageSize));
  };

  const fetchSearchResult = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchValue, pageSize, page }),
    };

    const response = await fetch('api/search', options);
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

  useEffect(() => {
    fetchAllHouses(page, pageSize);
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
        handleChange,
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
