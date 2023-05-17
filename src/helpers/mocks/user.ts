import {IUser} from 'src/models/IUser';

export const getMockUser = (): IUser => {
  return {
    id: 1,
    uid: 'superManUid',
    first_name: 'Super',
    gender: 'Helicopter',
    last_name: 'Man',
    avatar: 'https://robohash.org/fugiteosaut.png',
    date_of_birth: '1980-01-01',
    username: 'SuperMan',
    rating: 0,
  };
}