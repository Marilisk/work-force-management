import WeekScheduleView from './WeekScheduleView/WeekScheduleView';
import MonthScheduleView from './MonthScheduleView/MonthScheduleView';
import c from './Schedule.module.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setCalendarViewPeriod } from '../../../redux/privateCalendarSlice';

const Schedule = () => {
    const dispatch = useAppDispatch()
    const view = useAppSelector(s => s.privateCalendar.viewPeriod)

    return <div className={c.wrap}>
        <div className={c.bookMarks}>
            <div className={view === 'week' ? c.activeMark : c.mark}
                onClick={() => dispatch(setCalendarViewPeriod('week'))}>
                Неделя
            </div>
            <div className={view === 'month' ? c.activeMark : c.mark}
                onClick={() => dispatch(setCalendarViewPeriod('month'))}>
                Месяц
            </div>
        </div>

        <div className={c.calendarWrap}>
            {
                view === 'week' ?
                    <WeekScheduleView />
                    :
                    <MonthScheduleView />
            }
        </div>
    </div>

};

export default Schedule;