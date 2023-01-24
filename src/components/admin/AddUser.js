import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const init = {
    username: "",
    password: "",
    userType: "",
    firstName: "",
    lastName: "",
    userImg: "",
    organization: "",
  };

  const [user, setUser] = useState(init);
  const [modal, setModal] = useState(3);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();

    fetch("https://medium-api-psi.vercel.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("modal ajillaj bna");
  }, [modal]);

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <form>
            {modal}

            <span onClick={() => setModal(modal + 1)}>Add modal</span>
            <div className="mb-3">
              <select></select>

              <input
                type="text"
                className="form-control"
                placeholder="firstName"
                value={user.firstName}
                onChange={(e) => {
                  setUser({ ...user, firstName: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="lastName"
                value={user.lastName}
                onChange={(e) => {
                  setUser({ ...user, lastName: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="organization"
                value={user.organization}
                onChange={(e) => {
                  setUser({ ...user, organization: e.target.value });
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={onSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
