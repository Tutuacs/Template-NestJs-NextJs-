import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="navbar visible">
      <div className="flex items-center mt-4 ">
        <NavLinks />
      </div>
    </nav>
  );
}
