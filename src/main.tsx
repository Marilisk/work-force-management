import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import './styles/index.scss'
import { router } from './router.tsx';
import { store } from './redux/redux-store.ts';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme.tsx';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
)
