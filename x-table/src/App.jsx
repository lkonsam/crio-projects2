import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const sortData = (field) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Date and Views Table</h1>
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={() => sortData("date")}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            border: "1px solid",
          }}
        >
          Sort by Date
        </button>
        <button
          onClick={() => sortData("views")}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            border: "1px solid",
          }}
        >
          Sort by Views
        </button>
      </div>
      <table
        border="1"
        cellPadding="5"
        cellSpacing="0"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
