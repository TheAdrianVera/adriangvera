import Marquee from "react-fast-marquee"
interface Logo {
    name: string,
    url: string
}

interface CarouselProps {
    logoUrls: Logo[]
}

const Carousel:React.FC<CarouselProps> = ({logoUrls}) => {

    return (
        <div className='w-full overflow-hidden pt-10 px-5'>
            <Marquee 
                speed={100}
                className='w-full'
            >
                {logoUrls.map((logo, index)=>(
                    <img
                        key={index} 
                        src={logo.url}
                        alt={logo.name}
                        className='w-auto h-20 px-6'    
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default Carousel