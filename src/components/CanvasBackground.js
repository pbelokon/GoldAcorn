"use client";
import { useEffect, useRef } from "react";
import { random, range } from "lodash";
import { setupCanvas, normalize } from "@/utils";

export default function CanvasBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const { ctx, canvasWidth, canvasHeight } = setupCanvas(canvas);

    const cellSize = 8;
    const NUM_OF_COLS = Math.ceil(canvasWidth / cellSize);
    const NUM_OF_ROWS = Math.ceil(canvasHeight / cellSize);
    const radius = cellSize / 2;

    function draw() {
      range(NUM_OF_ROWS).forEach((rowIndex) => {
        range(NUM_OF_COLS).forEach((colIndex) => {
          const x = colIndex * cellSize + radius;
          const y = rowIndex * cellSize + radius;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(210deg 15% ${random(6, 100)}%)`;
          ctx.fill();
        });
      });
    }

    draw();
  }, []);

  return <canvas ref={ref} className="canvas" />;
}
