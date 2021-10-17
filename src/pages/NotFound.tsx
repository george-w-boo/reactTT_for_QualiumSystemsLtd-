import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const NotFound = () => {
  return (
    <>
      <p>Page not found...</p>
      <Link to="/">
        <Button type="button" content="Home" />
      </Link>
    </>
  );
};
