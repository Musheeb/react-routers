import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Error from "./components/ErrorHandling/Error.jsx";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Help from "./components/Help/Help.jsx";
import Profiles from "./components/Profiles/Profiles.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Employees from "./components/Employees/Employees.jsx";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profiles",
    element: <Profiles />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/users",
    element: <Users />,
    children: [
      {
        path: "/users/:userId",
        element: <UserDetails />,
      },
    ],
  },
  {
    path: "/employees",
    element: <Employees />,
    loader: async () => {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      // return JSON.parse(users);
      return users.json();
    },
    errorElement: <div>Something went wrong 😔</div>,
    children: [
      {
        path: "/employees/:id",
        element: <EmployeeDetails />,
        loader: async ({ params, request }) => {
          // console.log(request);
          const user = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.id}`,
          );
          return user.json();
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
