import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiIsland, GiBarn } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { MdOutlineVilla } from 'react-icons/md';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
  },
  {
    label: 'Windmill',
    icon: GiWindmill,
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
  },
  {
    label: 'Countryside',
    icon: GiBarn,
  },
  {
    label: 'Pools',
    icon: TbPool,
  },
  {
    label: 'Islands',
    icon: GiIsland,
  },
  {
    label: 'Lake',
    icon: BsSnow,
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
  },
  {
    label: 'Mountains',
    icon: TbMountain,
  },
];
