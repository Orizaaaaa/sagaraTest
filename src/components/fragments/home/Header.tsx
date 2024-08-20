
import { useState } from 'react';
import { landongLogo } from '../../../image';
import { NavLink, } from 'react-router-dom';



const Header = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <header>
            <nav className='bg-transparent '>
                <div className='mx-auto flex w-full flex-wrap items-center justify-between p-4'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img src={landongLogo} className='mr-3 md:h-10 h-8 w-auto' />
                        </div>
                    </div>
                    <button
                        onClick={toggleNavbar}
                        type='button'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden'
                        aria-controls='navbar-default'
                        aria-expanded='false'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isNavbarOpen ? 'block' : 'hidden'} z-10`} id='navbar-default'>
                        <div className='mt-4 flex  rounded-lg border border-gray-100 bg-transparent p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 '>
                            <NavLink className={'px-4 py-2 text-white bg-primary rounded-md'} to={'/dashboard'} > Sign In</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
