import c from './WeekScheduleView.module.scss'
import { useAppSelector } from '../../../../redux/hooks';
import { getDayOfWeekText } from '../../../../assets/functions/getDayOfWeekText';
import { FC } from 'react';
import { getFormattedDate } from '../../../../assets/functions/getFormattedDate';
import { IInterval } from '../../../../redux/authSlice';

const WeekScheduleView = () => {

    const days = useAppSelector(s => s.privateCalendar.weekDays)
    const userWorkIntervals = useAppSelector(s => s.auth.loginData.data.workIntervals)
    const filteredWorkIntervals =
        userWorkIntervals.filter(interval => interval.start < days[-1] || interval.end > days[0])

    return <div className={c.wrap}>
        <TimeRulerHeader />

        {days.map(timestamp => <DayLine key={timestamp}
            timestamp={timestamp}
            workIntervals={filteredWorkIntervals} />)}
    </div>
}
export default WeekScheduleView;

const times = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
const fiveMinIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const TimeRulerHeader = () => {

    return <div className={c.lineWrap}>
        <div className={c.dayOfWeek} />
        <div className={c.date} />
        <div className={c.ruler}>
            {times.map(el => (
                <div key={el} className={c.rulerCeil}>
                    <p>{el}</p>
                    <div className={c.rulerItem}>
                        {fiveMinIntervals.map(el => (
                            <div key={el} className={c.rulerPiece} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
}


interface DayLineProps {
    timestamp: number
    workIntervals: IInterval[]
}

export const DayLine: FC<DayLineProps> = ({ timestamp, workIntervals }: DayLineProps) => {

    const dayOfWeek = getDayOfWeekText(timestamp)
    const date = getFormattedDate(new Date(timestamp))

    //console.log(new Date(timestamp))


    return <div className={c.lineWrap}>
        <div className={c.dayOfWeek}>
            <div>
                {dayOfWeek}
            </div>
        </div>
        <div className={c.date}>
            <div>
                {date}
            </div>
        </div>
        <div className={c.ruler}>
            {times.map((el, hourIndex) => (
                <div key={el} className={c.calendarCeil}>

                    {fiveMinIntervals.map((fiveMin, i) => {

                        /* визуализация интервалов здесь. по каждому массиву интервалось проходимся фор ичем и 
                        корректируем цвет пятиминутки fiveMinClass */


                        const fiveMinBeginTimeStamp = timestamp + hourIndex * 3600000 + i * 300000;
                        const fiveMinEndTimeStamp = timestamp + hourIndex * 3600000 + i * 300000 + 300000;
                        let fiveMinClass = c.fiveMin

                        workIntervals.forEach(workInterval => {
                            if (fiveMinBeginTimeStamp > workInterval.start
                                && fiveMinEndTimeStamp < workInterval.end) {
                                fiveMinClass = c.green
                            }
                        })


                        return <div key={fiveMin} className={fiveMinClass}>{/* {fiveMin} */}</div>
                    }

                    )}
                </div>
            ))}
        </div>
    </div>
}


