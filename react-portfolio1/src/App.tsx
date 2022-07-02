import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employees from './page/employees/Employees';
import Login from './page/login/Login';
import NotFound from './page/notfound/NotFound';

const urls = {
  home: "/",
  login: "/login",
  employees: "employees",
  notfound: "*"
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/employees`} element={<Employees />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
