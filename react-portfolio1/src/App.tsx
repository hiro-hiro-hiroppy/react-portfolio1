import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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
        <Route path={urls.home} element={<Login />} />
        <Route path={urls.login} element={<Login />} />
        <Route path={urls.employees} element={<Employees />} />
        <Route path={urls.notfound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
