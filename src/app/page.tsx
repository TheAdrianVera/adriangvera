"use client"

import React from "react"


export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] min-h-screen overflow-hidden">

        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Adrian Vera
        </h1>
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-lg md:text-xl text-zinc-500 ">
            Chicago Based Software Engineer
          </h2>
        </div>

      </div>
    </div>
  )
}
