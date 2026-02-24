export interface Logo {
    slug: string
    name: string
    url: string
    website: string
}

export const logos: Logo[] = [
    {
        slug: 'aditude',
        name: 'Aditude',
        url: '/logos/client_logos/aditudefulllogo.png',
        website: 'https://www.aditude.com/'
    },
    {
        slug: 'ahsllc',
        name: 'Advanced Healthcare Services',
        url: '/logos/client_logos/ahsllclogolong.png',
        website: 'https://www.ahsllc.org/'
    },
    {
        slug: 'aws',
        name: 'Amazon Web Services (AWS)',
        url: '/logos/client_logos/awslogo.png',
        website: 'https://aws.amazon.com/'
    },
    {
        slug: 'betfully',
        name: 'Betfully',
        url: '/logos/client_logos/betfullyfulllogo.png',
        website: 'https://betfully.com/'
    },
    {
        slug: 'elh',
        name: 'Erika\'s Lighthouse',
        url: '/logos/client_logos/elhfulllogo.png',
        website: 'https://erikaslighthouse.org/'
    },
    {
        slug: 'fhp',
        name: 'F.H. Paschen Construction',
        url: '/logos/client_logos/fhplogo.png',
        website: 'https://www.fhpaschen.com/'
    },
    {
        slug: 'iw',
        name: 'IW Technologies',
        url: '/logos/client_logos/iwfulllogo.png',
        website: 'https://www.weareiw.com/',
    },
    {
        slug: 'linestar',
        name: 'Linestar',
        url: '/logos/client_logos/linestarlogo.png',
        website: 'https://linestarapp.com/'
    },
    {
        slug: 'pwc',
        name: 'PricewaterhouseCoopers (PwC)',
        url: '/logos/client_logos/pwclogo.svg',
        website: 'https://www.pwc.com/gx/en/services/consulting/technology.html'
    },
    {
        slug: 'stalworth',
        name: 'Stalworth Underground',
        url:'/logos/client_logos/stalworthlogo.png',
        website: 'https://stalworthunderground.com/'
    },
    {
        slug: 'uiuc',
        name: 'University of Illinois Urbana-Champaign',
        url: '/logos/client_logos/uiucfulllogo.png',
        website: 'https://giesbusiness.illinois.edu/experience/academies-centers/subsistence-marketplaces-initiative'
    }
]

export function getAllLogos(): Logo[] {
    return logos
}

export function getLogoBySlug(slug: string): Logo | undefined {
    return logos.find(logo => logo.slug === slug)
}

export function getAllLogoSlugs(): string[] {
    return logos.map(logo => logo.slug)
}