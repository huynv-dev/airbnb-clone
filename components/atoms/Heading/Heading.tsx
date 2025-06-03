'use client';

import clsx from 'clsx';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={clsx(center ? 'text-center' : 'text-start')}>
      <div className="text-2xl font-bold text-neutral-800">{title}</div>
      {subtitle && (
        <div className="mt-1 text-sm text-neutral-500">{subtitle}</div>
      )}
    </div>
  );
};

export default Heading;
