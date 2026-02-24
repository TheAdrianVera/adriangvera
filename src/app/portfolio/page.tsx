import PageTitle from "@components/PageTitle"
import PortfolioSection from "@components/PortfolioSection"
import Carousel from "@components/LogoMarquee"
import Footer from "@components/Footer"
import { getAllProjects } from "@/data/project"

export default function Projects() {
    const logoUrls = [
        {
            name: 'Aditude',
            url: '/logos/client_logos/aditudefulllogo.png',
            website: 'https://www.aditude.com/'
        },
        {
            name: 'Advanced Healthcare Services',
            url: '/logos/client_logos/ahsllclogolong.png',
            website: 'https://www.ahsllc.org/'
        },
        {
            name: 'Amazon Web Services (AWS)',
            url: '/logos/client_logos/awslogo.png',
            website: 'https://aws.amazon.com/'
        },
        {
            name: 'Betfully',
            url: '/logos/client_logos/betfullyfulllogo.png',
            website: 'https://betfully.com/'
        },
        {
            name: 'Erika\'s Lighthouse',
            url: '/logos/client_logos/elhfulllogo.png',
            website: 'https://erikaslighthouse.org/'
        },
        {
            name: 'F.H. Paschen Construction',
            url: '/logos/client_logos/fhplogo.png',
            website: 'https://www.fhpaschen.com/'
        },
        {
            name: 'IW Technologies',
            url: '/logos/client_logos/iwfulllogo.png',
            website: 'https://www.weareiw.com/',
        },
        {
            name: 'PricewaterhouseCoopers (PwC)',
            url: '/logos/client_logos/pwclogo.svg',
            website: 'https://www.pwc.com/gx/en/services/consulting/technology.html'
        },
        {
            name: 'Stalworth Underground',
            url:'/logos/client_logos/stalworthlogo.png',
            website: 'https://stalworthunderground.com/'
        },
        {
            name: 'University of Illinois Urbana-Champaign',
            url: '/logos/client_logos/uiucfulllogo.png',
            website: 'https://giesbusiness.illinois.edu/experience/academies-centers/subsistence-marketplaces-initiative'
        },
    ]

    const myProjects = getAllProjects()

    return (
        <div>
            <div className='bg-mycolors-white w-[100%] h-[100%] min-h-screen flex flex-col'>
                <div className='w-screen min-h-screen flex flex-col overflow-auto pt-20'>
                    <PageTitle 
                        title='Portfolio'
                        subline='Learn more about my latest projects'
                    />
                    <PortfolioSection
                        projects = {myProjects}
                    />
                    <Carousel logoUrls={logoUrls}/>
                </div>
                <Footer 
                    bgColor='white'
                    txtColor='black'
                    lnkColor='mycolors-orange'
                />
            </div>
        </div>
    )
}