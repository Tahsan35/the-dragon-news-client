import {Navigate, createBrowserRouter} from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import NewsLayout from "../layout/NewsLayout";
import Login from "../pages/Login/Login/Login";
import News from "../pages/News/News/News";
import Register from "../pages/Login/Register/Register";
import Terms from "../pages/Shared/Terms/Terms";
import Category from "../pages/Home/Category/Category";
import Main from "../layout/main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-dzpi77w3x-tahsan35.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://the-news-dragon-server-dzpi77w3x-tahsan35.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;
