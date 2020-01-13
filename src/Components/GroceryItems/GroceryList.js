import React, { useEffect, useState } from 'react';
import { filter } from 'fuzzaldrin-plus'
import { Checkbox, Table, IconButton } from 'evergreen-ui';
import { deleteItem, updateItem } from '../../services/firestore';
import { useItems } from '../../Context/Items';

const { Head, TextHeaderCell, Body, TextCell, Row, SearchHeaderCell } = Table;

const GroceryList = ({ filterByHave = 'all'}) => {
  const { items } = useItems();
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let listItems = items;
    if (filterByHave !== 'all') {
      listItems = items.filter(item => item.have === filterByHave);
    }
    setFilteredItems(search(listItems));
  }, [items, filterByHave, searchValue]);

  const search = listItems => {
    const searchQuery = searchValue.trim()

    // If the searchQuery is empty, return the list items as is.
    if (searchQuery.length === 0) return listItems

    return listItems.filter(item => {
      // Filter by name.
      const result = filter([item.name], searchQuery)
      return result.length === 1;
    });
  }

  return (
    <Table>
      <Head>
        <SearchHeaderCell flexBasis={200} flexShrink={0} flexGrow={0} placeholder="Find..." onChange={value => setSearchValue(value)}>
          Item
        </SearchHeaderCell>
        <TextHeaderCell >
          We Have
        </TextHeaderCell>
        <TextHeaderCell>
        </TextHeaderCell>
      </Head>
      <Body height={240}>
        {filteredItems.map(item => (
          <Row key={item.id} height={68}>
            <TextCell flexBasis={200} flexShrink={0} flexGrow={0}>{item.name}</TextCell>
            <TextCell >
              <Checkbox checked={!!item.have} onChange={e => updateItem(item.id, { have: e.target.checked })}></Checkbox>
            </TextCell>
            <TextCell>
              <IconButton intent="danger" icon="delete" appearance="minimal" onClick={() => deleteItem(item.id)}></IconButton>
            </TextCell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}

export default GroceryList;