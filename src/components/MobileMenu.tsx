"use client";

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden ml-4">
      <button
        type="button"
        className="flex flex-col gap-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="w-full  h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 absolute left-0 top-24">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
