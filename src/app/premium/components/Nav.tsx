"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Nav() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      className="flex justify-around items-center text-black w-screen h-24 bg-nuevo-100"
    >
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0}}   href="#" className="">Inicio</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.4}} href="#" className="">Proyectos</motion.a>
     <motion.a initial={{opacity:0 ,y:-20}} animate={{opacity:1,y:0}} whileHover={{borderBottomWidth:2, borderColor:'#000',scale:1.25}} transition={{duration:0.5,delay:0.8}} href="#" className="">Contacto</motion.a>
    </div>
  );
}