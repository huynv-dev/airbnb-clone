'use client';

import { SafeUser } from "@/types";
import Navbar from "@/components/organisms/Navbar";
import { ModalsProvider, ToasterProvider } from "@/components/providers";
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
  currentUser?: SafeUser | null;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children,
  currentUser
}) => {
  return (
    <div className={styles.container}>
      <ToasterProvider />
      <ModalsProvider />
      <Navbar currentUser={currentUser} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout; 