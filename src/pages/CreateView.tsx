import React, { useState } from 'react';
import { useHistory, Prompt } from 'react-router-dom';
import { Button } from '../components/Button';
import { addProduct } from '../api/api';

export const CreateView: React.FC = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [isEntering, setIsEntering] = useState(false);
  const history = useHistory();

  const addNewProduct = (event: React.FormEvent) => {
    event.preventDefault();

    addProduct({
      title,
      price,
      description,
    });

    history.push('/main_view');
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={() => 'Are you sure you want to leave? All your entered data will be lost.'}
      />
      <h1>Create View</h1>
      <form action="#" onSubmit={addNewProduct} onFocus={formFocusHandler}>
        <input
          type="text"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          value={price}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(+event.target.value);
          }}
        />
        <input
          type="text"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
        />
        <Button type="submit" content="Save" onClick={() => setIsEntering(false)} />
      </form>
    </>
  );
};
