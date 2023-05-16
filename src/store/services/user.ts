import {createAsyncThunk} from '@reduxjs/toolkit';
import API from 'src/store/services/base/axios';
import {IUser} from 'src/models/IUser';

const BASE_PATH = '/users/random_user';

export const fetchUser = createAsyncThunk("user/fetchCurrent", async (_, {rejectWithValue}) => {
  try {
    const response = await API.get<IUser>(BASE_PATH);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить текущего пользователя');
  }
});

export const fetchUsers = createAsyncThunk("user/fetchAll", async (_, {rejectWithValue}) => {
  try {
    const response = await API.get<IUser[]>(`${BASE_PATH}?size=2`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Не удалось загрузить пользователей');
  }
});
