"use client"

import { useEffect } from 'react'

interface Project {
    title: string
    year: number
    logo: string
    description: string
    skills: string[]
    design?: string[]
    special?: string[]
    url?: string[]
}

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEsc)
            document.body.style.overflow = 'hidden' // Prevent background scrolling
        }
        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen || !project) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                        <img 
                            src={`/logos/client_logos/square_logos/${project.logo}sqlogo.png`}
                            alt={`${project.title} logo`}
                            className="w-12 h-12 object-contain"
                        />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {project.title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                    >
                        ×
                    </button>
                </div>
                
                {/* Content */}
                <div className="p-6">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Project Overview</h3>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                    
                    {/* Skills */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Technologies & Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Special Skills */}
                    {project.special && project.special.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Achievements</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.special.map((skill, index) => (
                                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Design Skills */}
                    {project.design && project.design.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Design Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.design.map((skill, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Footer with URL Button */}
                {project.url && project.url.length > 0 && (
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                        <a
                            href={project.url[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-mycolors-orange transition-colors duration-200 shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>{project.url[1]}</span>
                            <svg 
                                className="ml-2 w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectModal
