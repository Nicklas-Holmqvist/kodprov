import { createContext, FunctionComponent, useContext } from 'react';
import type { ReactNode } from 'react';

export const HousesContext = createContext<Context>(undefined!);

type Context = {
  house: string;
};

export const HousesProvider: FunctionComponent = ({ children }) => {
  const house = 'ett hus';
  console.log(house);

  return (
    <HousesContext.Provider value={{ house }}>
      {children}
    </HousesContext.Provider>
  );
};

export function useHousesContext(): Context {
  return useContext<Context>(HousesContext);
}
