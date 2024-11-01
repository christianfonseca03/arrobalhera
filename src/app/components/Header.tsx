import Arrobalhera from "../../../public/arrobalhera.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-28 pt-6 text-white justify-around text-xl items-center">
      <div className="h-28 w-60  relative">
        <Image src={Arrobalhera.src} fill priority alt="logo"></Image>
      </div>
      <div className="hover:text-accent transition-all">Equipe</div>
      <div className="hover:text-accent transition-all">Gincana</div>
      <div className="hover:text-accent transition-all">Produtos</div>
      <button className=" btn-accent btn">Seja Sócio</button>
    </header>
  );
}
