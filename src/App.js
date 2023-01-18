import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ImageSection from "./components/ImageSection";
import { Routes, Route } from "react-router-dom";
import { users } from "./components/data";
import NewsDetail from "./components/NewsDetail";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";
// import AdminIndex from "./components/admin/AdminIndex";

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState(false);

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
      {!admin ? (
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
            setAdmin={setAdmin}
          />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!user && <ImageSection />}
                    <Main user={user} />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/newsdetails/:id" element={<NewsDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            {/* <Route path="/admin" element={<AdminIndex />} /> */}
          </Routes>
        </div>
      )}
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
