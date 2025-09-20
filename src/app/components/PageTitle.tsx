interface PageHeaderProps {
    title?: string
    subline?: string
}


const PageHeader:React.FC<PageHeaderProps> = ({title, subline}) => {

    if (title && !subline) {
        subline = ""
    }

    return (
        <div className='pt-20 pb-10 px-5 md:px-20 lg:px-40 transition-all duration-300'>
            {title ? (
                <>
                <div className='text-black'>
                    <div className='text-5xl md:text-6xl font-bold'>{title}</div>
                    <div className='text-xl md:text-2xl text-gray-600'>{subline}</div>
                </div>
                {/* Divider line */}
                <div className='border-t border-black-300 my-4'></div>
                </>
            ): (
                <div></div>
            )}
        </div>
    )
}

export default PageHeader