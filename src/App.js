import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsDetail from "./components/NewsDetail";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Users from "./components/admin/Users";
import AddUser from "./components/admin/AddUser";
import Dashboard from "./components/admin/Dashboard";
import UseEfectExample from "./components/useEfectExample";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsdetails/:id" element={<NewsDetail />} />
        </Route>
      </Routes>

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route element={<Admin />}>
          <Route index path="/admin" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adduser" element={<AddUser />} />
        </Route>
      </Routes>
    </div>
  );
};

function About() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      About
    </div>
  );
}
export default App;
