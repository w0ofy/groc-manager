import React, { useEffect, useState } from 'react';
import { Checkbox, Table } from 'evergreen-ui';
import { getGroceriesByHave } from '../services/firestore';

const { Head, TextHeaderCell, Body, TextCell, Row, } = Table;
const FilteredByHave = ({ filterByHave = true}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      getGroceriesByHave(setItems, filterByHave)
    }, [])

    return (
    <Table>
      <Head>
        <TextHeaderCell flexBasis={170} flexShrink={0} flexGrow={0}>
          Item
        </TextHeaderCell>
        <TextHeaderCell flexBasis={80} flexShrink={0} flexGrow={0}>
          We Have
        </TextHeaderCell>
        <TextHeaderCell flexBasis={125} flexShrink={0} flexGrow={0}>
          Date Bought
        </TextHeaderCell>
      </Head>
      <Body height={240}>
        {items.map(item => (
          <Row key={item.id} isSelectable onSelect={() => alert(item.name)}>
            <TextCell flexBasis={170} flexShrink={0} flexGrow={0}>{item.name}</TextCell>
            <TextCell flexBasis={80} flexShrink={0} flexGrow={0}>
              <Checkbox checked={!!item.have}></Checkbox>
            </TextCell>
            <TextCell isNumber flexBasis={125} flexShrink={0} flexGrow={0}>
            coming soon
            </TextCell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}

export default FilteredByHave;