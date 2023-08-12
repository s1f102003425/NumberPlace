import type { RoomModel } from '$/commonTypesWithClient/models';
import { playerDatarepository } from '$/repository/playerDatarepository';

// const toDataModel = (prismaRoom: data): RoomModel => ({
//   Id: userIdParser.parse(prismaRoom.firebaseId),
//   score: userScoreParser.parse(prismaRoom.score),
// });
export const playerDatausecase = {
  create: async (userId: string) => {
    if (userId === undefined) {
      console.log(userId);
    }
    console.log('create');
    const newRoom: RoomModel = {
      Id: userId,
      score: 0,
    };
    await playerDatarepository.save(newRoom);
    console.log('newRoom');
    return newRoom;
  },
  // gameCleared: async (score: number, userId: string) => {
  //   const label = userId;
  //   console.log(score);
  //   console.log(userId);
  //   console.log(label);

  //   return label;
  // },
};
