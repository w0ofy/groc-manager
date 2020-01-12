import React from 'react';
import { Heading, Pane } from 'evergreen-ui';
import ViewSelector from './Components/ViewSelector';
import { ViewsProvider } from './Context/Views';
import OurList from './Components/List';

import './App.css';

function App() {
  return (
    <ViewsProvider>
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
        <OurList />
      </Pane>
    </ViewsProvider>
  );
}

export default App;
