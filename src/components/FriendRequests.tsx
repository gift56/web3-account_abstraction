import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests: React.FC = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h6 className="text-gray-500">Friend Requests</h6>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="friend request profile image"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <h6 className="font-semibold">John Doe</h6>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src="/accept.png"
              alt="accept icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <Image
              src="/reject.png"
              alt="reject icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FriendRequests;
