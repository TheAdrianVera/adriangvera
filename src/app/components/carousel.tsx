interface Logo {
    name: string,
    url: string
}

interface CarouselProps {
    logoUrls: Logo[]
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