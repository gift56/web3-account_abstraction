import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import prisma from "@/lib/client";

interface UserMediaCardProps {
  user: User;
}

const UserMediaCard: React.FC<UserMediaCardProps> = async ({ user }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h3 className="text-gray-500">User Media</h3>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative w-1/5 h-24" key={post.id}>
                <Image
                  src={post.img!}
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))
          : "No media found!"}
      </div>
    </section>
  );
};

export default UserMediaCard;
