  'use client';
import { fadeInRight } from "@/lib/motion/variants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
const MotionBlock = dynamic(() => import("./motions/Block"));

const LifelongLearnerCard = () => {
  return (
    <MotionBlock variants={{
      ...fadeInRight, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }
    }} >
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Consciência em Código</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>
              {"A investigação"} é meu modo natural de viver. Busco entender a mente, os condicionamentos e o que significa estar realmente presente.
            </p>
            <p>
              No campo da tecnologia, aprendo rápido, {"ensino com clareza"} e me mantenho sempre aberto — sem certezas, apenas atenção e vontade de descobrir o que realmente importa.
            </p>
          </div>
        </CardContent>
      </Card>
    </MotionBlock>
  );
};
export default LifelongLearnerCard;
