import React, { createContext, useState, useContext } from 'react';

const ViewsContext = createContext('lists') 

export const VIEWS = [
  { view: 'Our List', value: 'list' },
  { view: 'We Haves', value: 'haves' },
  { view: 'We Don\'t Haves', value: 'donthaves' },

];

export const ViewsProvider = ({ children,  }) => {
  const [selectedView, setSelectedView] = useState(VIEWS[0].value)

  return (
    <ViewsContext.Provider value={{ selectedView, setSelectedView }}>
      {children}
    </ViewsContext.Provider>
  )
};

export const useViews = () =>  useContext(ViewsContext);