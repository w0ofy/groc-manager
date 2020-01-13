import React from 'react';
import { TabNavigation, Tab, Pane } from 'evergreen-ui';
import { useViews, VIEWS } from '../Context/Views';


const ViewSelector = () => {
  const { selectedView, setSelectedView } = useViews();
  return (
  <Pane
    height={50}
    display="flex"
    alignItems="center"
    justifyContent="start"
    minWidth={375}
    maxWidth={600}
    border={false}
  >
    <TabNavigation>
      {VIEWS.map(({ view, value }) => (
        <Tab
          key={value}
          id={value}
          isSelected={value === selectedView}
          onSelect={() => setSelectedView(value)}
        >
          {view}
        </Tab>
      ))}
    </TabNavigation>
  </Pane>
  );
};

export default ViewSelector;

/*
<SegmentedControl
  width={240}
  options={views}
  value={view}
  onChange={view => setView(view)}
/> 
*/