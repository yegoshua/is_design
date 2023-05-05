import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';


const CarsSlider = () => {
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
    <div className='h-[452px]'>
        <Swiper
        spaceBetween={40}
        slidesPerView={1}
        // autoplay={{
        //     delay: 4000,
        //     disableOnInteraction: false,
        // }}
        loop={true}
        modules={[Autoplay,Navigation,Pagination]}
        pagination={{ clickable: true }}
        className="w-full h-full"
        >
        {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
            <div
                className="bg-cover bg-center h-full flex items-center justify-center"
            >
                <div className='flex flex-col items-center justify-start relative bg-white h-[392px] w-[420px] shadow-md mr-12 cursor-pointer p-10 rounded-xl'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/web-drivovo.appspot.com/o/cars%2Fvolkswagentrocstyle%2Fvolkswagentrocstyle.png?alt=media&token=674bb17b-4dcf-41e0-8442-75e2489c3f9f" alt="" />
                    <p className='font-bold text-[20px] mt-[30px] self-start'>Volkswagen T-Roc Style</p>
                    <p className='text-[16px] self-start'>Від 1135$ на місяць</p>
                </div>
                <div className='flex flex-col items-center justify-start relative bg-white h-[392px] w-[420px] shadow-md mr-12 cursor-pointer p-10 rounded-xl'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/web-drivovo.appspot.com/o/cars%2Fvolkswagentrocstyle%2Fvolkswagentrocstyle.png?alt=media&token=674bb17b-4dcf-41e0-8442-75e2489c3f9f" alt="" />
                    <p className='font-bold text-[20px] mt-[30px] self-start'>Volkswagen T-Roc Style</p>
                    <p className='text-[16px] self-start'>Від 1135$ на місяць</p>
                </div>
                <div className='flex flex-col items-center justify-start relative bg-white h-[392px] w-[420px] shadow-md mr-12 cursor-pointer p-10 rounded-xl'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/web-drivovo.appspot.com/o/cars%2Fvolkswagentrocstyle%2Fvolkswagentrocstyle.png?alt=media&token=674bb17b-4dcf-41e0-8442-75e2489c3f9f" alt="" />
                    <p className='font-bold text-[20px] mt-[30px] self-start'>Volkswagen T-Roc Style</p>
                    <p className='text-[16px] self-start'>Від 1135$ на місяць</p>
                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
);
};

export default CarsSlider;
