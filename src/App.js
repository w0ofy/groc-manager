import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import ViewSelector from './Components/ViewSelector';
import { ViewsProvider } from './Context/Views';
import { ItemsProvider } from './Context/Items';
import ListSwitcher from './Components/GroceryItems/ListSwitcher';
import './App.css';


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
          justifyContent="center"
          border={false}
        >
          <Heading marginTop={25}>Mike &amp; Meg's Groceries</Heading>
          <ViewSelector />
          <ListSwitcher />
        </Pane>
      </ItemsProvider>
    </ViewsProvider>
  );
};

export default App;
