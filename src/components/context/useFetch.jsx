import React, { createContext, useContext, useEffect, useState } from "react";

export const SearchContext = createContext([]);

export const SearchContextProvider = ({ children }) => {
  const [dataValue, setDataValue] = useState([]);

  const url = `https://fakestoreapi.com/products`;

  async function getApi() {
    const response = await fetch(url);
    const dataRequest = await response.json();
    setDataValue(dataRequest);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <SearchContext.Provider value={{ dataValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useFetch() {
  const data = useContext(SearchContext);

  const { dataValue } = data;

  return { dataValue };
}
