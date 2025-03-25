import ContactCard from "@components/ContactCard"
import PageTitle from "@components/PageTitle"

export default function Contact() {

    return (
    
        <div>
            <div className='bg-mycolors-periwinkle min-h-screen flex-col md:px-20'>
                <div className='pt-10'>
                    <PageTitle />
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 lg:px-40 transition-all duration-300'>
                        <ContactCard type='email' title='Email' url='agvm94@gmail.com' />
                        <ContactCard type='github' title='Github' url='https://github.com/TheAdrianVera' />
                        <ContactCard type='linkedin' title='LinkedIn' url='https://www.linkedin.com/in/adrian-vera-6180a7b6/' />
                    </div>
                </div>

            </div>
        </div>
 
    )
}