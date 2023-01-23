import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginModal({
  showModal,
  setShowModal,
  onLogin,
  setAdmin,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const style = { display: showModal ? "block" : "none" };

  return (
    <div className="modal" style={style} onClick={setShowModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-light pe-4"
                onClick={() => onLogin(username, password)}
              >
                Login
              </button>

              <button className="btn btn-secondary pe-4" onClick={setShowModal}>
                Close
              </button>

              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Go to admin login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
