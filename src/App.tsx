import { Outlet } from 'react-router-dom';
import c from './styles/App.module.scss'
import NavBar from './components/NavBar/NavBar';
import { useAppDispatch } from './redux/hooks';
import { setCalendarDate } from './redux/privateCalendarSlice';

function App() {

  const dispatch = useAppDispatch()
  dispatch(setCalendarDate(Date.now()))

  return <div className={c.wrap}>
    <NavBar />

    <div className={c.appWrapper} >
      <Outlet />
    </div>

  </div>
}

export default App
