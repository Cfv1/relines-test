import {cleanup, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import UserCardRateModeActions
  from 'src/components/UserCard/parts/UserCardActions/parts/UserCardRateModeActions/UserCardRateModeActions';
import {getMockUser} from 'src/helpers/mocks/user';

describe('UserCardRateModeActions component', () => {
  let updatedStore: any;

  beforeEach(async () => {
    const mockStore = configureStore();
    updatedStore = mockStore({});
  })

  afterAll(() => {
    cleanup();
  });

  it('should show correct rating', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardRateModeActions user={{...getMockUser(), rating: 2}} />
      </Provider>
    );

    const rating = screen.getByTestId('user-rating');
    expect(rating).toBeInTheDocument();
    expect(rating.textContent).toEqual('2');
  })

  it('user with 0 rating should not have return button', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardRateModeActions user={getMockUser()} />
      </Provider>
    );

    const button = screen.getByTestId('return-button');
    expect(button).toBeInTheDocument();
  });

  it('user with not 0 rating should have return button', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardRateModeActions user={{...getMockUser(), rating: 2}} />
      </Provider>
    );

    const button = screen.queryByTestId('return-button');
    expect(button).toBeFalsy();
  });

  it('should exist modal with bad news', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardRateModeActions user={{...getMockUser(), rating: -4}} />
      </Provider>
    );

    const text = screen.getByText(/забанить/i);
    expect(text).toBeInTheDocument();
  });

  it('should exist modal with good news', async () => {
    render(
      <Provider store={updatedStore}>
        <UserCardRateModeActions user={{...getMockUser(), rating: 5}} />
      </Provider>
    );

    const text = screen.getByText(/наградить/i);
    expect(text).toBeInTheDocument();
  });
});
