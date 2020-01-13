import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

const Header = () => (
    <Pane marginBottom={24} border={false} display="flex" flexDirection="column" justifyContent="center" alignItems="start">
      <Heading marginTop={25}>Mike &amp; Meg's Groceries</Heading>
    </Pane>
  );

export default Header;