import React, { useState, useEffect } from 'react';

export type Gutter = number | [number, number] | Record<string, number>;
export type Align = 'top' | 'middle' | 'bottom' | 'stretch';
export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter | [Gutter, Gutter];
  align?: Align | Record<string, Align>;
  justify?: Justify | Record<string, Justify>;
  wrap?: boolean;
  children: React.ReactNode;
}

// Breakpoints definition
const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

// Hook để detect current breakpoint
export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('xs');

  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.xl) return 'xl';
      if (width >= breakpoints.lg) return 'lg';
      if (width >= breakpoints.md) return 'md';
      if (width >= breakpoints.sm) return 'sm';
      return 'xs';
    };

    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint());
    };

    // Set initial breakpoint
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return currentBreakpoint;
};

// Helper: Get responsive value
export const getResponsiveValue = <T,>(
  value: T | Record<string, T>,
  breakpoint: string,
  fallback: T
): T => {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const responsiveValue = value as Record<string, T>;

    // Tìm giá trị theo thứ tự ưu tiên breakpoint
    const orderedBreakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
    const currentIndex = orderedBreakpoints.indexOf(breakpoint);

    // Tìm từ breakpoint hiện tại trở xuống
    for (let i = currentIndex; i < orderedBreakpoints.length; i++) {
      const bp = orderedBreakpoints[i];
      if (responsiveValue[bp] !== undefined) {
        return responsiveValue[bp];
      }
    }

    return fallback;
  }

  return value as T;
};

// Helper: Get gutter value
const getGutterValue = (gutter: Gutter, breakpoint: string): number => {
  if (typeof gutter === 'number') return gutter;
  if (Array.isArray(gutter)) return 0;
  if (typeof gutter === 'object') {
    return getResponsiveValue(gutter, breakpoint, 0);
  }
  return 0;
};

export const Row: React.FC<RowProps> = ({
  gutter = 0,
  align = 'top',
  justify = 'start',
  wrap = true,
  children,
  className = '',
  ...rest
}) => {
  const currentBreakpoint = useBreakpoint();

  // Process gutter với responsive
  const processGutter = (gutterValue: Gutter | [Gutter, Gutter]) => {
    if (Array.isArray(gutterValue)) {
      const [horizontal, vertical] = gutterValue;
      return [
        getGutterValue(horizontal, currentBreakpoint),
        getGutterValue(vertical, currentBreakpoint)
      ];
    }
    return [getGutterValue(gutterValue, currentBreakpoint), 0];
  };

  const [hGutter, vGutter] = processGutter(gutter);

  // Get responsive values cho align và justify
  const currentAlign = getResponsiveValue(align, currentBreakpoint, 'top');
  const currentJustify = getResponsiveValue(justify, currentBreakpoint, 'start');

  const rowStyle: React.CSSProperties = {
    marginLeft: -hGutter / 2,
    marginRight: -hGutter / 2,
    marginTop: -vGutter / 2,
    marginBottom: -vGutter / 2,
  };

  // Build className với responsive values
  const getClassName = () => {
    const classes = ['flex'];

    // Wrap
    classes.push(wrap ? 'flex-wrap' : 'flex-nowrap');

    // Align (responsive)
    switch (currentAlign) {
      case 'top': classes.push('items-start'); break;
      case 'middle': classes.push('items-center'); break;
      case 'bottom': classes.push('items-end'); break;
      case 'stretch': classes.push('items-stretch'); break;
    }

    // Justify (responsive)
    switch (currentJustify) {
      case 'start': classes.push('justify-start'); break;
      case 'end': classes.push('justify-end'); break;
      case 'center': classes.push('justify-center'); break;
      case 'space-around': classes.push('justify-around'); break;
      case 'space-between': classes.push('justify-between'); break;
      case 'space-evenly': classes.push('justify-evenly'); break;
    }

    if (className) classes.push(className);

    return classes.join(' ');
  };

  return (
    <div
      className={getClassName()}
      style={rowStyle}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            gutter: [hGutter, vGutter],
          } as any);
        }
        return child;
      })}
    </div>
  );
};



