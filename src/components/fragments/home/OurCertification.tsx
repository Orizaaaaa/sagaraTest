

const OurCertification = () => {
    const dataTitle = [
        {
            title: "FRONT END DEVELOPER",

        },
        {
            title: "Back END Developer",

        },
        {
            title: "QUALITY ASSURANCE",

        },
        {
            title: "UI/UX DESIGN",

        },
    ]
    return (
        <div className="container mx-auto">
            <div className="text-center text-2xl">
                <h1 className="text-primary font-medium" >Empower Yourself with</h1>
                <h1 className="text-primary font-bold" >Our Certification</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 my-4 gap-2 mx-2 lg:mx-0">
                {dataTitle.map((item, index) => (
                    <div className={`flex justify-center items-center ${index === 0 ? 'bg-primary text-white font-semibold' : ''}`} key={index}>
                        <h1 className=" w-full p-1 md:p-4 border-2 text-center text-small md:text-base" >{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default OurCertification