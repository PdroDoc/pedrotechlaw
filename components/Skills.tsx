import { Badge } from "@/components/ui/badge";
import { Carter_One } from "next/font/google";

const skills = [
  {category: "Atuação",items:["Advogado","Python coding","Streamlit Dev","Automação legal","Data Science"]},
  {category: "Frontend",items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],},
  { category: "Backend", items: ["PHP","Node.js", "Nest.js"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Serverless"] },
  { category: "LLMs", items: ["Large Language Models", "Prompt Engeneering", "Data Procesing / APIs"] },
  { category: "Advogado", items: ["Empresarial","Tecnológico","Processual","Tributário"]}
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="font-semibold mb-2">{skill.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
