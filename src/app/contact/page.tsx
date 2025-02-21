export default function Contact() {
    const email = "agvm94@gmail.com"
    const linkedinUrl = "https://www.linkedin.com/in/adrian-vera-6180a7b6/"
    const githubUrl = "https://github.com/TheAdrianVera"

    return (
        <div className='bg-mycolors-periwinkle relative w-screen h-screen flex justify-center items-center'>
            <div>
                <h1 className='flex justify-center text-[2rem] text-mycolors-black pb-8'>Contact</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <a href={`mailto:`+email} target="_blank" className='p-6 border-black border-2 rounded-lg flex flex-col items-center hover:bg-gray-900 group transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-2'>
                        <h2 className='text-xl font-semibold text-black group-hover:text-white'>Email</h2>
                    </a>
                    <a href={githubUrl} target="_blank" className='p-6 border-black border-2 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-900 group transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-2'>
                        <h2 className='text-xl font-semibold text-black group-hover:text-white'>GitHub</h2>
                    </a>
                    <a href={linkedinUrl} target="_blank" className='p-6 border-black border-2 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-900 group transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-2'>
                        <h2 className='text-xl font-semibold text-black group-hover:text-white'>LinkedIn</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}