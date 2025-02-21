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
                return <FaLinkedinIn className='text-black group-hover:text-white'/>
            case 'github':
                return <FaGithub className='text-black group-hover:text-white'/>
            case 'email':
                return <MdEmail className='text-black group-hover:text-white'/>
            default:
                return null
        }
    }
    
    return (
        <>
            { type === 'email' ? (
                <a href={`mailto:`+url} target="_blank" className='p-6 w-[100%] border-black border-2 rounded-lg flex flex-col items-center hover:bg-gray-900 group transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-2'>
                    {getIcon(type)}
                    <h2 className='text-xl font-semibold text-black group-hover:text-white'>{title}</h2>
                </a>
            ) : (
                <a href={url} target="_blank" className='p-6 w-[100%] border-black border-2 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-900 group transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-2'>
                    {getIcon(type)}
                    <h2 className='text-xl font-semibold text-black group-hover:text-white'>{title}</h2>
                </a>
            )}
        </>
    )
}

export default ContactCard