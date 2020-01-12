import React from 'react';
import { Pane } from 'evergreen-ui';
import { useViews } from '../Context/Views';
import AddItem from './AddItem';
import Items from './Items';
import FilteredByHave from './WeHaves';

const OurList = () => {
  const { selectedView } = useViews();

  return (
    <Pane border="default" width={375}>
      <AddItem />
      {selectedView === 'list' && <Items />}
      {selectedView === 'haves' && <FilteredByHave />}
      {selectedView === 'donthaves' && <FilteredByHave filterByHave={false} />}
    </Pane>
  )
};

export default OurList;