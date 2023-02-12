import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import menuData from "../data/menuData.json";

export default function Navbar() {
  return (
    <div className="flex justify-between py-2 items-center">
      <div>
        <Link href="/">
          <Image src={logo} height={120} alt="Logo" />
        </Link>
      </div>
      <ul className="flex gap-6 text-lg">
        {menuData.map((menu, i) => (
          <li className="hover:text-primary" key={i}>
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
