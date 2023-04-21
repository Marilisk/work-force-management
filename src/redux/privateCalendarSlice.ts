import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collectDaysOfWeek } from '../assets/functions/collectDaysOfWeek';


export interface IPopup {
    top: number | null
    left: number | null
    id: string | null
}


export interface IPrivateCalendarInitState {
    currentDate: number
    weekDays: number[]
    monthDays: number[]
   
    viewPeriod: 'month' | 'week'
    datePickerPopUp: IPopup
}

const initialState: IPrivateCalendarInitState = {
    viewPeriod: 'week',
    currentDate: Date.now(),
    weekDays: [],
    monthDays: [],
    datePickerPopUp: {
        top: null,
        left: null,
        id: null,
    },
}

const privateCalendarSlice = createSlice({
    name: 'privateCalendar',
    initialState,
    reducers: {
        setCalendarDate(state, action) {
            state.currentDate = action.payload
            state.weekDays = collectDaysOfWeek(action.payload)
        },

        setCalendarViewPeriod(state, action) {
            state.viewPeriod = action.payload
        },

        callDatePickerPopUp(state, action) {
            state.datePickerPopUp.top = action.payload.offsetTop
            state.datePickerPopUp.left = action.payload.offsetLeft
            state.datePickerPopUp.id = action.payload.id
        },

    },
/*     extraReducers: (builder) => {

    }, */

});


export const {
    setCalendarDate,
    setCalendarViewPeriod,
    callDatePickerPopUp,
    } = privateCalendarSlice.actions;
export default privateCalendarSlice.reducer;