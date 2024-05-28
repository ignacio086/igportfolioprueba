"use client";
import Scroll from "./components/Scroll";
import NoScroll from "./components/NoScroll";
import Primero from "./components/First";
import { PremiumCel, PremiumOption } from "./components/Premium";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Home() {
  let pantalla;
  if (typeof screen !== "undefined") {
    pantalla = screen;
  }
  return (
    <main className="bg-gray-900 ">
      <Primero />
      {pantalla !== undefined && pantalla.width > 1000 ? (
        <>
          <Scroll />
          <PremiumOption />
        </>
      ) : (
        <>
          <NoScroll />
          <PremiumCel />
        </>
      )}
      <footer className="w-screen h-56 lg:h-40 bg-nuevo-500 border-t-2 p-8 lg:p-24 border-nuevo-100 flex items-center justify-center gap-20">
        <h2 className="text-nuevo-100/70 text-center">
          Creado por <strong>Ignacio Gomez</strong>
          <br />
          Todos los derechos reservados.
        </h2>
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-nuevo-100 text-xl">Contacto</h1>
          <a
            href="https://wa.me/5492634782743"
            className="text-nuevo-100/70 flex items-center gap-2"
          >
            <FaWhatsapp /> +54 9 2634782743
          </a>
          <a
            href="www.linkedin.com/in/ignaciogomez-devfullstack"
            className="text-nuevo-100/70 flex items-center gap-2"
          >
            <FaLinkedin /> ignaciogomez-devfullstack
          </a>
          <a
            href="https://www.instagram.com/igna_gomez093"
            className="text-nuevo-100/70 flex items-center gap-2"
          >
            <FaInstagram /> igna_gomez093
          </a>
        </div>
      </footer>
    </main>
  );
}
