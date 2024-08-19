import { Link } from 'react-router-dom';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { statusDashboard } from '../../../service/dashboard';
interface Report {
  Menunggu: number
  Diproses: number
  Selesai: number
}
function Hero() {
  const [dataDashboard, setDataDashboard] = useState({} as Report);
  useEffect(() => {
    statusDashboard((result: any) => {
      setDataDashboard(result.data)
    })
  }, []);


  return (
    <>
      <section className=' min-h-[92vh] grid grid-cols-1 items-center px-4 pb-20 pt-5 md:px-20 lg:grid-cols-5 overflow-x-hidden '
      >
        <div className='animate__fadeInLeft animate__animated animate__delay-0.7s order-last py-4 md:order-first md:py-0 lg:pr-8 col-span-3'>

          <h1 className='mt-0 text-2xl font-bold font-inter md:mt-4  lg:text-6xl text-black '>  Website Pengaduan <span className='text-primary' >Citatah</span>  </h1>
          <p className='mt-10' >Masyarakat dapat mengadukan permasalahan yang terjadi di citatah perihal keamanan, ketertiban umum, kesejahtraan sosial, pemberdayaan masyarakat, pemerintahan, ekonomi dan pembangunan</p>

          <Link to={'/login'} >
            <div className='mt-8 inline-flex items-center rounded-full bg-primary px-4 py-2 font-medium text-white '>
              <svg xmlns='http://www.w3.org/2000/svg' className='mr-2 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M13 3H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2zm-1 10H8a1 1 0 110-2h4a1 1 0 110 2zm0-4H8a1 1 0 110-2h4a1 1 0 110 2z' clipRule='evenodd' />
              </svg>
              Buat Laporan
            </div>
          </Link>

          <div className="flex gap-5 my-7">
            <div className="flex justify-start mt-3 gap-2">
              <IoChatbubblesSharp size={24} color='#2FACD6' />
              <div className="flex-col font-semibold text-black">
                <p>{dataDashboard.Diproses}</p>
                <p>Total Pengaduan</p>
              </div>
            </div>

            <div className="flex justify-start mt-3 gap-2">
              <FaUsersGear size={24} color='#2FACD6' />
              <div className="flex-col font-semibold text-black">
                <p>{dataDashboard.Selesai}</p>
                <p>aduan yang telah di tindak lanjuti</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
