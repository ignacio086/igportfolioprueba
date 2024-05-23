"use client";
import { motion } from "framer-motion";


export default function Inter() {

  return (
    <div
      className="flex justify-end w-screen h-80 lg:h-screen p-8 bg-gradient-to-tr from-nuevo-300 from-50% to-nuevo-100 to-50%"
    >
     <motion.p initial={{opacity:0,y:-200}} transition={{duration:1}} whileInView={{opacity:1,y:-300}} className="text-black text-xs lg:text-xl text-center w-1/2 lg:w-1/3 h-full"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, eius nostrum? Atque perferendis incidunt, ullam suscipit veritatis rem iure quis voluptas ipsum commodi maxime! Quia nostrum voluptatem sequi aut consequuntur!</motion.p>
    </div>
  );
}