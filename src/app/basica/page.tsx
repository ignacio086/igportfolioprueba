import { FaBriefcase, FaGithub, FaLinkedin, FaLongArrowAltLeft } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TimelineComponent } from "./components/Timeline";
import { IoCodeSlash, IoLink } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio Básico",
};
export default function Basica() {
  return (
    <main className="absolute gap-20 flex flex-col items-center  top-0 z-[-2] h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
             <Link
          href="/"
          className=" absolute top-2 cursor-pointer text-white bg-gray-900 left-10 w-24 items-center justify-center flex flex-row h-6 rounded-xl border-2 border-gray-800 z-50"
        >
          <FaLongArrowAltLeft /> Volver
        </Link>
      <nav className="w-[400px] bg-slate-100/10 border-2 backdrop-blur-md border-gray-900 h-20 rounded-xl items-center justify-center sticky top-1 slate-100/30 flex gap-4 text-white z-10">
        <a href="#inicio">Inicio</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobremi">Sobre mi</a>
      </nav>
      <section id="inicio" className="w-3/4 flex flex-col gap-12 ">
        <div className="flex items-center  gap-2">
          <div className="w-20 h-20 bg-slate-100 rounded-full"></div>
          <p className="text-slate-400 h-fit p-2 rounded-xl text-xs border-2 border-lime-300">
            Disponible para trabajar
          </p>
        </div>
        <h1 className="text-white text-2xl">Hola! Soy Ignacio, <strong className="text-lime-300">Programador web</strong></h1>
        <p className="text-white w-2/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas rem
          odit explicabo fugiat iusto suscipit beatae accusantium architecto
          tempore, ratione repudiandae a praesentium temporibus quibusdam sint.
          In neque cupiditate deleniti!
        </p>
        <div className="flex gap-4">
          <a className="w-32 text-center text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black flex gap-2">
            <IoIosMail className="h-full text-lg" />
            Contactame
          </a>
          <a className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2">
            <FaLinkedin className="h-full text-lg" />
            Linkedin
          </a>
        </div>
      </section>
      <section id="experiencia" className="w-3/4 flex flex-col gap-12 ">
        <h1 className="text-white gap-2 flex text-4xl">
          <FaBriefcase />
          Experiencia Laboral
        </h1>
        <TimelineComponent />
      </section>
      <section id="proyectos" className="w-3/4  flex flex-col gap-12 ">
        <h1 className="text-white gap-2 flex text-4xl">
          <IoCodeSlash /> Proyectos
        </h1>
        <div className="flex flex-row gap-12">
          <div className="w-1/2 hover:scale-105 transition h-96  ">
            <div className="w-full hover:scale-90 transition h-96 bg-gray-800 rounded-xl"></div>
          </div>
          <div className="h-96 w-1/2 flex- flex-col ">
            <h1 className="text-2xl text-white">Proyecto 1</h1>
            <p className="text-white text-xs mt-2">
              Tecnologia 1 | Tecnologia 2
            </p>
            <p className="text-white mt-5">
            <strong className="text-lime-300">Explicacion</strong>:Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Expedita quas nam blanditiis praesentium iste voluptatum!
              Eum, sunt. Vitae perferendis nulla illo quibusdam. Veritatis ea
              blanditiis, nobis tenetur sunt asperiores vero?
            </p>
            <div className="flex gap-8 mt-5">
              <a className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2">
                <FaGithub className="h-full text-lg" />
                Codigo
              </a>
              <a className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2">
                <IoLink className="h-full text-lg" />
                Visita
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-12">
          <div className="w-1/2 hover:scale-105 transition h-96  ">
            <div className="w-full hover:scale-90 transition h-96 bg-gray-800 rounded-xl"></div>
          </div>
          <div className="h-96 w-1/2 flex- flex-col ">
            <h1 className="text-2xl text-white">Proyecto 2</h1>
            <p className="text-white text-xs mt-2">
              Tecnologia 3 | Tecnologia 4
            </p>
            <p className="text-white mt-5">
              <strong className="text-lime-300">Explicacion</strong>:Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Expedita quas nam blanditiis praesentium iste voluptatum!
              Eum, sunt. Vitae perferendis nulla illo quibusdam. Veritatis ea
              blanditiis, nobis tenetur sunt asperiores vero?
            </p>
            <div className="flex gap-8 mt-5">
              <a className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2">
                <FaGithub className="h-full text-lg" />
                Codigo
              </a>
              <a className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2">
                <IoLink className="h-full text-lg" />
                Visita
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="sobremi" className="w-3/4 flex flex-col gap-12 ">
        <h1 className="text-white gap-2 flex text-4xl">
          <FaPerson /> Sobre mi
        </h1>
        <div className="flex gap-12">
         <p className="text-white w-1/2">Lorem ipsum dolor sit amet <strong className="text-lime-300">Veniam quibusdam minima temporibus ducimus illo</strong>consectetur adipisicing elit. Omnis magnam mollitia asperiores dolores a odit ipsa temporibus delectus modi sed. Fugit optio quis iusto deleniti corrupti dicta quos est ad! Lorem ipsum dolor sit amet consectetur, adipisicing elit. In veritatis reprehenderit maxime? Ipsum incidunt provident eaque odit! Exercitationem beatae unde architecto et illo omnis? Veniam quibusdam minima <strong className="text-lime-300">veniam quibusdam minima temporibus ducimus illo</strong> temporibus ducimus illo.</p>
         <div className="w-1/2 hover:scale-105 transition h-96  ">
            <div className="w-full hover:scale-90 transition h-96 bg-gray-800 rounded-xl"></div>
          </div>
        </div>
      </section>
      <footer className="w-screen h-28 justify-around items-center flex border-t-2 border-gray-800">
      <p className="text-gray-700 text-xs">Portfolio basado en midudev</p>
       <p className=" text-gray-700 text-xs">Redesigned by Ignacio Gomez : <a className="text-lime-300" href="https://portfolio-hazel-one-64.vercel.app/">web</a></p>
      </footer>
    </main>
  );
}
