'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-red-500 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Trabalho Modo Zen</h2>
      {/* <p className="mb-4">
        I talk <span className="font-bold">tech</span> with devs, and{" "}
        <span className="font-bold italic">business</span> with stakeholders.
      </p> */}
      {/* <p className="mb-4">
        Ensino tecnologia com clareza, sem jargões. Atendo estudantes, advogados e concurseiros em busca de soluções reais. Atuo remotamente a partir do Brasil, com flexibilidade para atender diferentes ritmos e rotinas.
      </p> */}
      <p className="mb-4">
    <span className="italic">Tao Te Ching:</span>{" "}
  Be content with what you have; rejoice in the way things are. When you realize
  there is nothing lacking, the whole world belongs to you.
  </p>
               </MotionBlock>
  );
}
