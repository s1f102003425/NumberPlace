import type { RoomModel } from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    resBody: RoomModel;
  };
}>;
