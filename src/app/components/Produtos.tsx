import Link from "next/link";
import bone from "../../../public/bone.jpeg";
import camisa_gincana from "../../../public/camisa_gincana.jpeg";
import camisa_passeio from "../../../public/camisa_passeio.jpeg";

export default function Produtos() {
  return (
    <div className="hero place-content-start justify-center bg-inherit min-h-screen pt-24 pb-36">
      <div>
        <h1
          className="text-5xl font-bold text-accent text-center pb-12"
          id="Produtos"
        >
          Produtos
        </h1>
        <div className="flex gap-12 flex-col md:flex-row">
          <div className="card glass w-96">
            <figure>
              <img src={bone.src} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-accent">Boné @Lhera</h2>
              <p className="text-white">R$ 38,00</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5551993477433"
                    target="_blank"
                  >
                    Confira disponibilidade!
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card glass w-96">
            <figure>
              <img src={camisa_passeio.src} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-accent">Camisa de passeio</h2>
              <p className="text-white">R$ 45,00</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5551993477433"
                    target="_blank"
                  >
                    Confira disponibilidade!
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card glass w-96">
            <figure>
              <img src={camisa_gincana.src} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-accent">Camisa Gincataí 2024</h2>
              <p className="text-white">R$ 25,00</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5551993477433"
                    target="_blank"
                  >
                    Confira disponibilidade!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
