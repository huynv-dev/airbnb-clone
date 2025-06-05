import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the skeleton',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Basic skeleton
export const Default: Story = {
  args: {
    className: 'w-32 h-32',
  },
};

// Text variants
export const TextLine: Story = {
  args: {
    className: 'h-4 w-3/4',
  },
};

export const TextBlock: Story = {
  render: () => (
    <div className="space-y-2 w-[560px]">
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  ),
};

// Card skeleton
export const CardSkeleton: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      {/* Image */}
      <Skeleton className="w-full h-48 rounded-xl" />
      
      {/* Content */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      
      {/* Footer */}
      <div className="flex items-center space-x-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-4/6" />
        </div>
      </div>
    </div>
  ),
};

// Room card skeleton (specific to our app)
export const RoomCardSkeleton: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      {/* Image */}
      <Skeleton className="w-full aspect-[4/3] rounded-xl" />
      
      {/* Info */}
      <div className="space-y-2">
        {/* Location & Rating */}
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-16" />
        </div>
        
        {/* Title */}
        <Skeleton className="h-6 w-5/6" />
        
        {/* Price */}
        <div className="flex items-end space-x-1">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  ),
};

// List skeleton
export const RoomListSkeleton: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array(8).fill(0).map((_, i) => (
        <div key={i} className="w-full space-y-4">
          <Skeleton className="w-full aspect-[4/3] rounded-xl" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-6 w-5/6" />
            <div className="flex items-end space-x-1">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// Avatar skeleton
export const Avatar: Story = {
  args: {
    className: 'w-12 h-12 rounded-full',
  },
};

// Button skeleton
export const Button: Story = {
  args: {
    className: 'h-10 w-32 rounded-full',
  },
};

// Form field skeleton
export const FormField: Story = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <Skeleton className="h-4 w-24" /> {/* Label */}
      <Skeleton className="h-10 w-full rounded-lg" /> {/* Input */}
    </div>
  ),
};

// Search bar skeleton
export const SearchBar: Story = {
  render: () => (
    <div className="w-[600px] flex items-center space-x-4 p-4 border rounded-full">
      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
      <div className="h-8 w-[1px] bg-gray-200" />
      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
      <div className="h-8 w-[1px] bg-gray-200" />
      <div className="flex-1 space-y-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  ),
};

// Loading states with different sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-2 w-16" /> {/* XS */}
      <Skeleton className="h-3 w-24" /> {/* SM */}
      <Skeleton className="h-4 w-32" /> {/* MD */}
      <Skeleton className="h-6 w-48" /> {/* LG */}
      <Skeleton className="h-8 w-64" /> {/* XL */}
    </div>
  ),
}; 