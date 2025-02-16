import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../../pages/Home";
import Error from "../../pages/Error";
import RootLayout from "../../layout";

const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route key="root" path="/" element={<RootLayout />}>
      <Route key="home" index element={<Home />} />
    </Route>,
    <Route key="error" path="*" element={<Error />} />,
  ])
);

export default function Routes() {
  return <RouterProvider router={routes} />;
}
