import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "../src/styles/GlobalStyles";

import Dashboard from "../src/pages/Dashboard";
import Bookings from "../src/pages/Bookings";
import Account from "../src/pages/Account";
import Cabins from "../src/pages/Cabins";
import Login from "../src/pages/Login";
import PageNotFound from "../src/pages/PageNotFound";
import Settings from "../src/pages/Settings";
import Users from "../src/pages/Users";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Users" element={<Users />} />
          </Route>

          <Route path="Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
