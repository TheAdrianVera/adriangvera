"use client"

import React from "react"
import Particlez from "./components/Particlez"

const navigation = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] min-h-screen overflow-hidden">
        <Particlez
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Adrian Vera
        </h1>
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Chicago Based Software Engineer
          </h2>
        </div>

      </div>
    </div>
  )
}
