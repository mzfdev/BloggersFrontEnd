import React, { useState } from "react";
import Blogs from "./Components/Blogs";
import Readers from "./Components/Readers";
import BlogReaders from "./Components/BlogReaders";

function Main() {
  const [activeTab, setActiveTab] = useState("Blogs");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-gray-100 flex-none w-48 flex flex-col">
        <div
          className={`cursor-pointer py-4 px-6 ${
            activeTab === "Blogs" ? "bg-gray-700" : ""
          }`}
          onClick={() => handleTabClick("Blogs")}
        >
          Blogs
        </div>
        <div
          className={`cursor-pointer py-4 px-6 ${
            activeTab === "Readers" ? "bg-gray-700" : ""
          }`}
          onClick={() => handleTabClick("Readers")}
        >
          Readers
        </div>
        <div
          className={`cursor-pointer py-4 px-6 ${
            activeTab === "BlogReaders" ? "bg-gray-700" : ""
          }`}
          onClick={() => handleTabClick("BlogReaders")}
        >
          BlogReaders
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === "Blogs" && <Blogs />}
        {activeTab === "Readers" && <Readers />}
        {activeTab === "BlogReaders" && <BlogReaders />}
      </div>
    </div>
  );
}

export default Main;
