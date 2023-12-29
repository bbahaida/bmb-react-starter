import { useContext } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/auth/login/Login";
import AppLayout from "./layouts/AppLayout";
import LoginLayout from "./layouts/LoginLayout";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import authCtx from "./store/auth/AuthContextProvider";

const authorizedRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);
const unauthorizedRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LoginLayout />}>
      <Route index element={<Login />} />
    </Route>
  )
);

function App() {
  const { authState } = useContext(authCtx);
  if (authState.isLoggedIn) {
    return <RouterProvider router={authorizedRouter} />;
  }
  return <RouterProvider router={unauthorizedRouter} />;
}

export default App;
