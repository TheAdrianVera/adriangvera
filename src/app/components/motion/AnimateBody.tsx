"use client"

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'


const AnimateBody: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname} // Re-animates when route changes
                initial={{ y: "100%" }} // Start the new page below
                animate={{ y: "0%" }} // New page slides into place
                exit={{ y: "0%" }} // Keep the old page in place
                transition={{ duration: 0.75, ease: "easeOut" }} // Smooth transition
                className="absolute top-0 left-0 w-full h-full"
            >
                {children}
            </motion.div>
      </AnimatePresence>
    )
}

export default AnimateBody