import React from "react";

export default function Footer() {
  const date = new Date();
  return <div className="container">Copyright @{date.getFullYear()}</div>;
}
