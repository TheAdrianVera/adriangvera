interface Project {
    title: string
    year: number
    logo: string
    description: string
    skills: string[]
}

interface PortfioSectionProps {
    projects: Project[]
}

const PortfolioSection:React.FC<PortfioSectionProps> = ({projects}) => {
    return (
        <div>PROYECTS</div>
    )
}

export default PortfolioSection