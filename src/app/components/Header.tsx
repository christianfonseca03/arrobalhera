import Arrobalhera from "../../../public/arrobalhera.png";
import Image from "next/image";
import Link from "next/link";

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
              <a href="#Equipe">Equipe</a>
            </li>
            <li>
              <a href="#Gincana">Gincana</a>
            </li>
            <li>
              <a href="#Produtos">Produtos</a>
            </li>
          </ul>
        </div>
        <div className="h-28 w-40 relative md:hidden ml-4  mt-1 navbar-center">
          <Image src={Arrobalhera.src} fill priority alt="logo"></Image>
        </div>
        <div className="h-28 w-60 relative hidden lg:flex mt-1 ml-1">
          <Image src={Arrobalhera.src} fill priority alt="logo"></Image>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl transition-all">
          <li>
            <a className="hover:text-accent" href="#Equipe">
              Equipe
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href="#Gincana">
              Gincana
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href="#Produtos">
              Produtos
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          className="btn-accent btn md:mr-1"
          href="https://api.whatsapp.com/send?phone=5551993477433"
          target="_blank"
        >
          Seja Sócio!
        </Link>
      </div>
    </div>
  );
}
