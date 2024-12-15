
export default function Contact() {

    return (
        <div className='bg-mycolors-orange relative w-screen h-screen flex justify-center items-center'>
            <div>
                <h1 className='flex justify-center text-[2rem]'>Let's Get In Touch</h1>
                <div className='flex flex-col md:flex-row md:justify-center w-screen md:justify-around pt-10'>
                    <div className='border-2 border-color-black mb-10 mx-10 h-40 md:mx-0 md:h-80 md:w-80'>
                        <p>Email</p>
                    </div>
                    <div className='border-2 border-color-black mb-10 mx-10 h-40 md:mx-0 md:h-80 md:w-80'>
                        <p>Github</p>
                    </div>
                    <div className='border-2 border-color-black mx-10 h-40 md:mx-0 md:h-80 md:w-80'>
                        <p>LinkedIn</p>
                    </div>
                </div>

            </div>

        </div>
    )
}