'use client'
import {motion, useTransform, useScroll} from "framer-motion";
import { useRef } from "react";
import Scroll from "./components/Scroll";

export default function Home() {
return (
    <main className=" ">
      <div className="w-full h-screen bg-blue-500">

      </div>
        <Scroll/>
      <div className="w-full h-96 bg-amber-500"></div>
    </main>
  );
}
