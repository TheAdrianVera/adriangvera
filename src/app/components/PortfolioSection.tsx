"use client"

import { useState } from 'react'
import ProjectModal from './ProjectModal'
import type { Project } from '@/data/project'
import { getProjectYearSortKey, formatProjectYear } from '@/data/project'

interface PortfioSectionProps {
    projects: Project[]
}

const PortfolioSection:React.FC<PortfioSectionProps> = ({projects}) => {
    const sortedProjects = [...projects].sort(
        (a, b) => getProjectYearSortKey(b) - getProjectYearSortKey(a)
    )
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <div className='text-black flex flex-col justify-center pb-20 px-5 md:px-20 lg:px-40 transition-all duration-300'>
            {sortedProjects.map((project, index)=>(
                <div 
                    key={index} 
                    className='bg-white shadow-lg rounded-lg p-6 md:p-8 mb-6 border border-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer'
                    onClick={() => openModal(project)}
                >
                    <div className='flex items-start gap-4 mb-3'>
                        <img 
                            src={`/logos/client_logos/square_logos/${project.logo}sqlogo.png`}
                            alt={`${project.title} logo`}
                            className='w-16 h-16 object-contain flex-shrink-0'
                        />
                        <div className='flex-1'>
                            <div className='text-xl md:text-2xl font-bold mb-1'>{project.title}</div>
                            <div className='text-md md:text-lg text-gray-600'>{project.location[0]}, {project.location[1]} – {formatProjectYear(project.year)}</div>
                        </div>
                    </div>
                    <div className='text-base md:text-lg text-gray-600'>{project.metaDescription}</div>
                    <div className='mt-4 flex flex-wrap'>

                        {/* Special Skills - Business Impact */}
                        {project.special?.map((skill, skillIndex)=>(
                            <span key={skillIndex} className='bg-purple-200 text-purple-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded'>
                                {skill}
                            </span>
                        ))}

                        {/* All Skills with Category-based Styling */}
                        {project.skills.map((skill, skillIndex) => {
                            const getSkillStyle = (skill: string) => {
                                const skillLower = skill.toLowerCase();
                                
                                // AWS Skills - Orange
                                if (skillLower.includes('aws') || skillLower.includes('s3') || skillLower.includes('cloudwatch') || 
                                    skillLower.includes('glue') || skillLower.includes('cognito') || skillLower.includes('cloudfront') || 
                                    skillLower.includes('dynamodb')) {
                                    return 'bg-orange-200 text-orange-800';
                                }
                                
                                // Core Tech Skills - Green
                                if (skillLower.includes('react') || skillLower.includes('typescript') || skillLower.includes('nextjs') || 
                                    skillLower.includes('next.js') || skillLower.includes('vercel') || skillLower.includes('seo') || 
                                    skillLower.includes('type') || skillLower.includes('javascript')) {
                                    return 'bg-green-200 text-green-800';
                                }
                                
                                // Default - Gray
                                return 'bg-gray-200 text-gray-800';
                            };
                            
                            return (
                                <span key={skillIndex} className={`text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded ${getSkillStyle(skill)}`}>
                                    {skill}
                                </span>
                            );
                        })}

                        {/* Design Skills */}
                        {project.design?.map((skill, skillIndex)=>(
                            <span key={skillIndex} className='bg-indigo-200 text-indigo-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded'>
                                {skill}
                           </span>
                        ))}

                    </div>
                </div>
            ))}
            
            {/* Modal */}
            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    )
}

export default PortfolioSection