interface PageHeaderProps {
    title?: string
    subline?: string
}


const PageHeader:React.FC<PageHeaderProps> = ({title, subline}) => {

    if (title && !subline) {
        subline = ""
    }

    return (
        <div className='pt-20 pb-10 px-5'>
            {title ? (
                <>
                <div className='text-black'>
                    <div className='text-4xl font-bold'>{title}</div>
                    <div className='text-xl text-gray-600'>{subline}</div>
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