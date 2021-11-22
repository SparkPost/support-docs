import React from 'react';

export type Category = {
  label?: string;
  key?: string;
};

type CategoriesProviderProps = {
  children?: React.ReactNode;
  data?: Category[];
};

export const CategoriesContext = React.createContext<Category[]>([]);

export const CategoriesProvider = (props: CategoriesProviderProps): JSX.Element => {
  const { children, data = [] } = props;

  return <CategoriesContext.Provider value={data}>{children}</CategoriesContext.Provider>;
};
