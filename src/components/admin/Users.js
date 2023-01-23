import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      Users
      <h2>
        <Link to="/adduser">Add</Link>
      </h2>
    </div>
  );
}
