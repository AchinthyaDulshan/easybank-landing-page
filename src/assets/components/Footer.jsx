import Logo from '../images/logo2.svg';
import FacebookLogo from '../images/icon-facebook.svg';
import InstaLogo from '../images/icon-instagram.svg';
import TwitterLogo from '../images/icon-twitter.svg';
import PinterestLogo from '../images/icon-pinterest.svg';
import YoutubeLogo from '../images/icon-youtube.svg';


const Footer = () => {
    return (
        <div className=' bg-Dark-Blue py-20'>
            <div className=' max-w-7xl mx-auto '>
                <div className='grid lg:grid-cols-2 lg:text-left text-center gap-4 lg:gap-0'>
                    <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 lg:justify-between '>
                        <div className='flex flex-col gap-5 lg:gap-0 justify-between items-center'>
                            {/* company logo  */}
                            <img src={Logo} className='h-auto' />
                            {/* social medias  */}
                            <div className='grid grid-cols-5 gap-3'>
                                <a href="#"><img className='hover:fill-Lime-Green' src={FacebookLogo} alt="facebook" /></a>
                                <a href="#"><img className='hover:fill-Lime-Green' src={YoutubeLogo} alt="Youtube" /></a>
                                <a href="#"><img className='hover:fill-Lime-Green' src={TwitterLogo} alt="Twitter" /></a>
                                <a href="#"><img className='hover:fill-Lime-Green' src={PinterestLogo} alt="Pinterest" /></a>
                                <a href="#"><img className='hover:fill-Lime-Green' src={InstaLogo} alt="Instagram" /></a>
                            </div>
                        </div>
                        {/* site map  */}
                        <div className='grid space-y-3 text-Light-Grayish-Blue'>
                            <a className='hover:text-Lime-Green transition-all duration-200' href="#">About Us</a>
                            <a className='hover:text-Lime-Green transition-all duration-200' href="#">Contact</a>
                            <a className='hover:text-Lime-Green transition-all duration-200' href="#">Blog</a>
                        </div>
                        <div className='grid space-y-3 text-Light-Grayish-Blue'>
                            <a className='hover:text-Lime-Green transition-all duration-200' href="#">Careers</a>
                            <a className='hover:text-Lime-Green transition-all duration-200' href="#">Support</a>
                            <a className='hover:text-Lime-Green transition-all duration-200' href="#">Privacy Policy</a>
                        </div>
                    </div>
                    {/* button and copyright text  */}
                    <div className='flex items-center lg:items-end flex-col gap-4'>
                        <a className='text-White w-fit font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan hover:from-Bright-Cyan hover:to-Grayish-Blue transition-all delay-200' href='#'>Request Invite</a>
                        <p className='text-Grayish-Blue'>© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer