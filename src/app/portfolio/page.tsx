import PageTitle from "@components/PageTitle"
import PortfolioSection from "@components/PortfolioSection"
import Carousel from "@components/LogoMarquee"
import Footer from "@components/Footer"
import { getAllProjects } from "@/data/project"
import { getAllLogos } from "@/data/logos"

export default function Projects() {
    const logoUrls = getAllLogos()

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