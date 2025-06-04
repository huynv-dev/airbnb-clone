'use client';

import { IconType } from 'react-icons';
import clsx from 'clsx';

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <div
      data-testid="category-container"
      onClick={() => onClick(label)}
      className={clsx(
        'flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition hover:border-black',
        selected ? 'border-black bg-neutral-100' : 'border-neutral-200',
      )}
    >
      <Icon size={30} data-testid="category-icon" />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryInput;
