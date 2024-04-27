

import { Lato } from "next/font/google";

import Experiencia from "../components/Experiencia";
import Soft from "../components/Soft";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Inicio from "../components/Inicio";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

const lato = Lato({ subsets: ["latin"], weight: ["900"] });

export default async function Media({ params }) {
  const diccionario = await import(`../dictionaries/${params.lang}.json`).then(m => m.default)
  return (
    <main className=" w-screen h-screen bg-sky-500">
      <Link
        href="/"
        className=" absolute top-2 cursor-pointer bg-sky-500 left-10 w-24 items-center justify-center flex flex-row h-6 rounded-xl border-2 border-gray-800 z-50"
      >
        <FaLongArrowAltLeft /> Volver
      </Link>
      <Inicio lang={diccionario.inicio} />
      <Experiencia lang={diccionario.experiencia} />
      <Soft lang={diccionario.soft} />
      <Proyectos lang={diccionario.proyectos} />
      <Contacto lang={diccionario.contact} />
    </main>
  );
}
