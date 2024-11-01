import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile background image"
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/27592345/pexels-photo-27592345/free-photo-of-halloween.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile image"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 -bottom-6 mx-auto ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col items-center gap-2">
        <h3>John doe</h3>
        <div className="flex items-center gap-4">
          <div className="flex">
            {Array.from({ length: 3 }).map((_, index) => (
              <Image
                key={index}
                src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              />
            ))}
          </div>
          <h5 className="text-xs text-gray-500">500 Followers</h5>
        </div>
        <Link href={`/profile/1232`}>
          <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
            My Profile
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProfileCard;
