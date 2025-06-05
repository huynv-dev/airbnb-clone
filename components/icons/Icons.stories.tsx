import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { iconNames, IconStyle } from './IconSet'

const meta: Meta<typeof Icon> = {
  title: 'Icons/Single Icon',
  component: Icon,
  argTypes: {
    name: { control: { type: 'select' }, options: iconNames },
    styleSet: { control: { type: 'radio' }, options: ['outline', 'solid', 'custom'] as IconStyle[] },
    size: { control: { type: 'number' }, defaultValue: 24 },
    color: { control: 'color', defaultValue: '#000000' },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: 'LogoIcon',
    styleSet: 'custom',
    size: 32,
    color: '#000000',
  },
}
