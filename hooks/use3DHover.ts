import React from "react";

export default function use3DHover(
  cardRef: React.RefObject<HTMLDivElement>,
  intensity: number
): [(e: React.MouseEvent) => void, (e: React.MouseEvent) => void] {
  const onmousemove = (e: React.MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;

    const rect = cardRef.current?.getBoundingClientRect();
    if (rect == undefined) return;

    let center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    let angleY = (2 * (x - center.x)) / rect.width;
    let angleX = (-2 * (y - center.y)) / rect.height;

    angleY *= intensity;
    angleX *= intensity;

    // console.log({angleX, angleY})

    cardRef.current!.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const onmouseleave = (e: React.MouseEvent) => {
    cardRef.current!.style.transform = `rotateX(0rad) rotateY(0rad)`;
  };

  return [onmousemove, onmouseleave];
}
