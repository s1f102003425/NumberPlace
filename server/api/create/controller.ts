import { playerDatausecase } from '$/usecase/playerDatausecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ user }) => ({
    status: 200,
    body: await playerDatausecase.create(user.id),
  }),
}));
