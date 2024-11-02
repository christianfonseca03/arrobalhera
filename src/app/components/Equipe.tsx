import foto_equipe from "../../../public/foto_gincana.jpeg";

export default function Equipe() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${foto_equipe.src})`,
      }}
    >
      <div className="hero-overlay bg-[#101211] bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md bg-black bg-opacity-5">
          <h1 className="mb-5 text-5xl font-bold text-accent">
            A nossa Equipe
          </h1>
          <p className="mb-5 text-white text-lg">
            A @Lhera é uma equipe de Gincana criada em 2010 com intuito de ser
            mais do que uma equipe, somos acima de tudo um grupo de amigos
            fazendo o que amam, e sempre que possível, levando o espírito
            gincaneiro pelo estado e apoiando projetos sociais e culturais da
            cidade de Gravataí!
          </p>
        </div>
      </div>
    </div>
  );
}
