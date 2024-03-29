import { Project } from "../types/project";

export default function useProjects(): Array<Project> {
  const projects = [
    {
      // id: 0,
      title: "Full-stack blog",
      description:
        "A full-stack responsive blog implementation with a Grafana dashboard, the stack used is NodeJS with express for the backend (typescript) with prisma as an ORM and Postgresql for the database, NextJS and tailwind are used for the frontend, the backend server provides metrics and traces, the metrics are pulled by prometheus and the traces are exported to Jaeger, both of which are observable in a grafana dashboard. Also, the whole app is containerized using Docker.",
      link: "https://github.com/hazyuun/fullstack-blog",
      tags: ["Full-stack", "Web Dev"],
      img: "blog.png",
    },
    {
      // id: 0,
      title: "GameBoy Emulator",
      description:
        "A GameBoy emulator written in C++ with OpenGL for rendering",
      link: "https://github.com/hazyuun/cozy-gb",
      tags: ["Low-level", "Emulation", "C++"],
      img: "gb.png",
    },
    {
      // id: 1,
      title: "Chrono: A Git time machine",
      description: `A tool that automatically commits in a temporary branch every time a costumizable event occurs, 
      so that rolling back to a specific point in time is almost always possible if anything goes wrong, then 
      the temporary commits can be squash merged into one once done. `,
      link: "https://github.com/hazyuun/Chrono",
      tags: ["Git", "Tools", "Golang"],
      img: "chrono.png",
    },
    {
      // id: 0,
      title: "Pomodoro timer",
      description:
        "A pomodoro timer app written in svelte with an elegant neumorphism look",
      link: "https://github.com/hazyuun/pomodoro-timer",
      tags: ["Front-end", "Web Dev"],
      img: "timer.png",
    },
    {
      // id: 2,
      title: "Hydrangea: x86 Operating System",
      description: `An x86 operating system written from scratch in C and assembly. it is my first take on making a kernel from scratch, it's not the best, but I think it's not bad for a first try. The kernel runs in the lower half, and has a weired and inefficient memory layout, it has some syscalls even though not enough to make a usable user shell.`,
      link: "https://github.com/hazyuun/Hydrangea",
      tags: ["Low-level", "C", "x86", "assembly"],
      img: "hydrangea.png",
    },
    {
      // id: 3,
      title: "Notes Android App",
      description: `A simple android app for taking notes written in Kotlin using an MVVM architecture, it's my first useful android app`,
      link: "https://github.com/hazyuun/Notes",
      tags: ["Android", "Kotlin"],
      img: "notes.png",
    },
    {
      // id: 4,
      title: "Interactive K-Means algorithm",
      description: `A web app to see kmeans clustering algorithm in action`,
      link: "https://github.com/hazyuun/kmeans",
      tags: ["ML", "Unsupervised-learning", "Web Dev"],
      img: "kmeans.gif",
    },
    {
      // id: 5,
      title: "Forsyth-Edwards Notation from a chess board image",
      description: `A C-SVC model that predicts the Forsyth-Edwards Chess Notation prediction from a chess board image`,
      link: "https://github.com/hazyuun/Chess-FEN",
      tags: ["ML", "supervised-learning"],
      img: "fen.png",
    },
    {
      // id: 6,
      title: "Generic Maybe monad implementation in C",
      description: `A header-only implementation of a generic Maybe monad in C`,
      link: "https://github.com/hazyuun/Maybe",
      tags: ["C", "Functional programming"],
      img: "maybe.png",
    },
    {
      // id: 7,
      title: "A stylized clock",
      description: `A ring-shaped clock`,
      link: "https://github.com/hazyuun/ring-clock",
      tags: ["Web Dev"],
      img: "clock.png",
    },
    {
      // id: 11,
      title: "Mathematical function plotter",
      description: `A header only C++ grapher with OpenGL for rendering`,
      link: "https://github.com/hazyuun/lemniscate",
      tags: ["Graphics", "C++"],
      img: "graph.png",
    },
    {
      // id: 12,
      title: "Conway's game of life in x86 assembly",
      description: `An implementation of Conway's game of life in x86 assembly for 16-bits DOS environment`,
      link: "https://github.com/hazyuun/life-asm",
      tags: ["x86", "assembly"],
      img: "life.png",
    },
    {
      // id: 13,
      title: "Raytracer",
      description: `A simple raytracer in C++`,
      link: "https://github.com/hazyuun/shiny",
      tags: ["Graphics", "C++"],
      img: "raytracer.png",
    },
    {
      // id: 14,
      title: "chip8 emulator",
      description: `An emulator for chip8 in C++, this is like a hello world for emulation`,
      link: "https://github.com/hazyuun/chip8-emu",
      tags: ["Low-Level", "Emulation", "C++"],
      img: "chip8.png",
    },
    {
      // id: 8,
      title: "AES-128 implementation",
      description: `AES-128 encryption implementation from scratch in C`,
      link: "https://github.com/hazyuun/AES-128",
      tags: ["Cryptography", "C"],
      img: undefined,
    },
    {
      // id: 9,
      title: "CSV library in C",
      description: `A C library to work with the CSV file format`,
      link: "https://github.com/hazyuun/rainy-csv",
      tags: ["CSV", "C"],
      img: undefined,
    },
    {
      // id: 10,
      title: "An HTTP server in C",
      description: `An HTTP server implemented from scrarch in C`,
      link: "https://github.com/hazyuun/douzo",
      tags: ["HTTP", "C"],
      img: undefined,
    },
  ];

  return projects;
}
