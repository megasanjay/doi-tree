// pages/api/auth/[...nextauth].ts

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma from '@/lib/prisma';

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    adapter: PrismaAdapter(prisma),
  });

export default authHandler;
