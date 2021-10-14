import React from 'react';
import styles from './Grid.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const Grid: React.FC<Props> = (props) => {
  return (
    <div className={styles.grid}>{props.children}</div>
  );
};
