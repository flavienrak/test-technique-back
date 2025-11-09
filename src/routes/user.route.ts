import { FastifyInstance } from 'fastify';
import {
  createUserHandler,
  getUsersHandler,
} from '../controllers/user.controller';
import { createUserSchema } from '../schemas/user.schema';

export default async function userRoutes(app: FastifyInstance) {
  app.get('/', getUsersHandler);
  app.post('/', { schema: createUserSchema }, createUserHandler);
}
