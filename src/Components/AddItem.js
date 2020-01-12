import React, { useState } from 'react';
import { IconButton, Pane, TextInputField } from 'evergreen-ui';
import firestore, { GROCERY_ITEMS, addItem } from '../services/firestore';

const AddItem = () => {
  const [item, setItem] = useState('');


  return (
    <Pane padding={16} border={false} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
      <TextInputField
        label="Add a new item"
        placeholder="string beans"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <IconButton
        marginLeft={5} icon="add"
        onClick={() => addItem(item, setItem)}
        disabled={!item}
        intent="success"
      >Add Item</IconButton>
    </Pane>
  )
}

export default AddItem;