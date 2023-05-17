import {IUser} from 'src/models/IUser';
import {IServerUser} from 'src/store/services/models/IServerUser';

export const convertServerToClient = (user: IServerUser): IUser => {
  return {
    ...user,
    rating: 0
  }
}