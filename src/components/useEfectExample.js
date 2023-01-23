import React, { useEffect, useState } from "react";

export default function UseEfectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  // use of useEffect in react for every rerender
  useEffect(() => {
    console.log("running");
  });

  useEffect(() => {
    console.log("one run");
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.result);
      });
  }, []);

  useEffect(() => {
    console.log("count updated");
  }, [count]);

  return (
    <div>
      useEfectExample
      {count}
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
