import ConfettiImage from '../images/image-confetti.jpg'
import CurrencyImage from '../images/image-currency.jpg'
import PlaneImage from '../images/image-plane.jpg'
import RestaurantImage from '../images/image-restaurant.jpg'


const Articles = () => {

    // Article Details 
    const articles = [{
        image: CurrencyImage,
        createdBy: 'Claire Robinson',
        heading: 'Receive money in any currency with no fees',
        description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...'
    }, {
        image: RestaurantImage,
        createdBy: 'Wilson Hutton',
        heading: 'Treat yourself without worrying about money',
        description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...'
    }, {
        image: PlaneImage,
        createdBy: 'Wilson Hutton',
        heading: 'Take your Easybank card wherever you go',
        description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...'
    }, {
        image: ConfettiImage,
        createdBy: 'Claire Robinson',
        heading: 'Our invite-only Beta accounts are now live!',
        description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
    ];

    return (
        <div className='bg-Very-Light-Gray'>

        <div className='max-w-7xl mx-auto py-20 px-8'>
            {/* section heading  */}
            <h1 className='text-5xl text-Dark-Blue pb-10 text-center lg:text-left'>Latest Articles</h1>
            {/* article cards  */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
                {articles.map((article, index) => (
                    <div key={index} className='w-full rounded-md bg-White shadow-md'>
                        <img className='object-cover h-48 rounded-t-md  w-full' src={article.image} alt={article.heading} />
                        <div className='p-8 lg:p-4 mt-3'>
                            <p className='text-sm text-Grayish-Blue tracking-tighter'>by {article.createdBy}</p>
                            <h2 className='text-xl text-Dark-Blue py-3 hover:text-Lime-Green transition duration-200'>{article.heading}</h2>
                            <p className='tracking-tighter text-Grayish-Blue'>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Articles