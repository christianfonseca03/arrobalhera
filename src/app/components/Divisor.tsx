interface DivisorProps {
  titulo: string;
  frase: string;
}

export default function Divisor({ titulo, frase }: DivisorProps) {
  return (
    <section className="w-full bg-accent h-min text-[#101211]">
      <h2 className="text-center pt-4 text-3xl font-semibold">
        {" "}
        &#34;{titulo}&#34;{" "}
      </h2>
      <p className="text-center text-[#101211] pt-2 text-lg pb-4">{frase}</p>
    </section>
  );
}
