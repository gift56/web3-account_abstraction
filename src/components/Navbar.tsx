import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/" className="uppercase">
          SocialMedia
        </Link>
      </div>
      <div></div>
      <div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
