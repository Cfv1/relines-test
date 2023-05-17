import {cleanup, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {IUser} from 'src/models/IUser';
import {Outcome} from 'src/models/Outcome';
import UserCardAvatarHeader
  from 'src/components/UserCard/parts/UserCardAvatar/parts/UserCardAvatarHeader/UserCardAvatarHeader';
import UserCardContent from 'src/components/UserCard/parts/UserCardContent/UserCardContent';
import {getMockUser} from 'src/helpers/mocks/user';

describe('UserCardContent component', () => {
  let updatedStore: any;

  beforeEach(async () => {
    const mockStore = configureStore();
    updatedStore = mockStore({});
  })

  afterAll(() => {
    cleanup();
  });

  it('should show correct user', async () => {
    const mockUser = getMockUser();

    render(
      <Provider store={updatedStore}>
        <UserCardContent user={mockUser}/>
      </Provider>
    );

    const gender = screen.getByText(mockUser.gender);
    const date = screen.getByText(mockUser.date_of_birth);
    const name = screen.getByText(`${mockUser.first_name} ${mockUser.last_name}`);
    expect(gender).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
