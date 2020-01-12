import React from 'react';
import { TabNavigation, Tab, Pane } from 'evergreen-ui';
import { useViews, VIEWS } from '../Context/Views';


const ViewSelector = () => {
  const { selectedView, setSelectedView } = useViews();
  return (
  <Pane
    height={75}
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    border={false}

  >
    <TabNavigation>
      {VIEWS.map(({ view, value }) => (
        <Tab
          key={value}
          is="button"
          href={value}
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