import Fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import prismaPlugin from './plugins/prisma.plugin';
import userRoutes from './routes/user.route';

export async function buildApp() {
  const app = Fastify({ logger: true });

  // CORS
  await app.register(cors, { origin: '*' });

  // Prisma
  await app.register(prismaPlugin);

  // Swagger Docs
  await app.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        version: '1.0.0',
      },
    },
  });

  await app.register(swaggerUi, { routePrefix: '/docs' });

  // ✅ Route de bienvenue
  app.get('/', async () => {
    return {
      message: 'Bienvenue sur l’API Fastify 🚀',
      docs: '/docs',
      status: 'ok',
    };
  });

  // Routes
  await app.register(userRoutes, { prefix: '/api/users' });

  return app;
}
