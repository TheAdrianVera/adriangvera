import { IoArrowBack } from "react-icons/io5"
import Link from "next/link"

export default function Projects() {


    return (
        <div className='bg-mycolors-white relative w-screen h-screen flex justify-center items-center'>
            <div className='w-[80%]'>
                <h1 className='flex justify-center text-[2rem] text-mycolors-black'>Projects</h1>
                <div className='w-full overflow-hidden'>
                    <div id='carousel' className='flex w-full'>
                        <img src='../../../logos/client_logos/aditudelogo.png' alt='Company 1' className='w-1/6 h-auto' />
                        <img src='../../../logos/client_logos/ahsllclogolong.png' alt='Company 2' className='w-1/6 h-auto' />
                        <img src='../../../logos/client_logos/fhplogo.png' alt='Company 3' className='w-1/6 h-auto' />
                        <img src='../../../logos/client_logos/awslogo.png' alt='Company 4' className='w-1/6 h-auto' />
                        <img src='../../../logos/client_logos/betfullylogo.png' alt='Company 5' className='w-1/6 h-auto' />
                        <img src='../../../logos/client_logos/pwclogo.svg' alt='Company 1' className='w-1/6 h-auto' />
                        <img src='../../../logos/client_logos/linestarlogolong.png' alt='Company 2' className='w-1/6 h-auto' />
                    </div>
                </div>
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