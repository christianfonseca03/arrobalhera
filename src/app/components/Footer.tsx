import Link from "next/link";
import instagram from "../../../public/instagram.svg";
import whatsapp from "../../../public/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-accent text-base-content p-4">
      <aside>
        <p className="text-lg">Gravataí, 2024</p>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/arrobalhera?igsh=MWNwMG1qdDV2eXloYw=="
            target="_blank"
          >
            <img src={instagram.src} alt="" className="h-6" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5551993477433"
            target="_blank"
          >
            <img src={whatsapp.src} alt="" className="h-6" />
          </Link>
        </div>
      </aside>
    </footer>
  );
}
