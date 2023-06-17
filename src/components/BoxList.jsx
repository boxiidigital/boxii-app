import React from "react";
import { useEffect } from "react";
import { useBoxes } from "../context/BoxContext";

export function BoxList() {
  const { boxes, getBoxes } = useBoxes();
  console.log(boxes);
  useEffect(() => {
    getBoxes();
  }, []);

  console.log(boxes);

  return (
    <div>
      {boxes.map((box) => (
        <div key={box.id}>
          <h1>{box.name}</h1>
        </div>
      ))}
    </div>
  );
}
