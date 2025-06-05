import { Skeleton } from '@/components/atoms/Skeleton';

const RoomListSkeleton = () => (
  <div className="grid grid-cols-1 gap-8">
    {Array(4).fill(0).map((_, i) => (
      <div key={i} className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="flex gap-6 overflow-hidden">
          {Array(4).fill(0).map((_, j) => (
            <Skeleton key={j} className="w-[300px] h-[200px] flex-none rounded-xl" />
          ))}
        </div>
      </div>
    ))}
  </div>
); 

export default RoomListSkeleton;