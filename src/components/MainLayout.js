import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ImageSection from "../components/ImageSection";

import { users } from "../components/data";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);

  const [bgColor, setBgColor] = useState(user ? "white" : "#ffc017");
  const objStyle = {
    backgroundColor: bgColor,
  };
  const handleScroll = (event) => {
    if (user) {
      setBgColor("white");
    } else {
      if (event.currentTarget.scrollTop >= 600) {
        setBgColor("white");
      } else {
        setBgColor("#ffc017");
      }
    }
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const onLogin = (uname, pword) => {
    users.map((userObj) => {
      if (userObj.username == uname && userObj.password == pword) {
        setShowModal(false);
        setUser(userObj);

        return "success";
      }
    });
  };

  return (
    <div>
      <div
        style={{ width: "100vw", overflow: "scroll", height: "100vh" }}
        onScroll={handleScroll}
      >
        <Header
          style={objStyle}
          onLogin={onLogin}
          user={user}
          setUser={setUser}
          showModal={showModal}
          openModal={openModal}
          // setAdmin={setAdmin}
        />

        <div>
          {!user && <ImageSection />}

          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
