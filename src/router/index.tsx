import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Chapter01 from "../chapter_01";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "chapter/01",
        element: <Chapter01 />,
      },
    ],
  },
]);
