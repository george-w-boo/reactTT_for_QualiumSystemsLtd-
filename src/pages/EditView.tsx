import React, { useState } from 'react';
import { useHistory, Prompt, useLocation } from 'react-router-dom';
import { Product } from '../types/Product';
import { Button } from '../components/Button';
import { editProduct } from '../api/api';

interface Location {
  pathname: string;
  state: Product;
}

export const EditView: React.FC = () => {
  const location: Location = useLocation();
  const { state } = location;

  const [title, setTitle] = useState(state.title);
  const [price, setPrice] = useState(state.price);
  const [description, setDescription] = useState(state.description);
  const [isEntering, setIsEntering] = useState(false);
  const history = useHistory();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    editProduct(state.id, {
      title,
      price,
      description,
    });

    history.replace('/');
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
      <h1>Edit View</h1>
      <form action="#" onSubmit={onSubmitHandler} onFocus={formFocusHandler}>
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
