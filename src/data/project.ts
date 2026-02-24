export interface Project {
    slug: string
    title: string
    year: number[]
    logo: string
    metaDescription: string
    description?: ProjectDescription,
    location: string[]
    skills: string[]
    design?: string[]
    special?: string[]
    url?: string[]
    logoSlug: string
}

export interface ProjectDescription {
    overview: string,
    summary: string,
    challenge: string[],
    role: string[],
    evolution: ProjectPhase[],
    architectureDiagram: string,
    outcomes: string[],
    approach: string[],
    currentResponsibilities: string[]
}

export interface ProjectPhase {
    phaseNumber: number,
    phaseTitle: string,
    phaseYear: number,
    phaseDescription: string[],
}


export const projects: Project[] = [
    {
        slug: 'advanced-healthcare-services-website',
        title: 'Advanced Healthcare Services Website',
        year: [2020, 2026],
        logo: 'ahsllc',
        metaDescription: 
            'Migrated their site from GoDaddy to Vercel, reducing costs. ' +
            'Rebuilt the site with TypeScript, React, and Tailwind, ' +
            'and implemented analytics tracking for better visitor insights.'
        ,
        description: {
            overview: 
                'Advanced Healthcare LLC is a home healthcare provider in the Springfield, ' +
                'IL area. Since 2020, I have partnered with the organization as the primary technical ' +
                'owner of their website, helping evolve their web presence from a basic externally managed ' + 
                'site into a modern React-based platform focused on performance, maintainability, ' +
                'and marketing visibility.'
            ,
            summary: 
                'Since 2020, I’ve served as the technical owner of Advanced Healthcare’s ' + 
                'web platform, guiding its evolution from a legacy website to a modern ' + 
                'React-based marketing infrastructure.'
            ,
            challenge: [
                    'Advanced Healthcare needed greater control over their website, hosting, ' +
                    'and marketing infrastructure. Their existing setup limited ' +
                    'flexibility and made updates difficult.'
                ,
                    'My goal was to help transition the organization toward a modern, '+
                    'maintainable platform that supported both business growth and marketing visibility.'
            ],
            role: [
                'Technical owner and long-term web partner',
                'Frontend development and architecture decisions',
                'Hosting and deployment strategy',
                'Analytics and marketing integration',
                'Ongoing maintenance and optimization'
            ],
            evolution: [
                {
                    phaseNumber: 1,
                    phaseTitle: 'Foundation',
                    phaseYear: 2020,
                    phaseDescription: [
                        'Migrated website hosting to GoDaddy to give the organization direct ownership and control.',
                        'Built and maintained the initial website using HTML, CSS, JavaScript, and PHP.',
                        'Provided ongoing passive maintenance and support.'
                    ]
                },
                {
                    phaseNumber: 2,
                    phaseTitle: 'Modernization',
                    phaseYear: 2024,
                    phaseDescription: [
                        'Led full redesign and rebuild of the website using React, TypeScript, and Tailwind CSS.',
                        'Migrated hosting to Vercel for improved deployment workflows and performance.',
                        'Implemented AWS S3 for image storage and asset management.',
                        'Integrated analytics tools including GA4, GTM, and Meta Pixel for improved marketing insights.',
                        'Added EmailJS and security measures to improve form submission reliability and safety.'
                    ]
                },
                {
                    phaseNumber: 3,
                    phaseTitle: 'Ongoing Ownership',
                    phaseYear: 2026,
                    phaseDescription: [
                        'Continue maintaining hosting and deployments.',
                        'Handle updates and feature improvements as needed.',
                        'Support marketing and analytics initiatives through ongoing technical improvements.'
                    ]
                }
            ],
            architectureDiagram: '',
            outcomes: [
                '4+ year partnership (since 2020)',
                '2 major website iterations',
                'Transitioned organization to full website ownership',
                'Modernized stack to React-based architecture',
                'Added analytics tracking for improved marketing visibility',
                'Established long-term maintenance relationship'
            ],
            approach: [
                    'A key goal throughout this project was reducing operational dependency and '+
                    'improving long-term maintainability.'
                ,
                    'By migrating hosting, modernizing the frontend stack, and implementing structured ' +
                    'analytics workflows, the organization gained greater control over their website ' +
                    'infrastructure and the ability to iterate more confidently.'
            ],
            currentResponsibilities: [
                'Maintain hosting, deployments, and site reliability',
                'Implement updates and improvements as business needs evolve',
                'Manage analytics and tracking integrations (GA4, GTM, Meta Pixel)',
                'Ensure secure and reliable form submission workflows'
            ]
        },
        skills: ['React', 'Type Script', 'Vercel', 'AWS S3', 'HTML/CSS', 'Google Analytics', 'Meta Pixel Tracking', 'GoDaddy Migration'],
        special: ['Rehost', 'Redesign'],
        design: ['Figma'],
        location: ['Springfield', 'IL'],
        url: ['https://www.ahsllc.org', 'Visit Site'],
        logoSlug: 'ahsllc',
    },
    {
        slug: 'subsistence-marketplaces-website',
        title: 'Subsistence Marketplaces Website',
        year: [2016],
        logo: 'uiuc',
        metaDescription: 'In collaboration with the University of Illinois Urbana Champaign Business Deparment I helped create an interactive web application that allowed students to simulate living in a subsistence marketplace. Played over 100,000 times worldwide and apart of student learning curriculum.\n 2025 Redesign coming soon!',
        skills: ['Javascript', 'PHP', 'HTML/CSS', 'JQuery', 'GoDaddy Hosting', 'Google Analytics'],
        design: ['Adobe Suite'],
        location: ['Champaign', 'IL'],
        url: ['http://www.subsistencemarketplaces.com', 'Play the Game'],
        logoSlug: 'uiuc',
    },
    {
        slug: 'fh-paschen-construction-wordpress',
        title: 'F.H. Paschen Construction Wordpress Development',
        year: [2020, 2023],
        logo: 'fhp',
        metaDescription: 'Migrated their WordPress site to GoDaddy, cutting hosting costs. Built custom plugins and a project database to enhance website interactivity. Designed and developed a new site section, translating Figma designs into responsive WordPress code with PHP, JavaScript, HTML, and CSS.',
        skills: ['Javascript', 'AWS S3', 'PHP','HTML/CSS', 'Wordpress Development', 'mySQL', 'Google Analytics', 'GoDaddy Hosting', 'GoDaddy Migration'],
        special: ['Rehost'],
        design: ['Adobe Suite','Figma'],
        location: ['Chicago', 'IL'],
        url: ['https://fhpaschen.com', 'Visit Site'],
        logoSlug: 'fhp',
    },
    {
        slug: 'stalworth-underground-wordpress',
        title: 'Stalworth Underground Wordpress Developmnet',
        year: [2021],
        logo: 'stalworth',
        metaDescription: 'Migrated their WordPress site from GoDaddy to Pressable. Developed a custom plugin with a UI to query their project database, generate reports, and improve data accessibility.',
        skills: ['Javascript', 'PHP', 'HTML/CSS', 'mySQL', 'Wordpress Development', 'ETL','Database Management', 'Pressable', 'GoDaddy Migration'],
        design: ['Adobe Suite'],
        special: ['Rehost'],
        location: ['Chicago', 'IL'],
        url: ['https://stalworthunderground.com', 'Visit Site'],
        logoSlug: 'stalworth',
    },
    {
        slug: 'linestar-website-redesign',
        title: 'Linestar Website Redesign',
        year: [2022],
        logo: 'linestar',
        metaDescription: 'Led the front-end redesign of LineStar, a sports betting analytics platform with 1M+ users. Translated Figma designs into responsive AngularJS UI, refactored .NET code, and delivered the full redesign in five months.',
        skills: ['Javascript', 'Angular', 'DNN Development', 'ASP.NET MVC', 'C#/.NET','HTML/CSS'],
        special: ['Redesign'],
        design: ['Figma'],
        location: ['San Diego', 'CA'],
        url: ['https://linestarapp.com', 'Visit Site'],
        logoSlug: 'linestar',
    },
    {
        slug: 'aditude-cloud-wrapper-contributions',
        title: 'Aditude Cloud Wrapper Contributions',
        year: [2023],
        logo: 'aditude',
        metaDescription: 'Developed React components for ad refreshing and lazy loading, migrated code to TypeScript, and improved auction tracking. Implemented AWS (S3, CloudFront) to reduce caching costs and led daily release management.',
        skills: ['React','Type Script','NextJS', 'Vercel', 'AWS S3', 'AWS Cloudwatch', 'Github CI/CD', 'SQL'],
        location: ['New York', 'NY'],
        url: ['https://www.aditude.com', 'Visit Site'],
        logoSlug: 'aditude',
    }
]

/** End year (or only year) for sorting — most recent first. */
export function getProjectYearSortKey(project: Project): number {
    const y = project.year
    return y.length > 0 ? y[y.length - 1]! : 0
}

/** Format year for display: "2021" or "2020 – 2023". */
export function formatProjectYear(year: number[]): string {
    if (year.length === 0) return ''
    if (year.length === 1) return String(year[0])
    return `${year[0]} – ${year[year.length - 1]}`
}

/** All projects (for portfolio listing). */
export function getAllProjects(): Project[] {
    return projects
}

/** One project by URL slug (for dynamic route pages). */
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}

/** All slugs (for generateStaticParams). */
export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug)
}
