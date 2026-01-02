import Link from "next/link"

interface FooterProps {
    bgColor: string
    txtColor: string
    lnkColor: string
}



const Footer:React.FC<FooterProps> = ({bgColor, txtColor, lnkColor}) => {
    return (
        <footer className={`bg-${bgColor} text-${txtColor} py-6`}>
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Adrian G. Vera. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`text-gray-600 hover:text-${lnkColor}`}>
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`text-gray-600 hover:text-${lnkColor}`}>
                        LinkedIn
                    </a>
                    <Link href="/contact" className={`text-gray-600 hover:text-${lnkColor}`}>
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer