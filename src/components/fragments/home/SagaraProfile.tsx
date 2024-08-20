import { check, manager, people, star } from "../../../image"

const SagaraProfile = () => {

    const dataText = [
        {
            title: "Global Credibility Boost",
            image: check,
            text: "Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities."
        },
        {
            title: "Empowering Careers",
            image: people,
            text: "Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry."
        },
        {
            title: "Expertise Validation",
            image: star,
            text: "Showcase your expertise and validate your skills with globally recognized certifications that employers trust."
        },
    ]

    return (
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="left">
                    <div className="text-primary text-xl font-bold lg:text-2xl mt-3 lg:mt-0">
                        <h1 className=" text-center lg:text-start" >WHY SAGARA </h1>
                        <h1 className="text-center lg:text-start"  >IT CERTIFICATION? </h1>
                    </div>
                    <div className="my-3 mx-3 lg:mx-0 flex flex-col gap-6">

                        {dataText.map((item, index) => (
                            <div className="flex gap-4 " key={index} data-aos="fade-up">
                                <img src={item.image} alt="" />
                                <div className="text">
                                    <h1 className=" text-small md:text-lg text-primary font-semibold" >{item.title}</h1>
                                    <p className="text-slate-500 text-small lg:text-base" >{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right flex justify-center items-center order-first lg:order-2">
                    <img className="w-auto h-[460px]" src={manager} alt="" data-aos="fade-up-left" />
                </div>
            </div>
        </div>

    )
}

export default SagaraProfile