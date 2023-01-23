import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((response) => response.json())
      .then((dt) => {
        console.log(dt.result);
        setData(dt.result);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "Loading";
  if (error) return "Error";
  return (
    <div>
      <div className="row my-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h4 className="card-title text-warning">Users</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i className="bi bi-people" style={{ fontSize: "40px" }}></i>
              <h1>4500</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h4 className="card-title text-warning">News</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i className="bi bi-newspaper" style={{ fontSize: "40px" }}></i>
              <h1>9000</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="card-title">Category</div>
            <div className="d-flex justify-content-between align-items-center">
              <i className="bi bi-list-nested" style={{ fontSize: "40px" }}></i>
              <h1>20</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <BarChart />
  <PieChart /> */}
      <div className="row p-3">
        <div className="table-responsive">
          <table className="table table-strip">
            <thead>
              <th>№</th>
              <th>Title</th>
              <th>Category</th>
              <th>Is Trending?</th>
            </thead>
            <tbody>
              {data.map(({ _id, title, isTrending, category }, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>
                      {isTrending ? (
                        <span className="badge badge-success">yes</span>
                      ) : (
                        <span className="badge badge-danger">no</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
