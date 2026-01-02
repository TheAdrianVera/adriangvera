"use client"

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


const AnimateBody: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Ensure content is visible even if JavaScript fails to load
    // Only apply fade-in animation after component has mounted and JS is confirmed working
    if (!isMounted) {
        // Render without animation on first load to ensure content is visible
        return (
            <div className='absolute top-0 left-0 w-full h-full'>
                {children}
            </div>
        )
    }

    return (
        <div className='absolute top-0 left-0 w-full h-full'>
            <AnimatePresence initial={false}>
                <motion.div
                    key={pathname} // Re-animates when route changes
                    initial={{ opacity: 0 }} // Start the new page below
                    animate={{ opacity: 1 }} // New page slides into place
                    transition={{ duration: 0.95, ease: "easeOut" }} // Smooth transition
                    className='w-full h-full'
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default AnimateBody