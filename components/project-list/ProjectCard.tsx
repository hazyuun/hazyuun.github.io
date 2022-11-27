import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import use3DHover from "../../hooks/use3DHover";
import { Project } from "../../types/project";

interface ProjectCardProps extends Project {}

export default function ProjectCard(props: ProjectCardProps) {
  const cardRef = useRef<HTMLInputElement>(null);
  const [onmousemove, onmouseleave] = use3DHover(cardRef, 5);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col transition-all duration-[25] ease-out bg-white text-slate-800 dark:bg-slate-700 shadow-lg rounded-xl w-80 md:w-96"
      onMouseMove={onmousemove}
      onMouseLeave={onmouseleave}
    >
      <div className=" relative w-full h-48 object-cover rounded-t-xl">
        <img
          className="absolute w-full h-48 object-cover rounded-t-xl filter sepia-[1] brightness-[.60] group-hover:filter-none transition-all 75ms ease-out "
          src={
            props.img ||
            "https://images.unsplash.com/photo-1665925246028-1175f2e51757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          alt=""
        />
        <div className="tint absolute w-full h-48 object-cover rounded-t-xl backdrop-hue-rotate-[200deg] group-hover:backdrop-hue-rotate-0"></div>
      </div>

      <div className="flex-grow flex flex-col gap-3 p-8 pt-6 pb-6">
        <div className="text-slate-800 dark:text-white text-2xl">
          {props.title}
        </div>
        <div className="flex gap-2 flex-wrap">
          {props.tags.map((tag, i) => {
            return (
              <span
                key={i}
                className="text-white rounded-xl p-1 pr-4 pl-4 bg-primary dark:text-slate-200 dark:bg-slate-600  text-xs"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <p className="text-slate-800 dark:text-white flex-grow text-md">
          {props.description}
        </p>
        <a
          className="text-slate-800 dark:bg-slate-500 dark:text-white self-end flex justify-around items-center gap-2 bg-[#fff2] p-2 pl-4 pr-4 rounded-md bg-slate-100"
          href={props.link}
        >
          Learn more <HiArrowRight className="dark:fill-white" />
        </a>
      </div>
    </div>
  );
}
