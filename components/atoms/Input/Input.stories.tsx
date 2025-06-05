import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Search, Eye } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    variant: 'default',
    size: 'md',
  },
}

export const WithPrefixSuffix: Story = {
  args: {
    placeholder: 'Search...',
    suffix: <Eye size={16} />,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <Input placeholder="Default" variant="default" />
      <Input placeholder="Error" variant="error" />
      <Input placeholder="Success" variant="success" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Can't type here",
    disabled: true,
  },
}
