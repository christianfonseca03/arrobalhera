import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Equipe from "./components/Equipe";
import Divisor from "./components/Divisor";

export default function Home() {
  return (
    <div className="bg-[#101211] h-screen">
      <Header />
      <HeroSection />
      <Divisor
        titulo="Desde 2010 que ninguém segura a gente!"
        frase="Há 14 anos a equipe Arrobalhera participa das Gincanas de Gravataí e
          apoia outras equipes ao redor do estado!"
      />
      <Equipe />
      <Divisor
        titulo="Todos já sabem que a Arrobalhera é a primeira barra!"
        frase="Desde o nosso início revolucionamos a forma de torcer nas gincanas do
          estado, nos tornando a primeira barra gincaneira!"
      />
    </div>
  );
}
