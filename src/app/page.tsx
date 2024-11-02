import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Equipe from "./components/Equipe";
import Divisor from "./components/Divisor";
import Gincana from "./components/Gincana";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

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
      <Gincana />
      <Divisor
        titulo="O sentimento nunca vai mudar!"
        frase="A equipe esteve em hiato de 2018 a 2023, mas o amor pela camisa fez com que os integrantes retomassem suas atividades!"
      />
      <Produtos />
      <Footer />
    </div>
  );
}
