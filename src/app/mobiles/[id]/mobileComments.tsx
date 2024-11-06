'use client'

import { useState } from "react";

function MobileComments({mobile} : any) {

    const [showText, setShowText] = useState(-1);

    const handleShowexplains = () => {
        setShowText(-1);
    };

    const handleShowExtra = () => {
        setShowText(0);
    };

    const handleShowComments = () => {
        setShowText(1);
    };

    // const handleAddBasket = () => {
    //     addBasket(mobile)(dispatch);
    // };

    // const handleDeletBasket = () => {
    //     deleteBasket(mobile)(dispatch);
    // };


    return ( 

        <section className="p-4 my-4 mx-0 shadow-[0_0_15px_rgba(26,26,26,0.1)] rounded-2xl ">
            <div className="flex justify-around lg:w-[30%] md:w-[45%] mx-auto p-4">
                <button
                    className={`${showText === -1 && "text-blue"} font-bold`}
                onClick={handleShowexplains}
                >
                    توضیحات
                </button>
                <button
                    className={`${showText === 0 && "text-blue"} font-bold`}
                onClick={handleShowExtra}
                >
                    توضیحات تکمیلی
                </button>
                <button
                    className={`${showText === 1 && "text-blue"} font-bold`}
                onClick={handleShowComments}
                >
                    نظرات
                </button>
            </div>
            {showText === -1 ? (
                    <div>
                    <h3 className="text-[14px] sm:text-[20px] font-bold my-3">{mobile.name}</h3>
                    <p className="text-[13px] sm:text-[18px]">{mobile.description}</p>
                    </div>
                ) : showText === 0 ? (
                    <div className="text-[13px] sm:text-[18px]">too much explainnn</div>
                ) : (
                        <div className="text-[13px] sm:text-[18px]">
                        {mobile?.commenets?.map((com : any) => (
                            <p key={com}>{com}</p>
                        ))}
                    </div>
                )}
        </section>
     );
}

export default MobileComments;