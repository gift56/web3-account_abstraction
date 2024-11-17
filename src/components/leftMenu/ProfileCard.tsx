import React from "react";
import prisma from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const ProfileCard: React.FC = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-6">
      <div className="h-20 relative">
        <Image
          src={user.cover || "/noCover.png"}
          alt="profile background image"
          fill
          className="object-cover rounded-md"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt={`${user.username} profile image`}
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 -bottom-6 mx-auto ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col items-center gap-2">
        <h3
          className={`font-semibold text-black ${
            user.username ? "capitalize" : ""
          }`}
        >
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </h3>
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
          <h5 className="text-xs text-gray-500">
            {" "}
            {user._count.followers} Followers
          </h5>
        </div>
        <Link href={`/profile/${user.username}`}>
          <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
            My Profile
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProfileCard;
