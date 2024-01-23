import React from "react";
import ListContent from "./ListContent";

function Content({ contentData }) {
  return (
    <ul>
      {contentData ? (
        contentData.map((content) => <ListContent dataList={content} key={content.id} />)
      ) : (
        <li>No Content</li>
      )}
    </ul>
  );
}

export default Content;
//      <Content className="m-auto p-2" contentData={contentList} />
