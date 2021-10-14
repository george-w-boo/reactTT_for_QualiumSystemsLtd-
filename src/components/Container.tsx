import React from 'react';
import styles from './Container.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const Container: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>{props.children}</div>
  );
};
