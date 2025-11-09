import Fastify from 'fastify';
import cors from '@fastify/cors';
import prismaPlugin from '@/plugins/prisma';
import { usersRoutes } from '@/routes/users.routes';

async function start() {
  const server = Fastify({ logger: true });

  await server.register(cors, { origin: '*' });
  await server.register(prismaPlugin);
  await server.register(usersRoutes, { prefix: '/api' });

  await server.listen({ port: 4000 });
  console.log('Server running at http://localhost:4000');
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
