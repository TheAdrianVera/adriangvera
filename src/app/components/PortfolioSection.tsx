interface Project {
    title: string
    year: number
    logo: string
    description: string
    skills: string[]
    design?: string[]
    special?: string[]
}

interface PortfioSectionProps {
    projects: Project[]
}

const PortfolioSection:React.FC<PortfioSectionProps> = ({projects}) => {
    const sortedProjects = projects.sort((a, b) => b.year - a.year)

    return (
        <div className='text-black flex flex-col justify-center pb-20 px-5'>
            {sortedProjects.map((project, index)=>(
                <div key={index} className='bg-white shadow-md rounded-lg p-6 mb-6 border border-black-300 transition-transform transform hover:scale-105 hover:shadow-lg'>
                    <div className='text-xl font-bold mb-2'>{project.title}</div>
                    <div className='text-gray-600'>{project.description}</div>
                    <div className='mt-4 flex flex-wrap'>

                        {/* Special Skills */}
                        {project.special?.map((skill, skillIndex)=>(
                            <span key={skillIndex} className='bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded'>
                                {skill}
                            </span>
                        ))}

                        {/* Skills */}
                        {project.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className='bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded'>
                                {skill}
                            </span>
                        ))}

                        {/* Design Skills */}
                        {project.design?.map((skill, skillIndex)=>(
                            <span key={skillIndex} className='bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded'>
                                {skill}
                            </span>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default PortfolioSection