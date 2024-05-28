"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLink } from "react-icons/io5";

export default function NoScroll() {
  return (
    <div className=" text-xs  w-screen ">
      <div className="flex flex-col ">
        <div className="w-full flex p-8 justify-center items-center  h-screen bg-gray-900">
          <img className="w-1/2 h-1/2" alt="hola" src={"/celbasico.png"} />
          <div className="w-3/5 h-full flex  justify-center flex-col p-8 gap-8">
            <h1 className="text-white text-xl"> Portfolio Básico</h1>
            <ol className="flex flex-col gap-12" type="A">
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="text-white flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Single Page Application (SPA)
              </motion.li>
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.1 }}
                viewport={{ once: true }}
                className="text-white flex items-center gap-2"
              >
                <FaLongArrowAltRight /> 4 Secciones
              </motion.li>
              <motion.li
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                viewport={{ once: true }}
                className="text-white flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Muestra de 2 trabajos
              </motion.li>
            </ol>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="text-xl text-white"
            >
              OFERTA!
            </motion.h1>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex"
            >
              <h1 className="text-xl text-white">$37.999 ARS</h1>
              <h1 className="text-gray-700">
                <del>$45.000 ARS</del>
              </h1>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex gap-8 mt-5"
            >
              <Link
                href="/basica"
                className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 items-center justify-center flex gap-2"
              >
                <IoLink className="h-full text-lg" />
                Ver Ejemplo
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=542634782743&text=Bienvenido+a+mi+whatsapp+-+Ignacio+Gomez"
                className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2"
              >
                <IoLogoWhatsapp className="h-full text-lg" />
                Consultar por más
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex p-8 justify-center items-center  h-screen bg-slate-100">
          <div className="w-3/5 h-full justify-center flex flex-col p-8 gap-4">
            <h1 className="text-black text-xl"> Portfolio Estándar</h1>
            <ol className="flex flex-col gap-4" type="A">
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Single Page Application (SPA)
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Cambio entre Español e inglés
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.1 }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> 5 Secciones con animaciones
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                viewport={{ once: true }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Muestra de 4 trabajos con animaciones
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Animaciones
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Gestión de dominio y hosting
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="text-black flex items-center gap-2"
              >
                <FaLongArrowAltRight /> Cambio entre tema claro y oscuro
              </motion.li>
            </ol>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="text-xl text-black"
            >
              OFERTA!
            </motion.h1>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex"
            >
              <h1 className="text-xl text-black">$62.500 ARS</h1>
              <h1 className="text-gray-700">
                <del>$85.000 ARS</del>
              </h1>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex gap-8 mt-5"
            >
              <Link
                href="/mediana/es"
                className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 items-center justify-center flex gap-2"
              >
                <IoLink className="h-full text-lg" />
                Ver Ejemplo
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=542634782743&text=Bienvenido+a+mi+whatsapp+-+Ignacio+Gomez"
                className="text-slate-400 border-2 bg-gray-800 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2"
              >
                <IoLogoWhatsapp className="h-full text-lg" />
                Consultar por más
              </Link>
            </motion.div>
          </div>
          <img className="w-1/2 h-1.2" alt="hola" src={"/celmediano.png"} />
        </div>
      </div>
    </div>
  );
}
