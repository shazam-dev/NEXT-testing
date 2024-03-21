import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/lib/definitions';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma'
 
async function getUser(email: string, password: string): Promise<User | undefined> {
  try {
    const user = await prisma.users.findUnique({
      where: {email},
    })
    
    // return user;
    if(user){
      return user;
    }else{
      const hashPassword = await bcrypt.hash(password, 5)
      const user = await prisma.users.create({
        data: {
          email,
          password: hashPassword,
        },
      })
      return user;
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials, req): Promise<any> {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email, password);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
 console.log(1231, user)
          if (passwordsMatch) return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});