import React from 'react';
import classNames from 'classnames';
import { getResponsiveValue, useBreakpoint } from './Row';

export type ResponsiveValue = number | Record<string, number>;



interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ResponsiveValue;
  offset?: ResponsiveValue;
  order?: ResponsiveValue;
  push?: ResponsiveValue;
  pull?: ResponsiveValue;
  flex?: string | number;
  gutter?: [ResponsiveValue, ResponsiveValue];
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const Col: React.FC<ColProps> = ({
  span,
  offset = 0,
  order = 0,
  push = 0,
  pull = 0,
  flex,
  gutter = [0, 0],
  className,
  children,
  style,
  xs,
  sm,
  md,
  lg,
  xl,
  ...rest
}) => {
  const currentBreakpoint = useBreakpoint();
  const [horizontalGutter, verticalGutter] = gutter;

  const mergedSpan: ResponsiveValue = span ?? (
    Object.fromEntries(
      Object.entries({ xs, sm, md, lg, xl })
        .filter(([_, value]) => typeof value === 'number')
    ) as Record<string, number>
  );



  // Xử lý responsive values
  const hGutter = getResponsiveValue(horizontalGutter, currentBreakpoint, 0);
  const vGutter = getResponsiveValue(verticalGutter, currentBreakpoint, 0);
  const currentSpan = getResponsiveValue(mergedSpan, currentBreakpoint, 24);
  const currentOffset = getResponsiveValue(offset, currentBreakpoint, 0);
  const currentOrder = getResponsiveValue(order, currentBreakpoint, 0);
  const currentPush = getResponsiveValue(push, currentBreakpoint, 0);
  const currentPull = getResponsiveValue(pull, currentBreakpoint, 0);

  const colStyle: React.CSSProperties = {
    ...style,
    width: currentSpan ? `${(currentSpan / 24) * 100}%` : undefined,
    marginLeft: currentOffset ? `${(currentOffset / 24) * 100}%` : undefined,
    left: currentPush ? `${(currentPush / 24) * 100}%` : undefined,
    right: currentPull ? `${(currentPull / 24) * 100}%` : undefined,
    paddingLeft: hGutter / 2,
    paddingRight: hGutter / 2,
    paddingTop: vGutter / 2,
    paddingBottom: vGutter / 2,
    flex: flex ?? (currentSpan ? undefined : '1'),
    order: currentOrder,
  };

  return (
    <div
      className={classNames(
        currentSpan ? '' : 'flex-1',
        'relative',
        'h-full',
        className
      )}
      style={colStyle}
      {...rest}
    >
      <div className="min-h-[60px] h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
