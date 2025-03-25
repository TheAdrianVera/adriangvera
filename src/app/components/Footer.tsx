import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Adrian G. Vera. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        LinkedIn
                    </a>
                    <Link href='/contact' className="text-gray-400 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer