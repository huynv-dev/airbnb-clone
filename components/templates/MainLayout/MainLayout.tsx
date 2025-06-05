import { Header } from '@/components/organisms/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}; 