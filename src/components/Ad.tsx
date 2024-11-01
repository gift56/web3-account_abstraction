import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AdProps {
  size: "sm" | "md" | "lg";
}

const Ad: React.FC<AdProps> = ({ size }) => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-md text-sm space-y-4">
      <div className="flex items-center justify-between font-medium">
        <h6 className="text-gray-500">Sponsored Ads</h6>
        <Image
          src="/more.png"
          alt="more icon"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-48" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="ads explode "
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex items-center justify-start gap-4">
        <Image
          src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="ads item image"
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
        />
        <h6 className="font-medium text-blue-500">
          John Doe&apos;s Enterprise
        </h6>
      </div>
      <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo sint
        ratione at esse iste eum nemo quos, ea eligendi!
      </p>
      <button type="button" className="outline-none bg-gray-200 text-gray-500 p-2 text-xs rounded-lg w-full">Learn more</button>
    </section>
  );
};

export default Ad;
