import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    current: 1,
    pageSize: 10,
    total: 100,
    showSizeChanger: false,
    showQuickJumper: false,
    position: 'start',
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

const WithState = (args: any) => {
  const [current, setCurrent] = useState(args.current);
  const [pageSize, setPageSize] = useState(args.pageSize);

  return (
    <Pagination
      {...args}
      current={current}
      pageSize={pageSize}
      onChange={(page, size) => {
        setCurrent(page);
        setPageSize(size);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <WithState {...args} />,
};

export const SizeChanger: Story = {
  args: {
    total: 30,
    pageSize: 10,
    current: 1,
    showQuickJumper: false
  },
  render: (args) => <WithState {...args} />,
};

export const QuickJumper: Story = {
  args: {
    total: 250,
    pageSize: 10,
    current: 1,
    showSizeChanger: false
  },
  render: (args) => <WithState {...args} />,
};

export const NoSizeChangerOrJumper: Story = {
  args: {
    showSizeChanger: false,
    showQuickJumper: false,
    total: 150,
  },
  render: (args) => <WithState {...args} />,
};

export const Position: StoryObj = {
  args: {
    total: 150,
    showSizeChanger: false,
    showQuickJumper: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div>
        <span className="block text-sm mb-1">Position: START</span>
        <WithState {...args} position="start" />
      </div>
      <div>
        <span className="block text-sm mb-1">Position: CENTER</span>
        <WithState {...args} position="center" />
      </div>
      <div>
        <span className="block text-sm mb-1">Position: END</span>
        <WithState {...args} position="end" />
      </div>
    </div>
  ),
};