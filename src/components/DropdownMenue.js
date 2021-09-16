import React from "react";

const Sidebar = ({ sideBarList }) => {
  return (
    <div>
      <ul className="w-43 flex flex-col flex-wrap bg-gray-400 p-2 rounded-md">
        {sideBarList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
