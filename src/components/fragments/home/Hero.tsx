import { Link } from 'react-router-dom';
function Hero() {



  return (
    <>
      <section className='home  '
      >
        <div className="container mx-auto ">
          <div className=' flex flex-col justify-center   min-h-[92vh] mx-2 lg:mx-0 '>
            <h1 className='mt-0 text-2xl font-extrabold font-inter md:mt-4  md:text-6xl text-white ' data-aos="fade-right" data-aos-delay="300">
              Live Your Best Life <br />
              Using Your Strengths </h1>
            <p data-aos="fade-right" data-aos-delay="400" className='mt-10 text-small md:text-lg text-white' >Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else.</p>

            <Link to={'/'} >
              <div data-aos="fade-right" data-aos-delay="450" className='mt-8 inline-flex items-center rounded-md bg-primary px-4 py-2 font-medium text-white '>
                Get Certification
              </div>
            </Link>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;
