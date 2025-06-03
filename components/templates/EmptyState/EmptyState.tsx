'use client';

import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset
}) => {
  const router = useRouter();

  return ( 
    <div className={styles.container}>
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
      <div className={styles.buttonWrapper}>
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
   );
}

export default EmptyState; 