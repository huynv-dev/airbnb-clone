'use client';

import LogoIcon from '@/components/icons/custom/LogoIcon';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const sizes = {
  sm: { width: 82, height: 25 },
  md: { width: 102, height: 32 },
  lg: { width: 120, height: 38 },
};

export const Logo = ({
  className,
  size = 'md',
  color = '#FF385C'
}: LogoProps) => {
  const { width, height } = sizes[size];

  return (
    <Link
      href="/"
      className={className}
    >
      <LogoIcon width={width} height={height} color={color} />
    </Link>
  );
}; 