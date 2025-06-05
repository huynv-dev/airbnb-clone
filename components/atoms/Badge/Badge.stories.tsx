import { Badge } from './Badge'

export default {
  title: 'Atoms/Badge',
  component: Badge,
}

export const Green = () => <Badge color="green">Available</Badge>
export const Red = () => <Badge color="red">Sold Out</Badge>
export const Gray = () => <Badge>Default</Badge>
