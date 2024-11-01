import React from "react";
import Link from "next/link";
import Image from "next/image";

interface UserMediaCardProps {
  userId: string;
}

const UserMediaCard: React.FC<UserMediaCardProps> = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h3 className="text-gray-500">User Media</h3>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="relative w-1/5 h-24">
            <Image
              src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="media image"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserMediaCard;
