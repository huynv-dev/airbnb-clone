'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading center title={title} subtitle={subtitle} />
      <div className="mt-4">
        {showReset && (
          <Button outline label="Remove all filters" onClick={() => router.push('/')} />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
