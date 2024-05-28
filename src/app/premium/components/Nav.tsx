"use client";
import { motion} from "framer-motion";
import { FaArrowCircleLeft } from "react-icons/fa";


export default function Nav() {


  return (
    <div
      className="flex justify-around items-center text-black w-screen h-24 bg-nuevo-100"
    >
    <a   href="/" className="text-xs border-2 rounded-xl border-nuevo-500 flex absolute p-2 items-center justify-center left-2 top-1 hover:bg-nuevo-500 hover:text-nuevo-100 hover:border-nuevo-100"><FaArrowCircleLeft/> Volver</a>
     <motion.a  initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0}}   href="#iniciopremium" className="">Inicio</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.4}} href="#proyectospremium" className="">Proyectos</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.4}} href="#aboutpremium" className="">Sobre Mi</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.8}} href="contactopremium" className="">Contacto</motion.a>
    </div>
  );
}