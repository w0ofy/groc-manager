import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import ViewSelector from './Components/ViewSelector';
import { ViewsProvider } from './Context/Views';
import { ItemsProvider } from './Context/Items';
import ListSwitcher from './Components/GroceryItems/ListSwitcher';
import Header from './Components/Header';

function App() {
  return (
    <ViewsProvider>
      <ItemsProvider>
        <Pane
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          border={false}
        >
          <Header />
          <ViewSelector />
          <ListSwitcher />
        </Pane>
      </ItemsProvider>
    </ViewsProvider>
  );
};

export default App;
