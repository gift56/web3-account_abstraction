import React from "react";
import Image from "next/image";
import Link from "next/link";

const Birthdays: React.FC = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h6 className="text-gray-500">Birthdays</h6>
      </div>
      <div className="flex items-center justify-between">
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
          <button
            type="button"
            className="outline-none bg-blue-500 text-white text-xs py-2 px-4 rounded-md"
          >
            Celebrate
          </button>
        </div>
      </div>
      <div className="bg-slate-100 p-4 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="gift icon" width={24} height={24} />
        <Link href="/" className="space-y-2 text-xs">
          <h4 className="text-gray-700 font-semibold">Upcoming Birthdays</h4>
          <p className="text-gray-500">See others 16 have upcoming birthdays</p>
        </Link>
      </div>
    </section>
  );
};

export default Birthdays;
