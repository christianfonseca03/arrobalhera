import instagram from "../../../public/instagram.svg";
import whatsapp from "../../../public/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-accent text-base-content p-4">
      <aside>
        <p className="text-lg">Gravataí, 2024</p>
        <div className="flex gap-4">
          <img src={instagram.src} alt="" className="h-6" />
          <img src={whatsapp.src} alt="" className="h-6" />
        </div>
      </aside>
    </footer>
  );
}
