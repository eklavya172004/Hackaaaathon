"use client";

import React, { useEffect, useRef } from "react";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerate";

const useGridEffect = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const createBlocks = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const blockSize = 50; // matches your CSS
      const numCols = Math.ceil(screenWidth / blockSize);
      const numRows = Math.ceil(screenHeight / blockSize);

      grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

      for (let i = 0; i < numCols * numRows; i++) {
        const block = document.createElement("div");
        block.addEventListener("mouseover", () => highlightBlockAndNeighbors(block));
        grid.appendChild(block);
      }
    };

    const highlightBlockAndNeighbors = (block: HTMLDivElement) => {
      const blocks = Array.from(grid.children) as HTMLDivElement[];
      const index = blocks.indexOf(block);
      const numCols = Math.floor(Math.sqrt(blocks.length));

      const neighbors = [
        blocks[index - 1], // left
        blocks[index + 1], // right
        blocks[index - numCols], // top
        blocks[index + numCols], // bottom
        blocks[index - numCols - 1], // top-left
        blocks[index - numCols + 1], // top-right
        blocks[index + numCols - 1], // bottom-left
        blocks[index + numCols + 1], // bottom-right
      ].filter(Boolean);

      [block, ...neighbors].forEach(el => {
        if (el) {
          el.classList.add("highlight");
          setTimeout(() => el.classList.remove("highlight"), 300);
        }
      });
    };

    createBlocks();

    const handleResize = () => {
      grid.innerHTML = '';
      createBlocks();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      grid.innerHTML = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return gridRef;
};

const Hero: React.FC = () => {
  const gridRef = useGridEffect();

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <div ref={gridRef} className="grid-background absolute top-0 left-0 w-full h-full"></div>
      
      <div className="max-w-[89vw] lg:max-w-[60vw] md:max-w-2xl flex flex-col items-center justify-center z-10">
        <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96 mt-16">
          Get your things done with our College Finder chatbot
        </h1>
        <TextGenerateEffect
          className="text-center my-3 lg:text-3xl"
          words="Chatbot to streamline admissions enquiries, providing instant assistance and reducing the workload on staff."
        />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-sm">
          Education made easy, <b>COLLEGE SAHAYAK</b> ke saath!!
        </p>
        <a href="#">
          <MagicButton title="Ask Sahayak" />
        </a>
      </div>
    </div>
  );
};

export default Hero;