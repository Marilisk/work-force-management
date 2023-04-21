import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './redux-store';


/* export interface IloginPayload {
    email: string
    password: string
}
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params: IloginPayload) => {
    let response = await instance.post('/auth/login', params);
    console.log(response)
    localStorage.setItem('token', response.data.tokens.accessToken)
    return response.data;
})

export const fetchLogout = createAsyncThunk('auth/fetchLogout', async () => {
    let response = await instance.post('/auth/logout');
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    return response.data;
})


interface IRegisterPayload extends IloginPayload {
    fullName: string
}

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params: IRegisterPayload) => {
    let response = await instance.post('/auth/register', params);
    console.log(response);
    localStorage.setItem('token', response.data.tokens.accessToken)
    return response.data;
})

export const refreshAuth = createAsyncThunk('auth/refreshAuth', async () => {
    const response = await instance.get('auth/refresh')
    localStorage.setItem('token', response.data.tokens.accessToken)
    return response.data
}) */

export interface IInterval {
    start: number
    end: number
}

export interface AuthInitStateType {
    loginData: {
        data: {
            id: string
            name: string
            workIntervals: IInterval[]
            daysOff: IInterval[]
            pauseIntervals: IInterval[]
            lunchIntervals: IInterval[]
            sickLeaveIntervals: IInterval[]
        },
        status: string
        serverMessage: string
    },
}

const initialState: AuthInitStateType = {
    loginData: {
        data: {
            id: 'hu4hu',
            name: 'Пётр Романов',
            workIntervals: [{start: 1682157600000, end: 1682168400000}],
            daysOff: [],
            pauseIntervals: [],
            lunchIntervals: [],
            sickLeaveIntervals: [],
        },
        status: 'loaded',
        serverMessage: '',
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        /* builder.addCase(fetchAuth.pending, (state, action) => {
            state.loginData.status = LoadingStatusEnum.loading
        })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.loginData.status = LoadingStatusEnum.loaded;
                state.loginData.data = action.payload.user;
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.loginData.status = LoadingStatusEnum.error;
                if (action.error.message === 'Request failed with status code 400') {
                    state.loginData.serverMessage = 'неверный логин или пароль';
                } else {
                    state.loginData.serverMessage = 'сервис недоступен';
                }
            })

            .addCase(fetchLogout.pending, (state) => {
                state.loginData.status = LoadingStatusEnum.loading
            })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                state.loginData.status = LoadingStatusEnum.loaded
                state.loginData.data = null;
            })
            .addCase(fetchLogout.rejected, (state) => {
                state.loginData.status = LoadingStatusEnum.error
            })

            .addCase(refreshAuth.pending, (state) => {
                state.loginData.status = LoadingStatusEnum.loading
                state.loginData.data = null;
            })
            .addCase(refreshAuth.fulfilled, (state, action) => {
                state.loginData.status = LoadingStatusEnum.loaded
                state.loginData.data = action.payload.user;
            })
            .addCase(refreshAuth.rejected, (state) => {
                state.loginData.status = LoadingStatusEnum.error
                state.loginData.data = null;
            })

            .addCase(fetchRegister.pending, (state) => {
                state.loginData.status = LoadingStatusEnum.loading
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.loginData.status = LoadingStatusEnum.loaded
                state.loginData.data = action.payload.user;
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.loginData.status = LoadingStatusEnum.error;
                if (action.error.message === 'Request failed with status code 400') {
                    state.loginData.serverMessage = 'Пользователь с таким email уже зарегистрирован';
                } else {
                    state.loginData.serverMessage = 'сервис недоступен';
                }
                state.loginData.data = null;
            }) */

    },

});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.loginData.data);




//export const { } = authSlice.actions;
export default authSlice.reducer;