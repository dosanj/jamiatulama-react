import React, { useState, useEffect } from "react";

const USERS_URL = "https://example.com/api/users";

export default function Table() {
  const [count, setCount] = useState(0);
  const [currentResult, setCurrentResult] = useState([]);
  useEffect(async () => {});
  const getTableData = async (page = 0) => {
    const { count, results } = await fetch(`${USERS_URL}?page=${page}`);
    setCount(count);
    setCurrentResult(results);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {currentResult.map(({ id, firstName, LastName }) => {
            return (
              <tr>
                <td>{id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
}
