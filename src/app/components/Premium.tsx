"use client"
import { motion} from "framer-motion";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLink } from "react-icons/io5";

export function PremiumOption(){
 return(
  <motion.div
  style={{  backgroundImage: `url('/premium.png')` }}
  className="w-[100vw] h-screen flex items-center justify-center  bg-white"
>
  <motion.div
    initial={{ x: 300 }}
    transition={{ duration: 1 }}
    whileInView={{ x: 0 }}
    viewport={{ once: true }}
    className="w-full flex justify-end  h-full bg-gradient-to-r from-nuevo-100/20 via-nuevo-500 to-nuevo-500"
  >
    <div className="w-1/2 h-full flex flex-col p-24 gap-8">
      <h1 className="text-white text-2xl"> Portfolio Premium</h1>
      <ol className="flex flex-col gap-12" type="A">
      <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-white flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Portfolio Básico y Estándar +
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-white flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Multiple Page Application (MPA)
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-white flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Podés incluir blogs o tiendas
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          className="text-white flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Todas las secciones que quieras
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-white flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Diseño totalmente único y personalizable
        </motion.li>
      </ol>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-2xl text-white"
      >
        OFERTA!
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex"
      >
    <h1 className="text-xl text-white">Desde $135.000 ARS</h1>
    <h1 className="text-slate-400">
      <del>$163.000ARS</del>
    </h1>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex gap-8 mt-5"
      >
        <Link
          href="/premium"
          className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 items-center justify-center flex gap-2"
        >
          <IoLink className="h-full text-lg" />
          Ver Ejemplo
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=542634782743&text=Bienvenido+a+mi+whatsapp+-+Ignacio+Gomez"
          className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2"
        >
          <IoLogoWhatsapp className="h-full text-lg" />
          Consultar por más
        </Link>
      </motion.div>
    </div>
  </motion.div>
</motion.div>
 )
}

export function PremiumCel(){
 return(
  <div className="w-full flex p-8 justify-center items-center  h-screen bg-nuevo-100">
  <img className="w-1/2 h-1/2" alt="hola" src={"/celpremium.png"} />
  <div className="w-3/5 h-full flex  justify-center flex-col p-8 gap-8">
  <h1 className="text-nuevo-500 text-2xl"> Portfolio Premium</h1>
      <ol className="flex flex-col gap-12" type="A">
      <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-nuevo-500 flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Portfolio Básico y Estándar +
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-nuevo-500 flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Multiple Page Application (MPA)
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-nuevo-500 flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Podés incluir blogs o tiendas
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          className="text-nuevo-500 flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Todas las secciones que quieras
        </motion.li>
        <motion.li
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-nuevo-500 flex items-center gap-2"
        >
          <FaLongArrowAltRight /> Diseño totalmente único y personalizable
        </motion.li>
      </ol>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-2xl text-nuevo-500"
      >
        OFERTA!
      </motion.h1>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex"
      >
    <h1 className="text-xl text-nuevo-500">Desde $135.000 ARS</h1>
    <h1 className="text-slate-400">
      <del>$163.000ARS</del>
    </h1>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex gap-8 mt-5"
      >
        <Link
          href="/premium"
          className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 items-center justify-center flex gap-2"
        >
          <IoLink className="h-full text-lg" />
          Ver Ejemplo
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=542634782743&text=Bienvenido+a+mi+whatsapp+-+Ignacio+Gomez"
          className="text-nuevo-100 border-2 bg-nuevo-300 border-slate-300 p-2 rounded-xl text-xs cursor-pointer transition hover:bg-white hover:text-black w-32 text-center flex gap-2"
        >
          <IoLogoWhatsapp className="h-full text-lg" />
          Consultar por más
        </Link>
      </motion.div>
  </div>
</div>
 )
}