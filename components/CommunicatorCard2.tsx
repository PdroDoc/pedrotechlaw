'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard2() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-red-500 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Conheça Meus Apps</h2>
 <a
    href="https://runmapy.streamlit.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-4 border border-gray-300 rounded-xl p-4 hover:shadow-lg transition"
  >
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9kTIflUz5LvYcPSaRYY74AHaHa%26r%3D0%26pid%3DApi&f=1&ipt=c724042734f2fcc18768a262e0483a24b74accaa8c046f117a53903855d921da&ipo=images" // ou qualquer imagem que você queira
      alt="Abrir App do Miau"
      className="w-16 h-16 rounded-md"
    />
    <span className="text-xl font-semibold">interaja com 10 meses de dados de GPS corrida!</span>
  </a>
  
  <a
    href="https://sleepdataview.streamlit.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-4 border border-gray-300 rounded-xl p-4 hover:shadow-lg transition"
  >
    <img
      src="https://avatars.githubusercontent.com/u/205710427?v=4" // ou qualquer imagem que você queira
      alt="Abrir App do Miau"
      className="w-16 h-16 rounded-md"
    />
    <span className="text-xl font-semibold">Acessar meu Sleep App</span>
  </a>
               </MotionBlock>
  );
}
