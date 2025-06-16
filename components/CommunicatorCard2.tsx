'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard2() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-red-500 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Meu App de Análise Dados</h2>

  <p className="mb-4">
    <span className="italic">DataScience:</span> Utilizando programação e DataScience para análise de métricas de sono. </p>


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
