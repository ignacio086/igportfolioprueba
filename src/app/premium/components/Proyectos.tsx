"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });
export default function Proyectos() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="w-screen h-[200vh] lg:mt-0 lg:h-[300vh] p-8 bg-nuevo-300"
    >
      <div className="w-screen gap-64 h-[300vh] flex flex-col items-center  p-8">
        <motion.div style={{ y: y }} className="w-screen sticky top-0 h-24 0">
          <h1 style={oswald.style} className="text-9xl text-nuevo-100">
            {" "}
            PROYECTOS
          </h1>
        </motion.div>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className=" h-96 w-3/4 flex gap-2 justify-center items-center bg-nuevo-100/20 backdrop-blur-xl rounded-xl shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 z-10">
          <div className="w-2/3 flex flex-col gap-4 h-full p-8 text-nuevo-400">
            <h1 style={oswald.style} className="text-nuevo-400 text-4xl">Proyecto 1</h1>
            <p className="text-xs">tecnologia 1 / tecnologia 2</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              expedita cum beatae. Minus, nostrum! Consectetur ratione natus
              aliquam obcaecati iusto, blanditiis quos illum unde cum, atque
              amet fuga ullam! Ad?
            </p>
            <div className="flex gap-2">
              <a className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32 justify-center flex ">
                Codigo
              </a>
              <a className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32  justify-center flex ">
                Visitar
              </a>
            </div>
          </div>
          <div className="w-1/3 h-1/2 bg-[url('/tribu.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </motion.div>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="mr-96 h-96 w-3/4 flex gap-2 justify-center items-center bg-nuevo-100/20 backdrop-blur-xl rounded-xl shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 z-10">
          <div className="w-2/3 flex flex-col gap-4 h-full p-8 text-nuevo-400">
            <h1 style={oswald.style} className="text-nuevo-400 text-4xl">Proyecto 2</h1>
            <p className="text-xs">tecnologia 3 / tecnologia 4</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              expedita cum beatae. Minus, nostrum! Consectetur ratione natus
              aliquam obcaecati iusto, blanditiis quos illum unde cum, atque
              amet fuga ullam! Ad?
            </p>
            <div className="flex gap-2">
              <a className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32 justify-center flex ">
                Codigo
              </a>
              <a className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32  justify-center flex ">
                Visitar
              </a>
            </div>
          </div>
          <div className="w-1/3 h-1/2 bg-[url('/fotografia.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </motion.div>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} className="ml-72 h-96 w-3/4 flex gap-2 justify-center items-center bg-nuevo-100/20 backdrop-blur-xl rounded-xl shadow-[#33605a_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 z-10">
          <div className="w-2/3 flex flex-col gap-4 h-full p-8 text-nuevo-400">
            <h1 style={oswald.style} className="text-nuevo-400 text-4xl">Proyecto 3</h1>
            <p className="text-xs">tecnologia 5 / tecnologia 6</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              expedita cum beatae. Minus, nostrum! Consectetur ratione natus
              aliquam obcaecati iusto, blanditiis quos illum unde cum, atque
              amet fuga ullam! Ad?
            </p>
            <div className="flex gap-2">
              <a className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32 justify-center flex ">
                Codigo
              </a>
              <a className="text-nuevo-400 border-2 bg-nuevo-100 border-nuevo-500 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100 w-32  justify-center flex ">
                Visitar
              </a>
            </div>
          </div>
          <div className="w-1/3 h-1/2 bg-[url('/tragos.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
        </motion.div>

      </div>
    </div>
  );
}
