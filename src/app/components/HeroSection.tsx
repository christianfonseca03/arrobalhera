import Image from "next/image";
import carteira_socio from "../../../public/carteira_socio.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero place-items-start justify-center mt-16 text-white min-h-screen bg-inherit">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative min-w-[460px] md:min-w-[560px] min-h-96">
          <Image
            src={carteira_socio}
            alt="carteira de socio"
            fill
            priority
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-center md:block">
          <h1 className="text-5xl font-bold text-accent text-center md:text-left">
            Eu sou mais Arroba!
          </h1>
          <p className="py-6 text-lg w-3/4">
            Sócios da equipe Arrobalhera têm preços exclusivos na compra de
            produtos, inscrição na Gincataí isenta e direito a votação nos
            materiais da equipe a serem lançados!
          </p>
          <button className="btn btn-accent text-lg">
            <Link
              href="https://api.whatsapp.com/send?phone=5551993477433"
              target="_blank"
            >
              Seja Sócio!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
