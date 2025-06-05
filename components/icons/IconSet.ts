import * as OutlineIcons from '@heroicons/react/24/outline'
import * as SolidIcons from '@heroicons/react/24/solid'
import * as CustomIcons from './custom'

export const iconSets = {
  outline: OutlineIcons,
  solid: SolidIcons,
  custom: CustomIcons,
}

export type IconStyle = keyof typeof iconSets
export type IconName = keyof typeof OutlineIcons | keyof typeof CustomIcons

export const iconNames: IconName[] = [
  ...Object.keys(OutlineIcons),
  ...Object.keys(CustomIcons),
] as IconName[]
