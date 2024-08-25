import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-red-500 flex justify-between items-center 
    max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="regular-16 text-gray-40 flex items-center 
            justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image src="menu.svg" alt="menu" height={32} width={32}
      className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  );
};

export default Navbar;
