import { code, kotak1, kotak2, kotak3 } from "../../../image"
import ButtonPrimary from "../../elemets/buttonPrimary"


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

    const dataText = [
        {
            image: kotak1,
            text: "This program equips you with the essential skills and knowledge to create visually appealing websites or applications."
        },
        {
            image: kotak2,
            text: "Evaluates your proficiency in frontend programming languages and other relevant frontend technologies."
        },
        {
            image: kotak3,
            text: "Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities."
        },
    ]
    return (
        <div className="container mx-auto mt-11">
            <div className="text-center text-2xl">
                <h1 className="text-primary font-medium" >Empower Yourself with</h1>
                <h1 className="text-primary font-bold" >Our Certification</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 my-4 gap-2 mx-2 lg:mx-0">
                {dataTitle.map((item, index) => (
                    <div className={`flex justify-center items-center ${index === 0 ? 'bg-primary text-white font-semibold' : ''}`} key={index} >
                        <h1 className=" w-full p-1 md:p-4 border-1 text-center text-small md:text-base rounded-sm" >{item.title}</h1>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2   ">

                <div className="flex justify-center items-center " data-aos="fade-right">
                    <img className="w-auto h-[500px]" src={code} alt="" />
                </div>

                <div className="right flex flex-col justify-center px-3 lg:px-0">
                    <h1 className=" text-xl font-bold lg:text-2xl text-primary lg:font-bold lg:mb-13 " >FrontEnd Certification</h1>
                    {dataText.map((item, index) => (
                        <div className="flex gap-4 my-4" key={index} data-aos="fade-up">
                            <img className="w-6 h-6" src={item.image} alt="" />
                            <div className="text">
                                <p className="text-slate-500 text-small lg:text-base" >{item.text}</p>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-center my-4">
                        <ButtonPrimary className="rounded-md" >Get Detail</ButtonPrimary>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default OurCertification