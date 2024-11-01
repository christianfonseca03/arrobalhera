import Arrobalhera from "../../../public/arrobalhera.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#101211]"
          >
            <li>
              <a>Equipe</a>
            </li>
            <li>
              <a>Gincana</a>
            </li>
            <li>
              <a>Produtos</a>
            </li>
          </ul>
        </div>
        <div className="h-28 w-40 relative md:hidden mx-16 mt-1 navbar-center">
          <Image src={Arrobalhera.src} fill priority alt="logo"></Image>
        </div>
        <div className="h-28 w-60 relative hidden lg:flex">
          <Image src={Arrobalhera.src} fill priority alt="logo"></Image>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <a>Equipe</a>
          </li>
          <li>
            <a>Gincana</a>
          </li>
          <li>
            <a>Produtos</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn-accent btn">Seja Sócio</a>
      </div>
    </div>
  );
}
