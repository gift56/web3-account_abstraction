import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import FriendRequestList from "./FriendRequestList";

const FriendRequests: React.FC = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.length === 0) return null;

  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h6 className="text-gray-500">Friend Requests</h6>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <FriendRequestList requests={requests}/>
    </section>
  );
};

export default FriendRequests;
