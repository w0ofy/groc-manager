import React, { createContext, useState, useContext } from 'react';

const ViewsContext = createContext(null) 

export const VIEWS = [
  { view: 'All', value: 'all' },
  { view: 'Haves', value: 'haves' },
  { view: 'Don\'t Haves', value: 'donthaves' },
];

export const viewsFilterMap = {
  all: 'all',
  haves: true,
  donthaves: false,
}

export const ViewsProvider = ({ children,  }) => {
  const [selectedView, setSelectedView] = useState(VIEWS[0].value)

  return (
    <ViewsContext.Provider value={{ selectedView, setSelectedView }}>
      {children}
    </ViewsContext.Provider>
  )
};

export const useViews = () =>  useContext(ViewsContext);

