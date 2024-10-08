import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-24">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="uppercase text-xl font-bold text-blue-600">
          SocialMedia
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center justify-start">
            <Image src="/home.png" alt="Homepage" width={16} height={16} />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center justify-start">
            <Image src="/friends.png" alt="Friends" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center justify-start">
            <Image src="/stories.png" alt="Stories" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
