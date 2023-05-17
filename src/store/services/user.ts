import {createAsyncThunk} from '@reduxjs/toolkit';
import API from 'src/store/services/base/axios';
import {IServerUser} from 'src/store/services/models/IServerUser';
import {convertServerToClient} from 'src/store/services/converters/user';

const BASE_PATH = '/users/random_user';

export const fetchUser = createAsyncThunk("user/fetchCurrent", async (_, {rejectWithValue}) => {
  try {
    const response = await API.get<IServerUser>(BASE_PATH);
    return convertServerToClient(response.data);
  } catch (error) {
    return rejectWithValue('Не удалось загрузить текущего пользователя');
  }
});

export const fetchUsers = createAsyncThunk("user/fetchAll", async (_, {rejectWithValue}) => {
  try {
    const response = await API.get<IServerUser[]>(`${BASE_PATH}?size=2`);
    return response.data.map(convertServerToClient);
  } catch (error) {
    return rejectWithValue('Не удалось загрузить пользователей');
  }
});
