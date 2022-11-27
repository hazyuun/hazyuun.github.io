import Head from "next/head";
import { DiGithubAlt } from "react-icons/di";
import { HiArrowRight, HiMail, HiMoon, HiSun } from "react-icons/hi";
import { FaEnvelope, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import ProjectList from "../components/project-list/ProjectList";
import useProjects from "../hooks/useProjects";
import useInformation from "../hooks/useInformation";
import { useDarkColorScheme } from "../hooks/useDarkColorScheme";

export default function Home() {
  const projects = useProjects();
  const { linkedin, email } = useInformation();
  const [scheme, toggleScheme, _] = useDarkColorScheme();

  return (
    <div>
      <Head>
        <title>Portfolio | Youness Y.</title>
        <meta
          name="description"
          content="Welcome to my portfolio, I am an artificial intelligence engineer and a developper
              passionate about computer science, I am interested in various
              topics like web dev and low-level programming."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={scheme}>
        <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white dark:bg-slate-700 dark:text-white flex flex-row justify-between items-center shadow-md p-4 text-lg md:justify-around">
          <a href="#">Youness Y.</a>
          <ul className="flex flex-row justify-between items-center gap-3">
            <li>
              {scheme === "light" ? (
                <HiMoon
                  onClick={(e) => {
                    toggleScheme();
                  }}
                  className="fill-primary dark:fill-white cursor-pointer"
                  size="1.5em"
                />
              ) : (
                <HiSun
                  onClick={(e) => {
                    toggleScheme();
                  }}
                  className="fill-primary dark:fill-white cursor-pointer"
                  size="1.5em"
                />
              )}
            </li>
            <li>
              <a href="https://github.com/hazyuun">
                <DiGithubAlt
                  className="fill-primary dark:fill-white"
                  size="2em"
                />
              </a>
            </li>
            <li>
              <a
                href={email}
                className="flex justify-around items-center gap-2 text-white bg-primary p-2 pl-4 pr-4 rounded-md dark:bg-[#fff2]"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-20 dark:bg-slate-800 dark:bg-none bg-gradient-to-br from-grad-1 to-grad-2 h-48 flex flex-col items-center justify-center md:h-96">
          <h1 className="text-white text-2xl">Hi, I am Youness</h1>
          <h2 className="text-white text-lg">Welcome to my portfolio</h2>
          <hr className="invisible mb-4" />
          <p className="text-white text-md flex justify-around items-center gap-4">
            <a
              href={email}
              className="flex justify-around items-center gap-2 bg-[#fff2] p-2 pl-4 pr-4 rounded-md"
            >
              <HiMail fill="white" />
              Contact me
            </a>
            <a
              href="#projects"
              className="flex justify-around items-center gap-2 bg-[#fff2] p-2 pl-4 pr-4 rounded-md"
            >
              View my work <HiArrowRight fill="white" />
            </a>
          </p>
        </section>

        <section className="dark:bg-gradient-to-b dark:from-slate-700 dark:to-slate-800 pt-16 pb-16 flex flex-col items-center justify-center md:flex-row md:gap-32">
          <img
            src="programmer.svg"
            alt="Programmer illustration"
            className="dark:filter dark:hue-rotate-[-30deg] mb-4 w-[200px] md:w-[300px]"
          />
          <div className="w-2/3 md:w-1/3">
            <p className="text-slate-700 dark:text-white text-2xl mb-4 text-center md:text-left">
              About me
            </p>
            <p className="text-slate-700 dark:text-white text-md text-center md:text-left md:text-lg">
              I am an artificial intelligence engineer and a developper
              passionate about computer science, I am interested in various
              topics like web dev and low-level programming. I started learning
              programming very early as a self-thaught and I am still learning
              until now. Please scroll down to see some of my projects.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="flex flex-col items-center pb-16 pt-20 dark:bg-slate-800"
        >
          <div className="flex w-full items-center mb-6">
            <hr className="h-1 bg-primary dark:bg-white flex-grow opacity-50" />
            <h1 className="text-2xl mr-4 ml-4 dark:text-white">
              Selected projects
            </h1>
            <hr className="h-1 bg-primary dark:bg-white flex-grow opacity-50" />
          </div>

          <ProjectList projects={projects} />
        </section>
      </main>

      <footer className="bg-slate-800 h-48 text-white flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl text-white">Youness Y.</h1>
        <p className="text-md text-white">
          Thank you for visiting my portfolio website
        </p>

        <div className="flex gap-6 text-white">
          <a href={email}>
            <FaEnvelope fill="white" size={20} />
          </a>
          <a href={linkedin}>
            <FaLinkedin fill="white" size={20} />
          </a>
          <a href="https://github.com/hazyuun">
            <FaGithubAlt fill="white" size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
