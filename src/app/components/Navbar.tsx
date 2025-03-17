"use client"

import Image from 'next/image'
import Link from 'next/link'
interface NavbarProps {
    color: string
}


const Navbar:React.FC<NavbarProps> = ({color}) => {


    return (
        <div className={`w-[100%] px-5 pt-10 flex justify-between items-center text-${color} text-lg`}>
            <Link
               href='/' 
            >
                <Image 
                    src='/logos/adriangvera-com.png' 
                    alt='Home' 
                    width={40} 
                    height={40}
                />
            </Link>
            <div className='flex'>
                <Link
                    href='/portfolio'
                >
                    <div className='hover:text-mycolors-orange font-semibold'>Portfolio</div>
                </Link>
                <Link
                    href='/contact'
                >
                    <div className='pl-5 hover:text-mycolors-orange font-semibold'>Contact</div>
                </Link>
            </div>
        </div>        
    )
}

export default Navbar