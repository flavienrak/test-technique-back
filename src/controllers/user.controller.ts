import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserInput } from '../schemas/user.schema';

export async function getUsersHandler(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const users = await req.server.prisma.user.findMany();
  return reply.send(users);
}

export async function createUserHandler(
  req: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply,
) {
  const user = await req.server.prisma.user.create({ data: req.body });
  return reply.code(201).send(user);
}
