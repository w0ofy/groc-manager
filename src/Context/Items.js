import React, { createContext, useState, useContext, useEffect } from 'react';
import getGroceries from '../services/firestore';

const ItemsContext = createContext('lists') 



export const ItemsProvider = ({ children,  }) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    getGroceries(setItems)
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  )
};

export const useItems = () =>  useContext(ItemsContext);