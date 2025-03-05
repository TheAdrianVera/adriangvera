interface CarouselProps {
    logoUrls: [
        {
            name: 'Amazon Web Services (AWS)',
            url: '../../../logos/client_logos/awslogo.png'
        },
        {
            name: 'Aditude',
            url: '../../../logos/client_logos/aditudelogo.png'
        },
        {
            name: 'Advanced Healthcare Services',
            url: '../../../logos/client_logos/ahsllclogolong.png'
        },
        {
            name: 'Betfully',
            url: '../../../logos/client_logos/betfullylogo.png'
        },
        {
            name: 'F.H. Paschen Construction',
            url: '../../../logos/client_logos/fhplogo.png'
        },
        {
            name: 'PricewaterhouseCoopers (PwC)',
            url: '../../../logos/client_logos/pwclogo.png'
        },
        {
            name: 'University of Illinois Urbana-Champaign',
            url: '../../../logos/client_logos/uiuclogo.png'
        }
    ]
}

const Carousel:React.FC<CarouselProps> = ({logoUrls}) => {

    return (
        <div className='w-full overflow-hidden'>
            <div id='carousel' className='flex w-full'>
                {logoUrls.map((logo, index)=>(
                    <img
                        key={index} 
                        src={logo.url}
                        alt={logo.name}
                        className='w-1/6 h-auto'    
                    />
                ))}
            </div>
        </div>
    )
}


export default Carousel