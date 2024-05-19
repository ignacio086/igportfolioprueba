'use client'
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
export default function Primero(){
 return (
  <div className="text-white h-screen gap-20 flex flex-col items-center justify-center p-24">
  <div className="w-screen  lg:text-9xl flex flex-row gap-8 text-center text-white items-center justify-center">
    <motion.h1 initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:2}}>SÉ</motion.h1>
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.5, 1, 1, 1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      }}
      transition={{ duration: 15, repeat: Infinity }}
      className="relative bg-gradient-to-r from-red-900 via-orange-700 to-orange-500 inline-block text-transparent bg-clip-text"
    >
      PROFESIONAL
    </motion.h1>
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 0, 0, 0, 0.5, 1, 1, 1, 0.5, 0, 0, 0, 0, 0],
      }}
      transition={{ duration: 15, repeat: Infinity }}
      className="absolute bg-gradient-to-r from-blue-900 via-blue-700 to-purple-700 inline-block text-transparent bg-clip-text"
    >
      ÚNICO
    </motion.h1>
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1, 1, 1, 0.5],
      }}
      transition={{ duration: 15, repeat: Infinity }}
      className="absolute bg-gradient-to-r from-amber-600 via-yellow-500 to-pink-700 inline-block text-transparent bg-clip-text"
    >
      MEJOR
    </motion.h1>
  </div>
  <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:2}} className="text-5xl">OBTENÉ TU PORTFOLIO</motion.h1>
  <div className="items-center justify-center flex flex-col">
    <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:2}}>SCROLL PARA VER MÁS</motion.h1>
    <motion.span initial={{opacity:0,y:20}} animate={{opacity:[1,1,1,0.5,0],y:[0,20,0,20,0]}} transition={{duration:5,repeat:Infinity}}><FaAngleDown/></motion.span>
  </div>
</div>
 )
}