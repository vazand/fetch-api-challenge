import "./App.css";
import Content from "./Content";
import { useState } from "react";
import apiRequest from "./apiRequests.js";

function App() {
  const [contentList, setContentList] = useState([]);
  const contentUpdater = async (e) => {
    const API_URL = `https://jsonplaceholder.typicode.com/${e.target.id}`;
    const result = await apiRequest(API_URL);
    setContentList(result.resultData);
    //console.log(result)
    //console.log(e.target.id);
    //stetContent
  };
  return (
    <div>
      <div className="grid grid-flow-col p-2 m-auto">
        <button
          id="users"
          className="bg-teal-500"
          type="button"
          onClick={(e) => contentUpdater(e)}
        >
          users
        </button>
        <button
          id="posts"
          className="bg-orange-500"
          type="button"
          onClick={(e) => contentUpdater(e)}
        >
          posts
        </button>
        <button
          id="comments"
          className="bg-sky-500"
          type="button"
          onClick={(e) => contentUpdater(e)}
        >
          comments
        </button>
      </div>
      <Content className="m-auto p-2" contentData={contentList} />
    </div>
  );
}

export default App;
