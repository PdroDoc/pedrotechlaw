interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "Interaja com 10 mese de corrida plotados no mapa. Dados de GPS como você nunca viu!",
    description: `Acesse meu App onde ploto 10 meses de dados brutos de GPS em um único mapa. Pydeck + Streamlit`,
    imgSrc: "/imgs/geolocation.png",
    tags: ["python", "streamlit", "Data Science","Data View","geolocation","Garmin"],
    href: "https://runmapy.streamlit.app",
  },
  {
    title: "Meu App: Sleep Data View ",
    description: `Meu app para vizualização de dados interativo de sono do Garmin feito em Python + Streamlit. Have Fun!`,
    imgSrc: "/imgs/miausleep.png",
    tags: ["python", "streamlit", "Data Science","Data View"],
    href: "https://sleepdataview.streamlit.app",
  },
  {
    title: "Runner Tracker",
    description: `Meu planner e tracker de corrida gerado por python e alimentado por cvs e json`,
    imgSrc: "/imgs/run.webp",
    tags: ["python", "Next.js", "JavaScript"],
    href: "https://runnerdashboard.vercel.app/",
  },
  {
    title: "Daily Tao",
    description: `Simples site pessoal atualizável diretamente do Obsidian usando Python.`,
    imgSrc: "/imgs/meandmiau.jpeg",
    tags: ["python", "markdown","json"],
    href: "https://taote.vercel.app/",
  },
  {
    title: "Informativos do STJ por IA",
    description: `Site autogerado por python e IA de informativos do STJ - 100% auto-gerado.`,
    imgSrc: "/imgs/stj.webp",
    tags: ["Python", "Next.js", "React.js","OpenIA","javascript"],
    href: "https://stj-ia.vercel.app",
  },
  {
    title: "Consulta Tabela FIP - Exemplo Implementação", 
    description: `Exemplo de implementação de clone de API gerdo por IA em Python`,
    imgSrc: "/imgs/car.avif",
    tags: ["Next.js", "React.js", "TailwindCSS","API"],
    href: "https://lazaro-motors.vercel.app/",
  },
  {
    title: "Meu site de corrida gerado por Python - 100% automático",
    description: `Uso de Python para gerar gráfico e atualizar o HTML a partir de API do garmin - 100% automático`,
    imgSrc:"/imgs/py.webp",
    tags: ["python", "Next.js", "React.js","panda","numpy"],
    href: "https://running-xi.vercel.app/",
  },
  {
    title: "Meu hub de links gerado por IA em Python", 
    description: `Meu hub de links,gerado por Python e IA`,
    imgSrc: "/imgs/hub.png",
    tags: ["Next.js", "React.js", "ExportJson"],
    href: "https://pdrohub.vercel.app/",
  },
];

export default projectsData;
