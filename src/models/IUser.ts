import {IServerUser} from 'src/store/services/models/IServerUser';
import {Outcome} from 'src/models/Outcome';

export interface IUser extends IServerUser {
  rating: number;
  lastOutcome?: Outcome;
}

