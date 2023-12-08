import banImg from './Banner.webp'
import './../../Layout/Root.css'
const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8  items-center'>
            <div className='p-4 space-y-3'>
                <h2 className='text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>TECH DEVICES</h2>
                <p className='text_color text-[15px]'>
                Technology is a vast field that includes electronic devices such as smartphones, laptops, tablets, and smartwatches. It also includes services such as cloud computing, artificial intelligence, and the Internet of Things (IoT). These technologies are transforming the way we live and work
                </p>
            </div>
            <div>
                <img className='md:rounded-full' src={banImg} alt="banner Img" />
            </div>
        </div>
    );
};

export default Banner;