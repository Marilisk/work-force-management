import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.scss'
import { router } from './router.tsx';
import { store } from './redux/redux-store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
)
