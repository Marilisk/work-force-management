import { Outlet, useNavigate } from 'react-router-dom';
import c from './App.module.scss'
import NavBar from './components/NavBar/NavBar';
import Notifications from './components/Notifications/Notifications';
import { useAppDispatch } from './redux/hooks';
import { setCalendarDate } from './redux/privateCalendarSlice';

function App() {
  const dispatch = useAppDispatch()
  dispatch(setCalendarDate(Date.now()))

  return <div className={c.wrap}>
    <NavBar />

    <div className={c.appWrapper} >
      <div className={c.outletWrap}>
        <Outlet />

      </div>

      <Notifications />
    </div>
  </div>

}

export default App
