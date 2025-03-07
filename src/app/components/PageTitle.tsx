interface PageHeaderProps {
    title?: string
}


const PageHeader:React.FC<PageHeaderProps> = ({title}) => {

    return (
        <div className='text-black'>
            PAGE TITLE
        </div>
    )
}

export default PageHeader