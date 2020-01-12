import React from 'react';
import { Pane } from 'evergreen-ui';
import { useViews } from '../../Context/Views';
import AddItem from '../AddItem';
import GroceryList from './GroceryList';

const ListSwitcher = () => {
  const { selectedView } = useViews();
  return (
    <Pane border="default" display="flex" flexDirection="column" minWidth={350} maxWidth={600} flexGrow={1}>
      <AddItem />
      {selectedView === 'list' && <GroceryList />}
      {selectedView === 'haves' && <GroceryList filterByHave />}
      {selectedView === 'donthaves' && <GroceryList filterByHave={false} />}
    </Pane>
  );
};

export default ListSwitcher;