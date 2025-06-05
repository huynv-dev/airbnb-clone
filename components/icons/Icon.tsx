import { iconSets, IconStyle, IconName } from './IconSet'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  styleSet?: IconStyle
  size?: number
  color?: string
}

export const Icon = ({
  name,
  styleSet = 'outline',
  size = 24,
  color = 'currentColor',
  ...rest
}: IconProps) => {
  const selectedSet = iconSets[styleSet] as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>
  const IconComponent = selectedSet[name]

  if (!IconComponent) return <span style={{ color: 'red' }}>Invalid icon: {name}</span>

  return <IconComponent width={size} height={size} fill={color} {...rest} />
}
