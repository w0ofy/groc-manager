import React, { useState } from 'react';
import { IconButton, Pane, TextInput } from 'evergreen-ui';
import { addItem } from '../services/firestore';

const AddItem = () => {
  const [item, setItem] = useState('');

  return (
    <Pane padding={24} border={false} display="flex" flexDirection="row" justifyContent="center" alignItems="start">
      <TextInput
        placeholder="Add a new item"
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