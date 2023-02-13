import Image from "next/image";
import Link from "next/link";
import { Menu } from "react-ionicons";
import logo from "../../public/logo.png";
import menuData from "../data/menuData.json";

export default function Navbar() {
  return (
    <div className="flex justify-between py-2 items-center px-7">
      <div>
        <Link href="/">
          <Image src={logo} height={120} alt="Logo" />
        </Link>
      </div>
      <div className="mobile:block laptop:block desktop:hidden">
        <Menu height="40px" width="40px" />
      </div>
      <ul className="mobile:hidden tablet:hidden desktop:flex gap-6 text-lg">
        {menuData.map((menu, i) => (
          <li className="hover:text-primary" key={i}>
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
