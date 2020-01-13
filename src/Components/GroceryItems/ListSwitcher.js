import React from 'react';
import { Pane } from 'evergreen-ui';
import { useViews, viewsFilterMap } from '../../Context/Views';
import AddItem from '../AddItem';
import GroceryList from './GroceryList';

const ListSwitcher = () => {
  const { selectedView } = useViews();
  return (
    <Pane border="default" display="flex" flexDirection="column" minWidth={375} maxWidth={600}>
      <AddItem />
      <GroceryList filterByHave={viewsFilterMap[selectedView]} />
    </Pane>
  );
};

export default ListSwitcher;