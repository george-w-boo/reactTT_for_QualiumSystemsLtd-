import React from 'react';
import styles from './Pagination.module.scss';

type Props = {
  productsPerPage: number;
  productsNumber: number;
  onPaginationListItem: (pageNumber: number) => void;
};

export const Pagination: React.FC<Props> = (props) => {
  const { productsPerPage, productsNumber, onPaginationListItem } = props;

  const paginationLength = Math.ceil(productsNumber / productsPerPage);

  const paginationList = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= paginationLength; i++) {
    paginationList.push(i);
  }

  return (
    <ul className={styles['pagination-list']}>
      {paginationList.map(item => (
        <li key={item} className={styles['pagination-list__item']}>
          <a
            href="!#"
            className={styles['pagination-list__link']}
            onClick={() => onPaginationListItem(item)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
