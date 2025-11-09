import { Static, Type } from '@sinclair/typebox';

export const createUserSchema = {
  body: Type.Object({
    name: Type.String(),
    email: Type.String({ format: 'email' }),
  }),
};

export type CreateUserInput = Static<typeof createUserSchema.body>;
