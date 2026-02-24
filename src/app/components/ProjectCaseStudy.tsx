'use client'

import type { Project, ProjectDescription } from '@/data/project'

interface ProjectCaseStudyProps {
    project: Project
    desc: ProjectDescription
}

export function ProjectCaseStudy({ project, desc }: ProjectCaseStudyProps) {
    return (
        <div className="text-black space-y-12">
            {/* Top: Overview + Diagram side by side — diagram higher on page */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{desc.overview}</p>
                </div>
                {desc.architectureDiagram && (
                    <div className="lg:sticky lg:top-24 order-first lg:order-none">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Architecture</h2>
                        <img
                            src={desc.architectureDiagram}
                            alt="Architecture diagram"
                            className="rounded-xl border border-gray-200 shadow-sm w-full max-w-lg"
                        />
                    </div>
                )}
            </section>

            {/* Challenge | Role side by side */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {desc.challenge && desc.challenge.length > 0 && (
                    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                            {desc.challenge.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </ul>
                    </div>
                )}
                {desc.role && desc.role.length > 0 && (
                    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">My role</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {desc.role.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            {/* Evolution: accordion (collapsible phases) */}
            {desc.evolution && desc.evolution.length > 0 && (
                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Evolution</h2>
                    <div className="space-y-2">
                        {desc.evolution.map((phase) => (
                            <details
                                key={phase.phaseNumber}
                                className="group rounded-xl border border-gray-200 bg-white overflow-hidden"
                            >
                                <summary className="flex items-center gap-3 cursor-pointer list-none px-5 py-4 hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden">
                                    <span className="font-semibold text-gray-900 min-w-[220px]">
                                        Phase {phase.phaseNumber}: {phase.phaseTitle}
                                    </span>
                                    <span className="text-gray-500 text-sm">{phase.phaseYear}</span>
                                    <svg
                                        className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 ml-auto"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-5 pb-4 pt-0 border-t border-gray-100">
                                    <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                        {phase.phaseDescription.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            )}

            {/* Outcomes | Approach side by side */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {desc.outcomes && desc.outcomes.length > 0 && (
                    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Outcomes</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {desc.outcomes.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {desc.approach && desc.approach.length > 0 && (
                    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Approach</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                            {desc.approach.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            {/* Current responsibilities: collapsible */}
            {desc.currentResponsibilities && desc.currentResponsibilities.length > 0 && (
                <section>
                    <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                        <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between [&::-webkit-details-marker]:hidden">
                            <h2 className="text-xl font-semibold text-gray-900">Current Responsibilities</h2>
                            <svg
                                className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="px-5 pb-4 pt-0 border-t border-gray-100">
                            <ul className="mt-3 space-y-1 list-disc list-inside text-gray-700">
                                {desc.currentResponsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </details>
                </section>
            )}

            {/* All skills at bottom */}
            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Technologies & skills</h3>
                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
