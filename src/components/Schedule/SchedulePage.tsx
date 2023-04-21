import SevenScheduleIcon from '../../assets/icons/SevenScheduleIcon';
import WidjetHeader from '../WidjetHeader/WidjetHeader';
import Schedule from './Schedule/Schedule';
import c from './SchedulePage.module.scss'


const SchedulePage = () => {

    return <div className={c.wrap}>
            <h1>Расписание работы</h1>

            <WidjetHeader text='Расписание работы' icon={<SevenScheduleIcon />}  /> 

            <Schedule />        
            
        </div>
    
};

export default SchedulePage;