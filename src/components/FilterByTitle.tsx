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

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (filterBy) {
          setIsClearFilter(true);
        }

        onFilter(filterBy);
      }}
    >
      {isClearFilter && (
        <Button
          type="button"
          content="Clear Filter"
          onClick={() => {
            setFilterBy('');
            onFilter('');
            setIsClearFilter(false);
          }}
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
