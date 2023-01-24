import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    fetch("https://medium-api-psi.vercel.app/api/users")
      .then((res) => res.json())
      .then((data) => {
        const userArr = data.result.filter(
          (e) => e.username == username && e.password == password
        );
        if (userArr.length > 0) {
          localStorage.setItem("name", userArr[0].username);
          localStorage.setItem("firstname", userArr[0].firstName);

          navigate("/admin");
        } else {
          alert("Таны бүртгэл байхгүй байна");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (localStorage.getItem("name")) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="modal" style={{ display: "block" }}>
      {loading && <LoadingSpinner />}
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12">
            <h2>Admin Login</h2>

            <form>
              <div className="mb3">
                <label className="form-label">User name</label>
                <input
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb3">
                <label className="form-label">User name</label>
                <input
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb3">
                <button onClick={onLogin} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
