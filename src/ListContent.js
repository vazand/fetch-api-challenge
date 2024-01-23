import React from "react";

function ListContent({ dataList }) {
  //console.log(dataList)
  return (
    <li key={dataList.id}>
      <div className=" p-2 m-auto">
        <h6 className="bg-cyan-800  text-white border rounded-md">
          {JSON.stringify(dataList)}
        </h6>
      </div>
    </li>
  );
}

export default ListContent;
