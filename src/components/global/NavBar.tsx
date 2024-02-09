import Image from "next/image";
import Boxful from "@public/boxful.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white p-5 sticky top-0">
      <div className="flex justify-start ml-8 mr-8">
        <Link href={"/"} passHref>
          <Image priority={false} src={Boxful} alt="boxful icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
