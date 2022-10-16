import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [dt, setdt] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/posts`;
  async function Print() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setdt(data);
  }
  useEffect(() => {
    Print();
  });
  return (
    <div className="App">
      <h1>data display</h1>
      {dt.map((item) => {
        return (
          <p>
            {item.id}
            {item.userId}
            {item.title}
            {item.body}
          </p>
        );
      })}
    </div>
  );
}
