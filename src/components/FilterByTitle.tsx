import React, { useState } from 'react';
import styles from './FilterByTitle.module.scss';
import { Button } from './Button';

type Props = {
  onFilter: (title: string) => void;
};

export const FilterByTitle: React.FC<Props> = (props) => {
  const { onFilter } = props;

  const [filterBy, setFilterBy] = useState('');
  const [isClearFilter, setIsClearFilter] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (filterBy) {
      setIsClearFilter(true);

      onFilter(filterBy);
    }
  };

  const clearFilterHandler = () => {
    setFilterBy('');
    onFilter('');
    setIsClearFilter(false);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {isClearFilter && (
        <Button
          type="button"
          content="Clear Filter"
          onClick={clearFilterHandler}
        />
      )}
      <input
        type="text"
        value={filterBy}
        onChange={(event) => {
          setFilterBy(event.target.value);
        }}
        className={styles.form__field}
        placeholder="Enter the product title"
      />
      <Button type="submit" content="Filter" />
    </form>
  );
};
