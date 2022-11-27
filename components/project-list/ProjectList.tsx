import { useState } from "react";
import { Project } from "../../types/project";
import SearchInput from "../common/SearchInput";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Array<Project>;
}

export default function ProjectList(props: ProjectListProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <SearchInput
        placeholder="Search.."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        style={{ perspective: 10000 }}
      >
        {props.projects
          .filter((e) => {
            const inTitle = e.title
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
            const inDescription = e.description
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
            return inTitle || inDescription;
          })
          .map((e, i) => {
            return <ProjectCard key={i} {...e} />;
          })}
      </div>
    </div>
  );
}
