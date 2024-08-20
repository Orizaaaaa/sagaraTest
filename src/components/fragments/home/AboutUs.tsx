
const AboutUs = () => {
    return (
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 lg:gap-27">
                <div className="lg:col-span-1 flex justify-center items-center border-t-2 border-black">
                    <h1 className=" text-xl lg:text-2xl  font-medium" >About Us</h1>
                </div>
                <div className="lg:col-span-5 px-2 lg:px-0 ">
                    <h1 className="text-xl my-2 lg:my-4 text-primary font-bold" >SAGARA IT CERTIFICATION </h1>
                    <h1 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-customdark to-customred text-transparent bg-clip-text" >Join thousands of professionals who have elevated their skills and carved out success in the technology industry. Start your journey to excellence with us today!</h1>
                    <p className="text-slate-500 mt-2" >Boost your career prospects in the digital era with industry-recognized information technology certifications from Sagara IT Certification. </p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs