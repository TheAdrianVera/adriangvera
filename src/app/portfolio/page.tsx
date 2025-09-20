import PageTitle from "@components/PageTitle"
import PortfolioSection from "@components/PortfolioSection"
import Carousel from "@components/LogoMarquee"
import Footer from "@components/Footer"

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

    const myProjects = [
        {
            title: 'Subsistence Marketplaces Website',
            year: 2016,
            logo: 'uiuc',
            description: 'In collaboration with the University of Illinois Urbana Champaign Business Deparment I helped create an interactive web application that allowed students to simulate living in a subsistence marketplace. Played over 100,000 times worldwide and apart of student learning curriculum.\n 2025 Redesign coming soon!',
            skills: ['Javascript', 'PHP', 'HTML/CSS', 'JQuery', 'GoDaddy Hosting', 'Google Analytics'],
            design: ['Adobe Suite'],
            location: ['Champaign', 'IL']
        },
        {
            title: 'Advanced Healthcare Services Website',
            year: 2025,
            logo: 'ahsllc',
            description: 'Migrated their site from GoDaddy to Vercel, reducing costs. Rebuilt the site with TypeScript, React, and Tailwind, and implemented analytics tracking for better visitor insights. ',
            skills: ['React', 'Type Script', 'Vercel', 'AWS S3', 'HTML/CSS', 'Google Analytics', 'Meta Pixel Tracking', 'GoDaddy Migration'],
            special: ['Rehost', 'Redesign'],
            design: ['Figma'],
            location: ['Springfield', 'IL']
        },
        {
            title: 'F.H. Paschen Construction Website',
            year: 2020,
            logo: 'fhp',
            description: 'Migrated their WordPress site to GoDaddy, cutting hosting costs. Built custom plugins and a project database to enhance website interactivity. Designed and developed a new site section, translating Figma designs into responsive WordPress code with PHP, JavaScript, HTML, and CSS.',
            skills: ['Javascript', 'AWS S3', 'PHP','HTML/CSS', 'Wordpress Development', 'mySQL', 'GoDaddy Hosting', 'GoDaddy Migration'],
            special: ['Rehost'],
            design: ['Adobe Suite','Figma'],
            location: ['Chicago', 'IL']
        },
        {
            title: 'Stalworth Underground Website',
            year: 2021,
            logo: 'stalworth',
            description: 'Migrated their WordPress site from GoDaddy to Pressable. Developed a custom plugin with a UI to query their project database, generate reports, and improve data accessibility.',
            skills: ['Javascript', 'PHP', 'HTML/CSS', 'mySQL', 'Wordpress Development', 'ETL','Database Management', 'Pressable', 'GoDaddy Migration'],
            design: ['Adobe Suite'],
            special: ['Rehost'],
            location: ['Chicago', 'IL']
        },
        {
            title: 'IW Technologies Inventory Portal',
            year: 2024,
            logo: 'iw',
            description: 'Built a Next.js and TypeScript dashboard on Vercel with OAuth authentication and AWS Cognito for user permissions. Replaced slow NetSuite queries with an AWS-powered analytics pipeline, significantly improving performance.',
            skills: ['React', 'Type Script', 'NextJS', 'Vercel', 'AWS S3', 'AWS Glue', 'Amazon DynamoDB', 'AWS Cognito'],
            design: ['Figma'],
            special: ['Redesign', 'Data Enablement'],
            location: ['Elgin', 'IL']
        },
        {
            title: 'Linestar Website',
            year: 2022,
            logo: 'linestar',
            description: 'Led the front-end redesign of LineStar, a sports betting analytics platform with 1M+ users. Translated Figma designs into responsive AngularJS UI, refactored .NET code, and delivered the full redesign in five months.',
            skills: ['Javascript', 'Angular', 'ASP.NET MVC', 'C#/.NET','HTML/CSS'],
            special: ['Redesign'],
            design: ['Figma'],
            location: ['San Diego', 'CA']
        },
        {
            title: 'Aditude Cloud Wrapper',
            year: 2023,
            logo: 'aditude',
            description: 'Developed React components for ad refreshing and lazy loading, migrated code to TypeScript, and improved auction tracking. Implemented AWS (S3, CloudFront) to reduce caching costs and led daily release management.',
            skills: ['React','Type Script','NextJS', 'Vercel', 'AWS S3', 'AWS Cloudwatch', 'Github CI/CD', 'SQL'],
            location: ['New York', 'NY']
        }
    ]

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
                <Footer />
            </div>
        </div>
    )
}