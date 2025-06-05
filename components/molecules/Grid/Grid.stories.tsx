import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Col } from './Col';
import { Row } from './Row';

const meta: Meta<any> = {
  title: 'Molecules/Grid',
  component: Col,
  tags: ['autodocs'],
  argTypes: {
    // ---- ROW PROPS ----
    gutter: {
      control: 'object',
      description: 'Gutter spacing (horizontal, vertical)',
      defaultValue: [16, 16],
    },
    align: {
      control: 'select',
      options: ['top', 'middle', 'bottom', 'stretch'],
      defaultValue: 'top',
      description: 'Vertical alignment'
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
      defaultValue: 'start',
      description: 'Horizontal arrangement'
    },
    wrap: {
      control: 'boolean',
      defaultValue: true,
      description: 'Auto wrap line'
    },

    // ---- COL PROPS ----
    span: {
      description: 'Raster number of cells to occupy, 0 corresponds to display: none',
      control: 'number',
      defaultValue: 24,
    },
    offset: {
      description: 'The number of cells to offset Col from the left',
      control: 'number',
      defaultValue: 0,
    },
    order: {
      description: '	Raster order',
      control: 'number',
      defaultValue: 0,
    },
    push: {
      description: 'The number of cells that raster is moved to the right',
      control: 'number',
      defaultValue: 0,
    },
    pull: {
      description: 'The number of cells that raster is moved to the left',
      control: 'number',
      defaultValue: 0,
    },
    flex: {
      description: 'Flex layout style',
      control: 'text',
      defaultValue: '',
    },

    xs: {
      control: 'number',
      description: 'screen < 576px and also default setting, could be a span value or an object containing above props',
    },
    sm: {
      control: 'number',
      description: 'screen ≥ 576px, could be a span value or an object containing above props',
    },
    md: {
      control: 'number',
      description: 'screen ≥ 768px, could be a span value or an object containing above props',
    },
    lg: {
      control: 'number',
      description: 'screen ≥ 992px, could be a span value or an object containing above props',
    },
    xl: {
      control: 'number',
      description: 'screen ≥ 1200px, could be a span value or an object containing above props',
    },

    children: {
      control: 'text',
      defaultValue: 'Column content',
    },
  },
};
export default meta;


export const BasicGrid = () => (
  <div className='flex flex-col gap-2'>
    <Row>
      <Col span={24} className='bg-blue-500'>col</Col>
    </Row>
    <Row>
      <Col span={12} className='bg-blue-200'>col-12</Col>
      <Col span={12} className='bg-blue-500'>col-12</Col>
    </Row>
    <Row>
      <Col span={8} className='bg-blue-200'>col-8</Col>
      <Col span={8} className='bg-blue-500'>col-8</Col>
      <Col span={8} className='bg-blue-200'>col-8</Col>
    </Row>
    <Row>
      <Col span={6} className='bg-blue-200'>col-6</Col>
      <Col span={6} className='bg-blue-500'>col-6</Col>
      <Col span={6} className='bg-blue-200'>col-6</Col>
      <Col span={6} className='bg-blue-500'>col-6</Col>
    </Row>
    <Row>
      <Col span={18} className='bg-blue-200'>col-18</Col>
      <Col span={6} className='bg-blue-500'>col-6</Col>
    </Row>
  </div>
);

export const OffsetCols = () => (
  <div className='flex flex-col gap-2'>
    <Row>
      <Col className='bg-blue-200' span={8}>col-8</Col>
      <Col className='bg-blue-500' span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6} className='bg-blue-200'>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6} className='bg-blue-200'>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6} className='bg-blue-200'>
        col-12 col-offset-6
      </Col>
    </Row>
  </div>

);

export const GridSort = () => (
  <Row>
    <Col span={18} push={6} className='bg-blue-200'>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18} className='bg-blue-500'>
      col-6 col-pull-18
    </Col>
  </Row>
)


const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 my-6">
    <span className="text-lg font-semibold whitespace-nowrap">{children}</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
);

const DemoBox: React.FC<React.PropsWithChildren<{ value: number }>> = (props) => (
  <p className={`bg-blue-500 text-center mb-2`} style={{ height: props.value, width: 100 }}>
    {props.children}
  </p>
);

export const Alignment = () => (
  <>
    <SectionTitle>Align Top</SectionTitle>
    <Row justify="center" align="top" className='bg-slate-100'>
      <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
    </Row>

    <SectionTitle>Align Middle</SectionTitle>
    <Row justify="space-around" align="middle" className='bg-slate-100'>
      <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
    </Row>

    <SectionTitle>Align Bottom</SectionTitle>
    <Row justify="space-between" align="bottom" className='bg-slate-100'>
      <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
      <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
    </Row>
  </>
);

export const Responsive = () => (
  <Row>
    <Col className='bg-slate-100' xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col className='bg-blue-500' xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col className='bg-slate-100' xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
)




const BtnGroup: React.FC<{
  options: number[];
  value: number;
  onChange: (val: number) => void;
  label: string;
}> = ({ options, value, onChange, label }) => (

  <div className="mb-4">
    <span className="font-medium mr-4">{label}</span>
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        className={`px-3 py-1 mr-2 rounded border ${value === opt ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        type="button"
      >
        {opt}
      </button>
    ))}
  </div>
);

export const Playground = () => {
  const gutterOptions = [8, 16, 24, 32, 40, 48];
  const colCountOptions = [2, 3, 4, 6, 8, 12];
  const [gutter, setGutter] = useState(16);
  const [vgutter, setVGutter] = useState(16);
  const [colCount, setColCount] = useState(4);

  const cols = Array.from({ length: colCount }, (_, i) => (
    <Col key={i} span={24 / colCount}>
      <div className="bg-blue-500 h-16 w-16 flex items-center justify-center">Column</div>
    </Col>
  ));

  return (
    <div>
      <BtnGroup options={gutterOptions} value={gutter} onChange={setGutter} label="Horizontal Gutter:" />
      <BtnGroup options={gutterOptions} value={vgutter} onChange={setVGutter} label="Vertical Gutter:" />
      <BtnGroup options={colCountOptions} value={colCount} onChange={setColCount} label="Column Count:" />

      <Row className='bg-slate-200' gutter={[gutter, vgutter]}>{cols}</Row>
      <Row className='bg-slate-200' gutter={[gutter, vgutter]}>{cols}</Row>
      <Row className='bg-slate-200' gutter={[gutter, vgutter]}>{cols}</Row>
      <Row className='bg-slate-200' gutter={[gutter, vgutter]}>{cols}</Row>
    </div>
  );
};
