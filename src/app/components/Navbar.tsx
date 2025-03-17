"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Navbar = () => {
    const path = usePathname()

    let textColor = 'text-white'
    let bgColor = 'bg-mycolors-darkblack'
    let bgOpacity = 'bg-opacity-100'
    let logoUrl = 'adriangvera-com-white.png'

    switch (path) {
        case '/portfolio':
            bgColor = 'bg-white'
            textColor = 'text-black'
            bgOpacity = 'bg-opacity-0'
            logoUrl = 'adriangvera-com.png'
            break
        case '/contact':
            bgColor = 'bg-mycolors-periwinkle'
            textColor = 'text-black'
            bgOpacity = 'bg-opacity-0'
            logoUrl = 'adriangvera-com.png'
            break
        default:
            bgColor = 'bg-mycolors-darkblack'
            break
    }

    return (
        <div className={`w-[100%] px-5 pt-10 flex justify-between items-center ${bgColor} ${textColor} text-lg`}>
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
                    <div className='hover:text-mycolors-orange font-semibold'>Portfolio</div>
                </Link>
                <Link href='/contact'>
                    <div className='pl-5 hover:text-mycolors-orange font-semibold'>Contact</div>
                </Link>
            </div>
        </div>        
    )
}

export default Navbar