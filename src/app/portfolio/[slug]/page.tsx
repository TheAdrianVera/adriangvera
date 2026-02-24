import Link from 'next/link'
import { getProjectBySlug, getAllProjectSlugs, formatProjectYear } from '@/data/project'
import { notFound } from 'next/navigation'
import PageTitle from '@components/PageTitle'
import Footer from '@components/Footer'

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
                    <div className="px-5 md:px-20 lg:px-40 pb-10">
                        <div className="flex items-start gap-4 mb-6">
                            <img
                                src={`/logos/client_logos/square_logos/${project.logo}sqlogo.png`}
                                alt={`${project.title} logo`}
                                className="w-16 h-16 object-contain flex-shrink-0"
                            />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-black">
                                    {project.title}
                                </h1>
                                <p className="text-lg text-gray-600 mt-1">
                                    {project.location[0]}, {project.location[1]} –{' '}
                                    {formatProjectYear(project.year)}
                                </p>
                            </div>
                        </div>

                        {desc ? (
                            <div className="text-black space-y-10 max-w-3xl">
                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {desc.overview}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        Summary
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {desc.summary}
                                    </p>
                                </section>

                                {desc.challenge && desc.challenge.length > 0 && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Challenge
                                        </h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                                            {desc.challenge.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {desc.role && desc.role.length > 0 && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Role
                                        </h2>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {desc.role.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {desc.evolution && desc.evolution.length > 0 && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                            Evolution
                                        </h2>
                                        <div className="space-y-6">
                                            {desc.evolution.map((phase) => (
                                                <div
                                                    key={phase.phaseNumber}
                                                    className="border-l-2 border-gray-300 pl-4"
                                                >
                                                    <h3 className="font-semibold text-gray-900">
                                                        Phase {phase.phaseNumber}: {phase.phaseTitle} (
                                                        {phase.phaseYear})
                                                    </h3>
                                                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                                        {phase.phaseDescription.map(
                                                            (item, i) => (
                                                                <li key={i}>{item}</li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {desc.architectureDiagram && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Architecture
                                        </h2>
                                        <img
                                            src={desc.architectureDiagram}
                                            alt="Architecture diagram"
                                            className="rounded-lg border border-gray-200 max-w-full"
                                        />
                                    </section>
                                )}

                                {desc.outcomes && desc.outcomes.length > 0 && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Outcomes
                                        </h2>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {desc.outcomes.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {desc.approach && desc.approach.length > 0 && (
                                    <section>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            Approach
                                        </h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                                            {desc.approach.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {desc.currentResponsibilities &&
                                    desc.currentResponsibilities.length > 0 && (
                                        <section>
                                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                                Current responsibilities
                                            </h2>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                {desc.currentResponsibilities.map(
                                                    (item, i) => (
                                                        <li key={i}>{item}</li>
                                                    )
                                                )}
                                            </ul>
                                        </section>
                                    )}
                            </div>
                        ) : (
                            <div className="max-w-3xl">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {project.metaDescription}
                                </p>
                                <p className="text-sm text-gray-500">
                                    A full case study is not yet available for
                                    this project.
                                </p>
                            </div>
                        )}

                        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap gap-2">
                            {project.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {project.url && project.url.length > 0 && (
                            <div className="mt-8">
                                <a
                                    href={project.url[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-mycolors-orange transition-colors duration-200"
                                >
                                    {project.url[1]}
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
                <Footer
                    bgColor="white"
                    txtColor="black"
                    lnkColor="mycolors-orange"
                />
            </div>
        </div>
    )
}
