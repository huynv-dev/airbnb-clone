import './globals.css'
import { Nunito } from 'next/font/google'
import MainLayout from '@/components/templates/MainLayout'
import useCurrentUser from '@/hooks/useCurrentUser'

const font = Nunito({ 
  subsets: ['latin'], 
})

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb clone built with Next.js 13',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await useCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <MainLayout currentUser={currentUser}>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
