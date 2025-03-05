import { IoArrowBack } from "react-icons/io5"
import Carousel from "../components/carousel"
import Link from "next/link"

export default function Projects() {
    const logoUrls = [
        {
            name: 'Amazon Web Services (AWS)',
            url: '../../../logos/client_logos/awslogo.png'
        },
        {
            name: 'Aditude',
            url: '../../../logos/client_logos/aditudelogo.png'
        },
        {
            name: 'Advanced Healthcare Services',
            url: '../../../logos/client_logos/ahsllclogolong.png'
        },
        {
            name: 'Betfully',
            url: '../../../logos/client_logos/betfullylogo.png'
        },
        {
            name: 'F.H. Paschen Construction',
            url: '../../../logos/client_logos/fhplogo.png'
        },
        {
            name: 'PricewaterhouseCoopers (PwC)',
            url: '../../../logos/client_logos/pwclogo.svg'
        },
        {
            name: 'University of Illinois Urbana-Champaign',
            url: '../../../logos/client_logos/uiuclogo.png'
        }
    ]

    return (
        <div className='bg-mycolors-white relative w-screen h-screen flex justify-center items-center'>
            <div className='w-[80%]'>
                <h1 className='flex justify-center text-[2rem] text-mycolors-black'>Projects</h1>

                <Carousel logoUrls={logoUrls}/>

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