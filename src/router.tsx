import { createBrowserRouter } from "react-router-dom";
import App from './App';
import SchedulePage from "./components/Schedule/SchedulePage";
import TimeSheet from "./components/TimeSheet/TimeSheet";
import Notifications from "./components/Notifications/Notifications";
import Sheet from "./components/TimeSheet/Sheet/Sheet";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SchedulePage />,
      },

      {
        path: "/messages",
        element: <Notifications />,
      },

      {
        path: "/timesheet/*",
        element: <TimeSheet />,
      },

     /*  {
        path: "/timesheet/sheet",
        element: <Sheet />,
      }, */

    ],
  },
])


