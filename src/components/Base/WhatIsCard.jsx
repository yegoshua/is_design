import React from "react";

const WhatIsCard = () => {
    return (
        <div className="flex items-center rounded-xl shadow-md h-[115px] justify-evenly w-[292px] relative bg-white px-8">
            <div className="bg-[#ff5d00] text-sm absolute left-[-18px] flex items-center justify-center
            top-[-18px] w-[36px] h-[36px] rounded-full text-white text-[16px]">1</div>
            <div className="text-[20px]">
                Реєстрація авто + оплата податків (ПФ, податок на розкіш)
            </div>
        </div>
    );
};

export default WhatIsCard;
