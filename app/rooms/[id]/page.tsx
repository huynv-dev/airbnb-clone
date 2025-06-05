import { RoomDetailTemplate } from '@/components/templates/RoomDetailTemplate/RoomDetailTemplate';

interface RoomPageProps {
  params: {
    id: string;
  };
}

export default function RoomPage({ params }: RoomPageProps) {
  return <RoomDetailTemplate id={params.id} />;
} 