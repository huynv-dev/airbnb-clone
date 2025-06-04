import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/options';
import prisma from '@/lib/prismadb';
import mockUsers from '@/data/mockUsers';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function useCurrentUser() {
  try {
    if (process.env.USE_MOCK_DATA === 'true') {
      // Trả về user đầu tiên trong mockUsers
      return mockUsers[0];
    }
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}
