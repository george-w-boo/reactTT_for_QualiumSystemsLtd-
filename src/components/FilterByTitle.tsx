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

  const handleClearFilter = () => {
    onFilter('');
    setFilterBy('');
    setIsClearFilter(true);
  };

  return (
    <form
      className={styles.form}
      onSubmit={() => {
        onFilter(filterBy);
        if (filterBy) {
          setIsClearFilter(false);
        }
      }}
    >
      {!isClearFilter && (
        <Button type="button" content="Clear Filter" onClick={() => handleClearFilter()} />
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
