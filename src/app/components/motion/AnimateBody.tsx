"use client"

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'


const AnimateBody: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
            key={pathname} // Re-animates when the route changes
            initial={{ opacity: 0, y: 50 }} // Start below
            animate={{ opacity: 1, y: 0 }} // Move to normal position
            exit={{ opacity: 0, y: -50 }} // Slide up when navigating away
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
            className="min-h-screen"
            >
                {children}
            </motion.div>
      </AnimatePresence>
    )
}

export default AnimateBody