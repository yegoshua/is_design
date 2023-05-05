import React from "react";
import BannerSlider from "../components/Base/BannerSlider";
import AdvategeCard from "../components/Base/AdvategeCard";
import WhatIsCard from "../components/Base/WhatIsCard";
import CarsSlider from "../components/Base/CarsSlider";
import ReviewCard from "../components/Base/ReviewCard";

const HomePage = () => {
    return <>
        <div className="block-container">
            <BannerSlider/>
        </div>
        <div className="flex w-full justify-center py-16"> 
            <AdvategeCard/>
            <AdvategeCard/>
            <AdvategeCard/>
            <AdvategeCard/>
        </div>
        <div className="block-container bg-[#f4f4f4] flex justify-center">
            <div className="flex flex-col max-w-[1282px] w-full">
                <div className="mt-20">
                    <h3 className="text-[50px]">Що таке підписка на авто?</h3>
                    <p className="text-[20px]">В місячну підписку входять всі затрати на експлуатацію, окрім ГСМ:</p>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-14 max-w-[1282px] h-[300px] w-full">
                <WhatIsCard/>
                <WhatIsCard/>
                <WhatIsCard/>
                <WhatIsCard/>
                <WhatIsCard/>
                <WhatIsCard/>
                <WhatIsCard/>
                <WhatIsCard/>
                </div>
            </div>
        </div>
        <div className="block-container py-12">
            <div className="flex">
                <div className="">
                    <img src="https://drivovo.com/static/media/orange-audi.266a51856b058a9aaebf.png" alt="" />
                </div>
                <div className="h-[564px] ml-[76px] w-[750px]">
                    <h3 className="text-[50px]">Яка з них твоя?</h3>
                    <div>
                        <div className="flex mt-[44px]">
                            <div className="bg-black text-white text-[20px] flex-shrink-0 rounded-full flex items-center justify-center h-[42px] w-[42px]">1</div>
                            <div className="mt-[8px] ml-[40px]">
                            <div className="text-[20px] mb-4">Обирай авто та бронюй тест-драйв у стилі FUN</div>
                                <div className="text-[16px]">
                                    <span className="text-[#ff5d00]">Тест-драйв у стилі FUN</span>
                                    <span className="HowItWorks_step__HxA8M HowItWorks_step__text__4rDWp"> - це коли авто приїжджає до тебе у зручний час та місце. Це драйв, коли в тебе є майже необмежений час на знайомство з твоїм новим авто!</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-[44px]">
                            <div className="bg-black text-white text-[20px] flex-shrink-0 rounded-full flex items-center justify-center h-[42px] w-[42px]">2</div>
                            <div className="mt-[8px] ml-[40px]">
                            <div className="text-[20px] mb-4">Обирай авто та бронюй тест-драйв у стилі FUN</div>
                                <div className="text-[16px]">
                                    <span className="text-[#ff5d00]">Тест-драйв у стилі FUN</span>
                                    <span className="HowItWorks_step__HxA8M HowItWorks_step__text__4rDWp"> - це коли авто приїжджає до тебе у зручний час та місце. Це драйв, коли в тебе є майже необмежений час на знайомство з твоїм новим авто!</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-[44px]">
                            <div className="bg-black text-white text-[20px] flex-shrink-0    rounded-full flex items-center justify-center h-[42px] w-[42px]">3</div>
                            <div className="mt-[8px] ml-[40px]">
                            <div className="text-[20px] mb-4">Обирай авто та бронюй тест-драйв у стилі FUN</div>
                                <div className="text-[16px]">
                                    <span className="text-[#ff5d00]">Тест-драйв у стилі FUN</span>
                                    <span className="HowItWorks_step__HxA8M HowItWorks_step__text__4rDWp"> - це коли авто приїжджає до тебе у зручний час та місце. Це драйв, коли в тебе є майже необмежений час на знайомство з твоїм новим авто!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="block-container bg-[#f4f4f4] h-[650px] flex justify-center">
            <div className="flex flex-col max-w-[1282px] w-full">
                <div className="mt-20">
                    <h3 className="text-[50px]">Яка з них твоя?</h3>
                    <p className="text-[20px]">Драйвово Хаб - поїхати за 30 хв</p>
                </div>
                <CarsSlider/>
            </div>
        </div>
        <div className="block-container flex justify-center py-16">
            <div className="max-w-[1300px] w-full">
                <div className="mb-[40px]">
                    <h3 className="text-[50px]">Наші <b>партнери</b></h3>
                </div>
                <div className="flex w-full justify-between">
                    <div className="partner-volkswagen parnter-logo"></div>
                    <div className="partner-volkswagen parnter-logo"></div>
                    <div className="partner-volkswagen parnter-logo"></div>
                    <div className="partner-volkswagen parnter-logo"></div>
                    <div className="partner-volkswagen parnter-logo"></div>
                </div>
            </div>
        </div>
        <div className="block-container flex justify-center py-16 bg-[#f4f4f4]">
            <div className="max-w-[1300px] w-full">
                <div className="mb-[40px]">
                    <h3 className="text-[50px]">Відгуки наших <br/><b>клієнтів</b></h3>
                </div>
                <div className="flex flex-wrap justify-between relative w-full items-start">
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </div>
            </div>
            
        </div>
    </>;
};

export default HomePage;
