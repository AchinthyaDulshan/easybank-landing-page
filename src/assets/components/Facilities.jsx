import OnlineBankingIcon from '../images/icon-online.svg'
import SimpleBudgetingIcon from '../images/icon-budgeting.svg'
import FastOnboardingIcon from '../images/icon-onboarding.svg'
import OpenAPIIcon from '../images/icon-api.svg'


const Facilities = () => {

    const facilities = [{
        icon:OnlineBankingIcon,
        name: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        icon:SimpleBudgetingIcon,
        name: 'Simple Budgeting',
        description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },{
        icon:FastOnboardingIcon,
        name: 'Fast Onboarding',
        description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },{
        icon:OpenAPIIcon,
        name: 'Open API',
        description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
    ];

    return (
        <div className='bg-Light-Grayish-Blue'>
        <div className='max-w-7xl mx-auto py-20 px-8 text-center lg:text-left'>
            {/* section heading  */}
            <h1 className='text-4xl text-Dark-Blue text-center lg:text-left'>Why choose Easybank?</h1>
            {/* section text  */}
            <p className='text-lg text-Grayish-Blue lg:w-1/2 py-5'>We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.</p>
            {/* section cards  */}
            <div className='flex flex-wrap'>
                {facilities.map((facility,index)=>(
                    <div key={index} className='w-full lg:w-1/4 md:w-1/2 p-3'>
                        <img className='py-10 mx-auto lg:m-0 hover:translate-x-3 transition-transform duration-200' src={facility.icon} alt={facility.name} />
                        <h2 className='text-Dark-Blue text-xl pb-5'>{facility.name}</h2>
                        <p className='text-Grayish-Blue'>{facility.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Facilities