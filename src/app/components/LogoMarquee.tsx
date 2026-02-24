import Marquee from "react-fast-marquee"
import Image from "next/image"
import Link from "next/link"
interface Logo {
    name: string
    url: string
    website: string
}
interface CarouselProps {
    logoUrls: Logo[]
}

const Carousel:React.FC<CarouselProps> = ({logoUrls}) => {

    return (
        <div className='w-full overflow-hidden px-5 md:px-20 lg:px-40 transition-all duration-300 pb-20 pt-10'>
            <div className='flex justify-center items-center'>
                <h1 className='text-black text-3xl font-bold'>Experience</h1>
            </div>
            <Marquee 
                speed={100}
                className='w-full pt-20'
            >
                {logoUrls.map((logo, index)=>(
                <Link href={logo.website} key={index} target='_blank' >
                    <Image 
                        src={logo.url}
                        alt={logo.name}
                        width={200}
                        height={50}
                        className='w-auto h-20 px-6'
                    />
                </Link>
                ))}
            </Marquee>
        </div>
    )
}

export default Carousel