import Link from 'next/link'
import { getProjectBySlug, getAllProjectSlugs, formatProjectYear } from '@/data/project'
import { notFound } from 'next/navigation'
import Footer from '@components/Footer'
import { ProjectCaseStudy } from '@components/ProjectCaseStudy'

export function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }))
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)
    if (!project) notFound()

    const desc = project.description

    return (
        <div>
            <div className="bg-mycolors-white w-full min-h-screen flex flex-col">
                <div className="w-screen min-h-screen flex flex-col overflow-auto pt-40">
                    <div className="px-5 md:px-20 lg:px-40 pb-16">
                        {/* Hero */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-12">
                            <img
                                src={`/logos/client_logos/square_logos/${project.logo}sqlogo.png`}
                                alt=""
                                className="w-20 h-20 object-contain flex-shrink-0 rounded-lg border border-gray-200"
                            />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-black">
                                    {project.description?.fullTitle}
                                </h1>
                                <p className="text-lg text-gray-600 mt-1">
                                    {project.location[0]}, {project.location[1]} – {formatProjectYear(project.year)}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.skills.slice(0, 6).map((skill, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-0.5 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {project.skills.length > 6 && (
                                        <span className="text-gray-500 text-sm">+{project.skills.length - 6} more</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {desc ? (
                            <ProjectCaseStudy project={project} desc={desc} />
                        ) : (
                            <div className="max-w-3xl">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {project.metaDescription}
                                </p>
                                <p className="text-sm text-gray-500">
                                    A full case study is not yet available for this project.
                                </p>
                            </div>
                        )}

                        {project.url && project.url.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <a
                                    href={project.url[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-mycolors-orange transition-colors duration-200"
                                >
                                    {project.url[1]}
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <Footer bgColor="white" txtColor="black" lnkColor="mycolors-orange" />
            </div>
        </div>
    )
}
