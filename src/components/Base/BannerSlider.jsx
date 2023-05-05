import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';


const BannerSlider = () => {
    const slides = [
        {
            id: 1,
            image: '',
            title: 'Аренда авто',
            subtitle: 'Обирай місце доставки, сів і поїхав',
            text: 'Доставка авто по всій україні',
        },
        {
            id: 2,
            image: '',
            title: 'Get up to 50% off on selected items',
            subtitle: 'Limited time offer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        {
            id: 3,
            image: '',
            title: 'Free shipping on all orders',
            subtitle: 'Limited time offer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        },
        ];

return (
    <div className='h-[300px]'>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="w-full h-full"
        >
        {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
            <div
                className="bg-cover bg-center h-full flex items-center justify-center bg-orange-500"
            >
                <div className='flex items-center justify-between w-full px-10'>
                    <div className="text-white text-left rounded-lg p-6">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h1>
                        <h2 className="text-lg md:text-xl mb-4">{slide.subtitle}</h2>
                        <p className="text-base md:text-lg mb-4">{slide.text}</p>
                        <button className="bg-[#231f20] rounded-3xl hover:bg-[#505050] text-white font-bold py-2 px-4">
                            Замовити зараз
                        </button>
                    </div>
                    <div className='w-[600px]'>
                        <img src="https://drivovo.com/static/media/vwgolfgti.e0d80a087ffff57d1b84.png" alt="" />
                    </div>
                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
);
};

export default BannerSlider;
