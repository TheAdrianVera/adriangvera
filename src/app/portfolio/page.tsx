import Carousel from "../components/Carousel"
import PageHeader from "../components/PageHeader"
import PageTitle from "../components/PageTitle"
import PortfolioSection from "../components/PortfolioSection"

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

    const myProjects = [
        {
            title: 'Subsistence Market Places Website',
            year: 2013,
            logo: 'uiuc',
            description: 'In collaboration with the University of Illinois Urbana Champaign Business deparment I helped create an interactive web application that allowed students to simulate living in a subsistence marketplace. Played over 100,000 times worldwide and apart of student learning curriculum.\n 2025 Redesign coming soon!',
            skills: ['PHP', 'HTML', 'CSS', 'Javascript', 'JQuery', 'GoDaddy Hosting', 'Google Analytics']
        }
    ]

    return (
    <div className='bg-mycolors-white w-screen min-h-screen flex-col'>
        <PageHeader color='black' />
        <div className='w-screen min-h-screen flex flex-col overflow-auto'>
            <PageTitle 
                title='Portfolio'
                subline='Learn more about my latest projects'
            />
            <PortfolioSection
                projects = {myProjects}
            />
            <Carousel logoUrls={logoUrls}/>
        </div>
    </div>
    )
}