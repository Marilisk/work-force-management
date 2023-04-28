import TopMenu from '../TopMenu/TopMenu'
import { Routes, Route } from 'react-router-dom'
import Sheet from './Sheet/Sheet';
import SheetCalendar from './SheetCalendar/SheetCalendar';
import c from './../../styles/TimeSheet.module.scss'

const TimeSheet = () => {

    return <div className={c.wrap}>

        <TopMenu />

        <Routes>
            <Route path='/' element={<Sheet />} />
            <Route path='/calendar' element={<SheetCalendar />} />

        </Routes>

    </div>

};

export default TimeSheet;