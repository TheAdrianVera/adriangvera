import Link from "next/link"
import ContactCard from "../components/ContactCard"
import PageHeader from "../components/PageHeader"
import PageTitle from "../components/PageTitle"
import { IoArrowBack } from "react-icons/io5"


export default function Contact() {

    return (
    
    <div className='w-screen h-[100%] flex-col bg-mycolors-periwinkle'>
        <PageHeader color='black'/>
        <div className='w-screen h-screen flex flex-col'>
            <PageTitle />
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <ContactCard type='email' title='Email' url='agvm94@gmail.com' />
                    <ContactCard type='github' title='Github' url='https://github.com/TheAdrianVera' />
                    <ContactCard type='linkedin' title='LinkedIn' url='https://www.linkedin.com/in/adrian-vera-6180a7b6/' />
                </div>
            </div>
        </div>
    </div>
 
    )
}