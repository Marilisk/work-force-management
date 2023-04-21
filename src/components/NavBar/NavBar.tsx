import HomeIcon from '../../assets/icons/HomeIcon';
import BellIcon from '../../assets/icons/BellIcon';
import c from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';
import ScheduleIcon from '../../assets/icons/ScheduleIcon';


const NavBar = () => {
    return <div className={c.navBar}>
        <div className={c.logo} />

        <div className={c.user}>

        </div>

        <NavLink to={'/'} className={({ isActive }) =>
            isActive ? c.activeItem : c.item}>
            <div>
                <div>
                    <HomeIcon />
                    <span>
                        Главная
                    </span>
                </div>
            </div>
        </NavLink>

        <NavLink to={'/messages'} className={({ isActive }) =>
            isActive ? c.activeItem : c.item}>
            <div>
                <div>
                    <BellIcon />
                    <span>
                        Уведомления
                    </span>
                </div>
            </div>
        </NavLink>

        <NavLink to={'/schedule'} className={({ isActive }) =>
            isActive ? c.activeItem : c.item}>
            <div>
                <div>
                    <ScheduleIcon />
                    <span>
                        Расписание работы
                    </span>
                </div>
            </div>
        </NavLink>


    </div>
};

export default NavBar;