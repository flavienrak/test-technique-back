// src/routes/users.routes.ts
import { FastifyPluginAsync } from 'fastify';

export const usersRoutes: FastifyPluginAsync = async (fastify, opts) => {
  // Cast explicitement vers FastifyWithPrisma
  const instance = fastify as typeof fastify & {
    prisma: import('@prisma/client').PrismaClient;
  };

  instance.get('/users', async () => {
    return instance.prisma.user.findMany();
  });

  instance.post('/users', async (request) => {
    const data = request.body as {
      name: string;
      email: string;
      password: string;
    };
    return instance.prisma.user.create({ data });
  });
};
