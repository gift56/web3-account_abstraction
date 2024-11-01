import React from "react";
import Link from "next/link";
import Image from "next/image";

interface UserInfoCardProps {
  userId: string;
}

const UserInfoCard: React.FC<UserInfoCardProps> = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h6 className="text-gray-500">User Information</h6>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <h4 className="text-xl text-black">John doe</h4>
          <p className="text-sm">@johndoe</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolore
          debitis nobis laboriosam saepe ullam. Harum architecto rerum aliquam
          id?
        </p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <h6>
            Living in <b>Warri</b>
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <h6>
            Went to <b>Unidel</b>
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <h6>
            Works at <b>Opay</b>
          </h6>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">
              localhost
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <h6>Joined Novermber, 2024</h6>
          </div>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white rounded-md text-sm p-2"
        >
          Follow
        </button>

        <button type="button" className="self-end text-red-400 text-xs">
          Block User
        </button>
      </div>
    </section>
  );
};

export default UserInfoCard;
