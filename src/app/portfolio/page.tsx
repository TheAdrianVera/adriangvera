import { IoArrowBack } from "react-icons/io5"
import Carousel from "../components/Carousel"
import PageHeader from "../components/PageHeader"
import PageTitle from "../components/PageTitle"
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
    <div className='bg-mycolors-white w-screen h-[100%] flex-col'>
        <PageHeader color='black' />
        <div className='w-screen h-screen flex flex-col'>
            <PageTitle 
                title='Portfolio'
                subline='Learn more about my latest projects'
            />
            <div className=''>
                <Carousel logoUrls={logoUrls}/>
            </div>
        </div>
    </div>
    )
}