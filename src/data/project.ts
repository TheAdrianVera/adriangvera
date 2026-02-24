export interface Project {
    slug: string
    title: string
    year: number[]
    logo: string
    description: string
    location: string[]
    skills: string[]
    design?: string[]
    special?: string[]
    url?: string[]
    logoSlug: string
}

export const projects: Project[] = [
    {
        slug: 'advanced-healthcare-services-website',
        title: 'Advanced Healthcare Services Website',
        year: [2020, 2026],
        logo: 'ahsllc',
        description: 'Migrated their site from GoDaddy to Vercel, reducing costs. Rebuilt the site with TypeScript, React, and Tailwind, and implemented analytics tracking for better visitor insights. ',
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
        description: 'In collaboration with the University of Illinois Urbana Champaign Business Deparment I helped create an interactive web application that allowed students to simulate living in a subsistence marketplace. Played over 100,000 times worldwide and apart of student learning curriculum.\n 2025 Redesign coming soon!',
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
        description: 'Migrated their WordPress site to GoDaddy, cutting hosting costs. Built custom plugins and a project database to enhance website interactivity. Designed and developed a new site section, translating Figma designs into responsive WordPress code with PHP, JavaScript, HTML, and CSS.',
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
        description: 'Migrated their WordPress site from GoDaddy to Pressable. Developed a custom plugin with a UI to query their project database, generate reports, and improve data accessibility.',
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
        description: 'Led the front-end redesign of LineStar, a sports betting analytics platform with 1M+ users. Translated Figma designs into responsive AngularJS UI, refactored .NET code, and delivered the full redesign in five months.',
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
        description: 'Developed React components for ad refreshing and lazy loading, migrated code to TypeScript, and improved auction tracking. Implemented AWS (S3, CloudFront) to reduce caching costs and led daily release management.',
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
