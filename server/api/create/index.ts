import type { DefineMethods } from 'aspida';
import type { RoomModel } from '../../commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    resBody: RoomModel;
  };
}>;
