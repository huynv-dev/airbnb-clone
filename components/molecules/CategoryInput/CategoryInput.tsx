'use client';

import { IconType } from 'react-icons';
import styles from './CategoryInput.module.css';
import clsx from 'clsx';

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick
}) => {
  return (
    <div
      data-testid="category-container"
      onClick={() => onClick(label)}
      className={clsx(
        styles.container,
        selected && styles.selected
      )}
    >
      <Icon size={30} data-testid="category-icon" />
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default CategoryInput; 