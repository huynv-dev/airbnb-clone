'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Logo.module.css';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className={styles.logo}
      src="/images/logo.png"
      height="100"
      width="100"
      alt="Logo"
    />
  );
};

export default Logo; 