import React, { useEffect, useState } from 'react';
import { Checkbox, Table, IconButton } from 'evergreen-ui';
import { deleteItem, updateItem } from '../../services/firestore';
import { useItems } from '../../Context/Items';

const { Head, TextHeaderCell, Body, TextCell, Row, } = Table;

const GroceryList = ({ filterByHave = 'all'}) => {
  const { items } = useItems();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let listItems = items;
    if (filterByHave !== 'all') {
      listItems = items.filter(item => item.have === filterByHave);
    }
    setFilteredItems(listItems);
  }, [items, filterByHave]);

  return (
    <Table>
      <Head>
        <TextHeaderCell flexBasis={150} flexShrink={0} flexGrow={0}>
          Item
        </TextHeaderCell>
        <TextHeaderCell flexBasis={120} flexShrink={0} flexGrow={0}>
          We Have
        </TextHeaderCell>
        <TextHeaderCell>
        </TextHeaderCell>
      </Head>
      <Body height={240}>
        {filteredItems.map(item => (
          <Row key={item.id}>
            <TextCell flexBasis={150} flexShrink={0} flexGrow={0}>{item.name}</TextCell>
            <TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
              <Checkbox checked={!!item.have} onChange={e => updateItem(item.id, { have: e.target.checked })}></Checkbox>
            </TextCell>
            <TextCell>
              <IconButton intent="danger" icon="delete" onClick={() => deleteItem(item.id)}></IconButton>
            </TextCell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}

export default GroceryList;