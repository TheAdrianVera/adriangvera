import { IoArrowBack } from "react-icons/io5"
import Link from "next/link"

export default function Projects() {
    return (
        <div className='bg-mycolors-white relative w-screen h-screen flex justify-center items-center'>
            <div className='w-[80%]'>
                <h1 className='flex justify-center text-[2rem] text-mycolors-black'>Projects</h1>
                <div className='flex justify-center mt-8'>
                    <Link href='/'>
                        <div className='relative group'>
                            <IoArrowBack className='text-3xl text-mycolors-black cursor-pointer transition duration-500 ease-in-out group-hover:text-mycolors-orange' />
                        </div>
                    </Link>
                </div>
            </div>


            
        </div>
    )
}