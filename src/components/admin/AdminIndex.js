import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";

export default function AdminIndex() {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=world&apiKey=57f263c59a5c451d8dcf306599bde48c"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading";
  if (error) return "Error";

  return (
    <div>
      <div className="navbar navbar-dark flex-nowrap sticky-top bg-dark">
        <a
          href="gogo.mn"
          className="navbar-brand col-md-3 me-0 px-3 fs-6 text-white"
        >
          Company Name
        </a>
        <input
          type="text"
          className="form-control bg-dark w-100 rounded-0 border-0"
          placeholder="Search"
        />

        <div>
          <a href="gogo.mn" className="text-light">
            ss
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 px-2 bg-light">
            <nav className="navbar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/a">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/a">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/a">
                    Users
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9 px-4">
            <div className="row gap-3 my-4">
              <div className="col-md-4">
                <div className="card py-2 px-4">
                  <h5 class="card-title text-warning">Users</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-1">
                      <i
                        className="bi bi-people"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <h2 className="text-primary">4500</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card py-2 px-4">
                  <h5 class="card-title text-warning">News</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-1">
                      <i
                        className="bi bi-newspaper"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <h2 className="text-primary">2300</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card py-2 px-4">
                  <h5 class="card-title text-warning">Access</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-1">
                      <i
                        className="bi bi-reception-4"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <h2 className="text-primary">6400</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* <BarChart />
              <PieChart /> */}
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <th>1</th>
                  <th>1</th>
                  <th>1</th>
                </thead>
                <tbody>
                  {news.map((e) => {
                    return (
                      <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>b</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
