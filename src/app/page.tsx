"use client";
import Scroll from "./components/Scroll";
import NoScroll from "./components/NoScroll";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import Primero from "./components/First";
export default function Home() {
  let pantalla;
  if (typeof screen !== "undefined") {
    pantalla = screen;
  }
  return (
    <main className="bg-gray-900 ">
<Primero/>
      {pantalla !== undefined && pantalla.width > 1000 ? (
        <Scroll />
      ) : (
        <NoScroll />
      )}
      <div className="w-full h-96 bg-amber-500"></div>
    </main>
  );
}
