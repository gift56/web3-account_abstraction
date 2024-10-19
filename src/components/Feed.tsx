import React from "react";
import Post from "./Post";

const Feed: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {Array.from({ length: 10 }).map((_, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default Feed;
