import Link from "next/link"
import ContactCard from "../components/contact-card"
import { IoArrowBack } from "react-icons/io5"


export default function Contact() {

    return (
        <div className='bg-mycolors-periwinkle relative w-screen h-screen flex justify-center items-center'>
            <div className='w-[80%]'>
                <h1 className='flex justify-center text-[2rem] text-mycolors-black pb-8'>Contact</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <ContactCard type='email' title='Email' url='agvm94@gmail.com' />
                    <ContactCard type='github' title='Github' url='https://github.com/TheAdrianVera' />
                    <ContactCard type='linkedin' title='LinkedIn' url='https://www.linkedin.com/in/adrian-vera-6180a7b6/' />
                </div>
                <div className='flex justify-center mt-8'>
                    <Link href='/'>
                        <div className='relative group'>
                            <IoArrowBack className='text-3xl text-mycolors-black cursor-pointer transition duration-500 ease-in-out group-hover:text-white' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}