import {cleanup, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {Outcome} from 'src/models/Outcome';
import UserCardAvatarHeader
  from 'src/components/UserCard/parts/UserCardAvatar/parts/UserCardAvatarHeader/UserCardAvatarHeader';
import {getMockUser} from 'src/helpers/mocks/user';

describe('UserCardAvatarHeader component', () => {
  let updatedStore: any;

  beforeEach(async () => {
    const mockStore = configureStore();
    updatedStore = mockStore({});
  })

  afterAll(() => {
    cleanup();
  });

  it('should not show outcome', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardAvatarHeader user={getMockUser()} />
      </Provider>
    );

    const outcome = screen.queryByTestId('outcome');
    expect(outcome).toBeFalsy();
  });

  it('should show reward outcome', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardAvatarHeader user={{...getMockUser(), lastOutcome: Outcome.REWARD}} />
      </Provider>
    );

    const rewardOutcome = screen.getByTestId('outcome');
    expect(rewardOutcome).toBeInTheDocument();
    expect(rewardOutcome).toHaveAttribute('aria-label', expect.stringMatching(/вознагражден/i));
  });

  it('should show ban outcome', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardAvatarHeader user={{...getMockUser(), lastOutcome: Outcome.BAN}} />
      </Provider>
    );

    const banOutcome = screen.getByTestId('outcome');
    expect(banOutcome).toBeInTheDocument();
    expect(banOutcome).toHaveAttribute('aria-label', expect.stringMatching(/забанен/i));
  });
});
