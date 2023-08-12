import type { RoomModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const playerDatarepository = {
  save: async (data: RoomModel) => {
    await prismaClient.data.upsert({
      where: { firebaseId: data.Id },
      update: { score: data.score },
      create: { firebaseId: data.Id, score: data.score },
    });
  },
};
