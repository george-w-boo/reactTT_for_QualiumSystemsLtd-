import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'reset' | 'button';
  content: string;
  disabled?: boolean;
};

export const Button: React.FC<Props> = (props) => {
  const {
    type,
    content,
    onClick,
    disabled,
  } = props;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
