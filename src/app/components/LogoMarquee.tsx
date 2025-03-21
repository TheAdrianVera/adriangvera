import Marquee from "react-fast-marquee"
import Image from "next/image"

interface Logo {
    name: string,
    url: string
}

interface CarouselProps {
    logoUrls: Logo[]
}

const Carousel:React.FC<CarouselProps> = ({logoUrls}) => {

    return (
        <div className='w-full overflow-hidden px-5'>
            <div className='flex justify-center items-center'>
                <h1 className='text-black text-3xl font-bold'>Experience</h1>
            </div>
            <Marquee 
                speed={100}
                className='w-full pt-10'
            >
                {logoUrls.map((logo, index)=>(
                    <Image 
                        key={index} 
                        src={logo.url}
                        alt={logo.name}
                        width={200}
                        height={50}
                        className='w-auto h-20 px-6'
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default Carousel