import DesktopBg from '../images/bg-intro-desktop.svg';
import MobileBg from '../images/bg-intro-mobile.svg';
import MockUpImage from '../images/image-mockups.png';


const Hero = () => {
  return (
    <div className="grid lg:grid-cols-10 mx-auto max-w-7xl lg:min-h-[90vh] 2xl:min-h-[80vh]"> 
        {/* mobile screen images  */}
        <div className='lg:col-span-6 lg:hidden relative'>
            <img className='w-full' src={MobileBg} alt="" />
            <img className='absolute z-[2] top-5' src={MockUpImage} alt="" />
        </div>
        {/* Hero Text Content  */}
        <div className='p-6 mt-3 md:mt-10 lg:mt-20 flex flex-col justify-center text-center lg:col-span-4 '>
            {/* Heading  */}
            <h1 className='text-4xl lg:text-6xl lg:text-left text-Dark-Blue py-5'>Next generation digital banking</h1>
            {/* text  */}
            <p className='text-lg text-Grayish-Blue pb-7 lg:text-left'>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving,  budgeting, investing, and much more.</p>
            {/* button  */}
            <a className='text-White shadow-md mx-auto lg:mx-0 w-fit font-semibold px-5 py-2 rounded-full duration-500 bg-gradient-to-r from-Lime-Green to-Bright-Cyan hover:from-Bright-Cyan hover:to-Grayish-Blue transition-all delay-200 cursor-pointer' href='/'>Request Invite</a>
        </div>
        {/* desktop screen images  */}
        <div className='lg:col-span-6 none lg:block relative'>
            <img className='absolute z-[-1] lg:-bottom-[20%] lg:scale-[125%] 2xl:bottom-0' src={DesktopBg} alt="" />
            <img className='absolute invisible lg:visible lg:-bottom-32 z-[2] 2xl:bottom-0' src={MockUpImage} alt="" />
        </div>
        
    </div>
  )
}

export default Hero