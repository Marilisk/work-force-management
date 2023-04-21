import { createBrowserRouter } from "react-router-dom";
import App from './App';
import SchedulePage from "./components/Schedule/SchedulePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SchedulePage />,
      },

    

    ],
  },
])


