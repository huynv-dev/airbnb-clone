import { Save, SearchCheckIcon } from 'lucide-react'
import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'text', 'link', 'ghost', 'outline'],
      description: 'Button style variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger', 'success', 'black'],
      description: 'Button color scheme',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: {
        defaultValue: { summary: false },
      },
    },
    icon: {
      control: { type: null },
      description: 'Icon element to display',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to text',
      table: {
        defaultValue: { summary: 'start' },
      },

    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    type: 'primary',
    size: 'md',
    children: 'Button',
    disabled: false,
    loading: false,
    iconPosition: 'start',
    className: '',
  },
};



export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Button >Primary</Button>
    <Button type='secondary'>Secondary</Button>
    <Button type="dashed" >Dashed</Button>
    <Button type="link" >Link</Button>
    <Button type="text" >Text</Button>
    <Button type="ghost" >Ghost</Button>
  </div>
)

export const Colors = () => (
  <div className='flex flex-col gap-4'>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button color='primary'>Default</Button>
      <Button type="dashed" color='primary'>Dashed</Button>
      <Button type="link" color='primary'>Link</Button>
      <Button type="text" color='primary'>Text</Button>
      <Button type="ghost" color='primary'>Ghost</Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button color='success'>Default</Button>
      <Button type="dashed" color='success'>Dashed</Button>
      <Button type="link" color='success'>Link</Button>
      <Button type="text" color='success'>Text</Button>
      <Button type="ghost" color='success'>Ghost</Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button color='secondary'>Default</Button>
      <Button type="dashed" color='secondary'>Dashed</Button>
      <Button type="link" color='secondary'>Link</Button>
      <Button type="text" color='secondary'>Text</Button>
      <Button type="ghost" color='secondary'>Ghost</Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button color='danger'>Default</Button>
      <Button type="dashed" color='danger'>Dashed</Button>
      <Button type="link" color='danger'>Link</Button>
      <Button type="text" color='danger'>Text</Button>
      <Button type="ghost" color='danger'>Ghost</Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button color='black'>Default</Button>
      <Button type="dashed" color='black'>Dashed</Button>
      <Button type="link" >Link</Button>
      <Button type="text" color='black'>Text</Button>
      <Button type="ghost" color='black'>Ghost</Button>
    </div>

  </div>
)

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
)

export const Icon = () => (
  <div className='flex flex-col gap-4'>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button icon={<SearchCheckIcon />} ></Button>
      <Button icon={<SearchCheckIcon />} type="dashed" ></Button>
      <Button icon={<SearchCheckIcon />} type="link" ></Button>
      <Button icon={<SearchCheckIcon />} type="text" ></Button>
      <Button icon={<SearchCheckIcon />} type="ghost" ></Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button icon={<SearchCheckIcon />} >Default</Button>
      <Button icon={<SearchCheckIcon />} type="dashed" >Default</Button>
      <Button icon={<SearchCheckIcon />} type="link" >Default</Button>
      <Button icon={<SearchCheckIcon />} type="text" >Default</Button>
      <Button icon={<SearchCheckIcon />} type="ghost" >Default</Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button icon={<SearchCheckIcon />} iconPosition='end' >Default</Button>
      <Button icon={<SearchCheckIcon />} iconPosition='end' type="dashed" >Default</Button>
      <Button icon={<SearchCheckIcon />} iconPosition='end' type="link" >Default</Button>
      <Button icon={<SearchCheckIcon />} iconPosition='end' type="text" >Default</Button>
      <Button icon={<SearchCheckIcon />} iconPosition='end' type="ghost" >Default</Button>
    </div>
  </div>
)

const Spinner = () => (
  <svg className="animate-spin h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
      5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 
      5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const LoadingState = () => (
  <div className='flex items-end gap-3'>
    <Button loading>Loading Button</Button>
    <Button icon={<Save />} loading loadingText="Đang lưu..." iconPosition='end'>
      Lưu thay đổi
    </Button>
    <Button loading loadingIcon={<Spinner />}>
      Đang tải
    </Button>
  </div>
)

export const Disabled = () => (
  <Button disabled>Disabled Button</Button>
)
