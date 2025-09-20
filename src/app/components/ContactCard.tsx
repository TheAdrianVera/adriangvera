import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

interface ContactCardProps {
    url: string
    title: string
    type: string
}

const ContactCard:React.FC<ContactCardProps> = ({url, title, type}) => {

    const getIcon = (type: string) => {
        switch(type) {
            case 'linkedin':
                return <FaLinkedinIn className='text-mycolors-black group-hover:text-mycolors-white'/>
            case 'github':
                return <FaGithub className='text-mycolors-black group-hover:text-mycolors-white'/>
            case 'email':
                return <MdEmail className='text-mycolors-black group-hover:text-mycolors-white'/>
            default:
                return null
        }
    }

    const getCardStyle = () => {
        // All cards have consistent styling
        return 'hover:border-mycolors-black hover:shadow-lg'
    }
    
    return (
        <>
            { type === 'email' ? (
                <a href={`mailto:`+url} target="_blank" className={`p-6 md:p-8 lg:p-10 min-h-[200px] md:min-h-[240px] lg:min-h-[280px] w-full border-2 border-mycolors-black rounded-lg flex flex-col items-center justify-center hover:bg-mycolors-darkblack group transition-all duration-300 ease-in-out transform hover:scale-105 bg-mycolors-periwinkle shadow-lg hover:shadow-lg ${getCardStyle()}`}>
                    <div className='mb-4 text-4xl md:text-5xl lg:text-6xl'>
                        {getIcon(type)}
                    </div>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-mycolors-black group-hover:text-mycolors-white text-center'>{title}</h2>
                </a>
            ) : (
                <a href={url} target="_blank" className={`p-6 md:p-8 lg:p-10 min-h-[200px] md:min-h-[240px] lg:min-h-[280px] w-full border-2 border-mycolors-black rounded-lg flex flex-col items-center justify-center hover:bg-mycolors-darkblack group transition-all duration-300 ease-in-out transform hover:scale-105 bg-mycolors-periwinkle shadow-lg hover:shadow-lg ${getCardStyle()}`}>
                    <div className='mb-4 text-4xl md:text-5xl lg:text-6xl'>
                        {getIcon(type)}
                    </div>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-mycolors-black group-hover:text-mycolors-white text-center'>{title}</h2>
                </a>
            )}
        </>
    )
}

export default ContactCard