import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Equipe from "./components/Equipe";

export default function Home() {
  return (
    <div className="bg-[#101211] h-screen">
      <Header />
      <HeroSection />
      <section className="w-full bg-accent h-min text-[#101211]">
        <h2 className="text-center pt-4 text-3xl font-semibold">
          {" "}
          &#34;Desde 2010 que ninguém segura a gente!&#34;{" "}
        </h2>
        <p className="text-center text-[#101211] pt-2 text-lg pb-4">
          Há 14 anos a equipe Arrobalhera participa das Gincanas de Gravataí e
          apoia outras equipes ao redor do estado!
        </p>
      </section>
      <Equipe />
    </div>
  );
}
