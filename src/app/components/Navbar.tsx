"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Navbar = () => {

    const path = usePathname()

    let textColor = 'text-white'
    let logoUrl = 'adriangvera-com-white.png'
    let hoverColor = 'text-mycolors-orange'

    switch (path) {
        case '/portfolio':
            textColor = 'text-black'
            logoUrl = 'adriangvera-com.png'
            break
        case '/contact':
            textColor = 'text-black'
            logoUrl = 'adriangvera-com.png'
            hoverColor = 'text-white'
            break
        default:
            textColor = 'text-white'
            break
    }

    return (
        <div className={`relative z-20 w-[100%] px-5 md:px-20 lg:px-40 transition-all duration-300 py-10 flex justify-between items-center ${textColor} text-lg`}>
            <Link href='/'>
                <Image 
                    src={`/logos/${logoUrl}`}
                    alt='Home' 
                    width={40} 
                    height={40}
                />
            </Link>
            <div className='flex'>
                <Link href='/portfolio'>
                    <div className={`hover:${hoverColor} font-semibold`}>Portfolio</div>
                </Link>
                <Link href='/contact'>
                    <div className={`pl-5 hover:${hoverColor} font-semibold`}>Contact</div>
                </Link>
            </div>
        </div>        
    )
}

export default Navbar