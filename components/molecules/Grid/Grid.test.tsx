import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Row } from './Row';
import { Col } from './Col';

describe('Grid system', () => {
  it('renders Col with correct span and offset styles', () => {
    const { getByText } = render(
      <Row gutter={[16, 16]}>
        <Col span={12} offset={6}>
          Column Content
        </Col>
      </Row>
    );

    const colElement = getByText('Column Content').parentElement!;
    expect(colElement).toHaveStyle({
      width: '50%', // 12 / 24
      marginLeft: '25%', // 6 / 24
      paddingLeft: '8px', // 16 / 2
      paddingRight: '8px',
      paddingTop: '8px',
      paddingBottom: '8px',
    });
  });

  it('applies responsive span correctly based on default breakpoint', () => {
    const { getByText } = render(
      <Row>
        <Col span={{ xs: 6, md: 12 }}>Responsive Column</Col>
      </Row>
    );

    const colElement = getByText('Responsive Column').parentElement!;
    // Mặc định window.innerWidth ở test là 1024px → 'md' breakpoint → span = 12
    expect(colElement).toHaveStyle({ width: '50%' });
  });

  it('renders Row with correct classNames for align and justify', () => {
    const { container } = render(
      <Row align="middle" justify="center" wrap={false}>
        <Col span={6}>A</Col>
      </Row>
    );

    const row = container.firstChild as HTMLDivElement;
    expect(row.className).toContain('items-center');
    expect(row.className).toContain('justify-center');
    expect(row.className).toContain('flex-nowrap');
  });

  it('passes gutter values to child Cols', () => {
    const { getByText } = render(
      <Row gutter={[20, 10]}>
        <Col span={6}>Test</Col>
      </Row>
    );

    const colElement = getByText('Test').parentElement!;
    expect(colElement).toHaveStyle({
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
    });
  });

  it('renders with default span = 24 when no span provided', () => {
    const { getByText } = render(
      <Row>
        <Col>Default Span</Col>
      </Row>
    );

    const colElement = getByText('Default Span').parentElement!;
    expect(colElement).toHaveStyle({ width: '100%' });
  });
});
