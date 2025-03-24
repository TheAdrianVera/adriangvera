"use client"

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'


const AnimateBody: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const pathname = usePathname()

    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={pathname} // Re-animates when route changes
                initial={{ opacity: 0 }} // Start the new page below
                animate={{ opacity: 1 }} // New page slides into place
                transition={{ duration: 0.95, ease: "easeOut" }} // Smooth transition
                className='absolute top-0 left-0 w-full h-full'
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimateBody