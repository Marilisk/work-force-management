import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import privateCalendarSlice from "./privateCalendarSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        privateCalendar: privateCalendarSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch