import Image from "next/image"
import Link from "next/link"
interface PageHeaderProps {
    color: string
}

const PageHeader:React.FC<PageHeaderProps> = ({color}) => {


    return (
        <div className={`w-[100%] px-5 pt-10 flex justify-between items-center text-${color} text-lg absolute`}>
            <Link
               href='/' 
            >
                <Image 
                    src='/logos/adriangvera-com.png' 
                    alt='Home' 
                    width={40} 
                    height={40}
                />
            </Link>
            <div className='flex'>
                <Link
                    href='/portfolio'
                >
                    <div className='hover:text-mycolors-orange'>Portfolio</div>
                </Link>
                <Link
                    href='/contact'
                >
                    <div className='pl-5 hover:text-mycolors-orange'>Contact</div>
                </Link>
            </div>
        </div>        
    )
}

export default PageHeader