import { FaCreditCard, FaGraduationCap } from "react-icons/fa6"
import { HiClipboardDocumentList, HiCursorArrowRays } from "react-icons/hi2"
import { IoIosPeople } from "react-icons/io"
import { manager2 } from "../../../image"


const HowSagara = () => {

    const dataText = [
        {
            no: '#1',
            title: 'Register Account',
            subtitle: 'Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.',
            icon: <IoIosPeople size={30} color="#A51535" />
        },
        {
            no: '#2',
            title: 'Select the Type ',
            subtitle: 'Choose from a variety of IT certification options tailored to your career goals and interests.  Select the certification that aligns with your expertise.',
            icon: <HiCursorArrowRays size={30} color="#A51535" />
        },
        {
            no: '#3',
            title: 'Register and Pay',
            subtitle: 'Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.',
            icon: <FaCreditCard size={20} color="#A51535" />
        },
        {
            no: '#4',
            title: 'Take Test',
            subtitle: 'Prepare for your certification exam and schedule a convenient time to take the test online. ',
            icon: <HiClipboardDocumentList size={25} color="#A51535" />
        },
        {
            no: '#5',
            title: 'Get the certificate',
            subtitle: 'Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.',
            icon: <FaGraduationCap size={25} color="#A51535" />
        },
    ]



    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <hr className="border-3 rounded-md border-primary my-5 w-22" />
            </div>
            <div className="text-center text-2xl">
                <h1 className="text-primary font-medium" >How Sagara</h1>
                <h1 className="text-primary font-bold" >IT-Certification Works</h1>
            </div>


            <div>
                <h1 className='text-center text-2xl md:text-5xl text-white font-extrabold md-2 md:mb-8 uppercase'>Alur Aduan</h1>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex justify-center items-center p-4 lg:p-0">
                    <img className="md:h-[500px] w-auto" src={manager2} alt="" />
                </div>

                <div className='py-3  w-full px-2 sm:px-0 '>
                    <div className='relative '>
                        {/* <!-- Vertical bar running through middle --> */}
                        <div className="hidden sm:block w-1 border-l-2 border-dashed border-primary absolute h-full ">
                        </div>
                        {dataText.map((item, index) => (
                            <div className={`  sm:mt-0 sm:mb-12`} data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500' key={index}>
                                <div className='flex flex-col sm:flex-row items-center'>
                                    <div className={`rounded-full bg-white border-white shadow-2  border-4 w-11 h-11 absolute  flex justify-center items-center  ${index === 4 ? "md:bottom-0" : "md:top-0"}    transform lg:-translate-x-1/2 `}>
                                        {item.icon}
                                    </div>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full  sm:pl-8'>
                                            <div className='px-4 py-4 md:py-0 rounded transition-all duration-100 ease-out  '>
                                                <h1 className=" text-xl font-semibold lg:text-xl lg:font-bold mt-8 md:mt-0" ><span className="text-primary" >{item.no}</span> {item.title}</h1>
                                                <p className=" text-sm lg:text-base text-slate-500" >{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))}


                    </div>
                </div>
            </div>

        </div >

    )
}

export default HowSagara