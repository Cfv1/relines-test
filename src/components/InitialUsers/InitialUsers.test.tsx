import {act, cleanup, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import InitialUsers from 'src/components/InitialUsers/InitialUsers';
import userEvent from '@testing-library/user-event';
import {useAppDispatch} from 'src/store/hooks/useAppDispatch';
import {useAppSelector} from 'src/store/hooks/useAppSelector';
import {RootState} from 'src/store/store';

describe('InitialUsers component', () => {
    const reactRedux = { useAppDispatch, useAppSelector }
    const useDispatchMock = jest.spyOn(reactRedux, "useAppDispatch");
    const useSelectorMock = jest.spyOn(reactRedux, "useAppSelector");
    let updatedStore: any;
    let isRequesting = false;

    beforeEach(async () => {
        const mockStore = configureStore();
        const initialState: Partial<RootState> = {
            usersReducer: {
                users: [],
                ratedUsers: [],
                communication: {
                    isRequesting: false,
                    isSuccess: false
                }
            },
        };
        updatedStore = mockStore(initialState);

        const mockDispatch = jest.fn();
        useDispatchMock.mockReturnValue(mockDispatch);
        updatedStore.dispatch = mockDispatch;
        await act(async () => render(<Provider store={updatedStore}><InitialUsers /></Provider>));
    })

    afterEach(async () => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    afterAll(() => {
        cleanup();
    });

    it('should buttons exist', async () => {
        const refreshButton = screen.getByTitle(/обновить/i);
        const updateButton = screen.getByTitle(/подгрузить/i);

        expect(refreshButton).toBeInTheDocument();
        expect(updateButton).toBeInTheDocument();
    });

    it('should call api', async () => {
        expect(updatedStore.dispatch).toHaveBeenCalled();
    });

    it('refresh button should call api', async () => {
        const refreshButton = screen.getByTitle(/обновить/i);
        await act(async () => userEvent.click(refreshButton));
        expect(updatedStore.dispatch).toHaveBeenCalledTimes(3);
    });

    it('update button should call api', async () => {
        const updateButton = screen.getByTitle(/подгрузить/i);
        await act(async () => userEvent.click(updateButton));
        expect(updatedStore.dispatch).toHaveBeenCalledTimes(2);
    });

    it('should not show loading', async () => {
        isRequesting = true;
        const rating = screen.queryByTestId('loading');
        expect(rating).toBeFalsy();
    })
})