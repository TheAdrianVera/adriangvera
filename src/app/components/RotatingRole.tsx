"use client"

import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"

const roles = [
  "Software Engineer",
  "Front-End Engineer",
  "Web Developer"
]

export default function RotatingRole() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative align-baseline overflow-visible">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

