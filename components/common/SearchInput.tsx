import React from "react";
import { HiSearch } from "react-icons/hi";

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="flex gap-4 rounded-md border-solid border-slate-200 dark:border-slate-700 border-2 shadow-sm p-2 pr-4 pl-4 items-center">
      <HiSearch />
      <input
        className="dark:text-white dark:bg-transparent flex-grow outline-none"
        {...props}
      />
    </div>
  );
}
