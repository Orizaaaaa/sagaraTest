import { Link } from 'react-router-dom';
function Hero() {



  return (
    <>
      <section className='home  '
      >
        <div className="container mx-auto ">
          <div className=' flex flex-col justify-center   min-h-[92vh] mx-2 lg:mx-0'>
            <h1 className='mt-0 text-2xl font-extrabold font-inter md:mt-4  md:text-6xl text-white '>
              Live Your Best Life <br />
              Using Your Strengths </h1>
            <p className='mt-10 text-small md:text-lg text-white' >Masyarakat dapat mengadukan permasalahan yang terjadi di citatah perihal keamanan, ketertiban umum, kesejahtraan sosial, pemberdayaan masyarakat, pemerintahan, ekonomi dan pembangunan</p>

            <Link to={'/'} >
              <div className='mt-8 inline-flex items-center rounded-md bg-primary px-4 py-2 font-medium text-white '>
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
