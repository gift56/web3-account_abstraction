import Image from "next/image";
import React from "react";

const Comments: React.FC = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile picture"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-4 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="emoji icon"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-start justify-between text-xs gap-3 mt-4 text-gray-500">
        <Image
          src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-2 flex-1">
          <h6 className="font-semibold">John Doe</h6>
          <p className="font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            quidem vitae nihil dignissimos aspernatur incidunt iure vero quasi
            voluptatum illum beatae nemo repellat libero quae provident, dolores
            molestiae, voluptates pariatur.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt="like icon"
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                123 <span className="hidden md:inline">Likes</span>
              </span>
            </div>
            <span>Reply</span>
          </div>
        </div>
        <Image
          src="/more.png"
          alt="more icon"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Comments;
