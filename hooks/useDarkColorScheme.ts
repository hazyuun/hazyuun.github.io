import { useEffect, useState } from "react";

export function useDarkColorScheme(): [
  scheme: string,
  toggleColorScheme: () => void,
  setColorScheme: (s: string) => void
] {
  const [scheme, setScheme] = useState("light");

  useEffect(() => {
    const saved = "scheme" in localStorage;
    const checkLocal = localStorage.scheme === "dark";
    const checkMedia =
      false && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const enabled = checkLocal || (!saved && checkMedia);

    const newScheme = enabled ? "dark" : "light";
    if (newScheme !== scheme) setScheme(newScheme);
  }, [scheme]);

  const toggleColorScheme = () => {
    const s = scheme === "dark" ? "light" : "dark";
    setScheme(s);
    localStorage.scheme = s;
  };

  const setColorScheme = (s: string) => {
    if (s !== "dark" && s !== "light") return;
    setScheme(s);
    localStorage.scheme = s;
  };

  // console.log({scheme, enabled, saved, checkLocal, checkMedia})
  return [scheme, toggleColorScheme, setColorScheme];
}
