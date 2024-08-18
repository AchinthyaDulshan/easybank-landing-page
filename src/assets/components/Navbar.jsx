import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import CloseIcon from '../images/icon-close.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Contact",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Careers",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-White z-10'>
           <div className='md:flex items-center justify-between  py-5 md:py-3  md:px-10 px-7 max-w-7xl mx-auto relative text-Grayish-Blue bg-White z-10' >
            {/* logo section */}
            <img src={Logo} className='h-auto'/>
            
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <img className='m-auto' src={CloseIcon}/> : <img className='m-auto' src={HamburgerIcon} />
                }
            </div>
            {/* link items */}
            <ul className={`flex md:flex-row md:shadow-none flex-col shadow-lg justify-center items-center md:py-0 py-12 absolute left-0 md:static bg-white md:z-50 lg:z-[10] z-[-1] w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'} bg-White`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-3 lg:hover:after:block after:rounded-full after:none after:relative after:h-1 after:w-full after:-bottom-4  after:bg-gradient-to-r after:from-Lime-Green after:to-Bright-Cyan after:transition-all after:duration-200 hover:text-Dark-Blue'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                
            </ul>
            {/* button */} 
            <a className='text-White font-semibold text-sm px-5 py-2 rounded-full duration-500 bg-gradient-to-r from-Lime-Green to-Bright-Cyan hidden md:block hover:from-Bright-Cyan hover:to-Grayish-Blue transition-all delay-200 shadow-lg' href='#'>Request Invite</a>
           </div>
        </div>
    );
};

export default Navbar;