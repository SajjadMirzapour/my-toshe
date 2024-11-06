'use client'

import Image from "next/image";
import HeartIcon from 'public/icons/heart.svg'
import { useEffect, useRef, useState } from "react";

const MAPPED_COLORS = {
    yellow: 'زرد',
    red: 'قرمز',
    black: 'مشکی'
}

function MobileDetail({ mobile }: any) {


    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            setMyImageSource(mobile.src);
        } else {
            mounted.current = true;
        }
    }, [mobile]);


    const [myImageSource, setMyImageSource] = useState(mobile.src);

    const handleFirstImage = () => {
        setMyImageSource(() => mobile.src);
    };

    const handleSecondImage = () => {
        setMyImageSource(() => mobile.src_hover);
    };


    return (
        <section className="lg:flex md:block justify-between rounded-2xl p-4 shadow-[0_0_15px_rgba(26,26,26,0.1)]">
            <div>
                <div className="relative sm:w-[400px] max-[639px]:w-[300px] max-[400px]:w-[240px] z-2 p-4">
                    <div>
                        <Image
                            className="group w-[-webkit-fill-available] rounded-2xl hover:cursor-zoom-in"
                            src={myImageSource}
                            alt={mobile.description}
                            width={200}
                            height={200}
                        />
                        <div className="absolute top-8 right-12 p-2 border-[1px] border-[white] border-solid rounded-2xl filter-[opacity(.75)]">
                            <a className="" href="zoom">
                                <Image className="w-8 h-8" src="/images/search.svg" alt="zoom" width={200}
                                    height={200} />
                            </a>
                            <button className="block">
                                <Image className="w-8 h-8" src="/images/Empty-basket.svg" alt="like" width={200}
                                    height={200} />
                            </button>
                            <button className="block">
                                <HeartIcon className="w-[42.5px]" />
                            </button>
                        </div>
                    </div>
                    <Image className="absolute top-0 w-[400px] h-[400px] z-[3] opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:z-[4] group-hover:scale-150"
                        src={mobile.src}
                        alt="zoomed-img"
                        width={200}
                        height={200} />
                </div>
                <div className="flex justify-around items-center">
                    <button onClick={handleFirstImage}>
                        <Image className="max-[400px]:w-32 w-24" width={128} height={128} src={mobile.src} alt={mobile.description} />
                    </button>
                    <button onClick={handleSecondImage}>
                        <Image className="max-[400px]:w-32 w-24" width={128} height={128} src={mobile.src_hover} alt={mobile.description} />
                    </button>
                </div>
            </div>
            <div className="p-4">
                <div>
                    <h3 className="font-bold mb-2">{mobile.name}</h3>
                    <span className="font-bold">قیمت : </span>
                    <span className="mb-4">{mobile.price} تومان</span>
                    <div>
                        <h4 className="mb-3">رنگ ها :</h4>
                        <div className="grid grid-cols-3 mb-4">
                            {/* {console.log('hi',  mobile?.colors )} */}
                            {mobile?.colors?.map((el) => (
                                <div className="flex justify-around items-center sm:w-28 w-16 py-2 px-4 border-[1px] border-[black] dark:border-white rounded-2xl ml-4" key={el}>
                                    <span
                                        className={`flex sm:min-w-4 min-w-2 sm:h-4 h-2 ml-1`}
                                        style={{backgroundColor: el}}
                                    ></span>
                                    <span className="sm:text-[16] text-[13px]">
                                        {MAPPED_COLORS[el] || 'آبی'}
                                        {/* {el === "yellow"
                                            ? "زرد"
                                            : el === "red"
                                                ? "قرمز"
                                                : el === "black"
                                                    ? "مشکی"
                                                    : "آبی"} */}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-40 bg-[#00113c] rounded-3xl py-2 px-4 text-white my-8 mx-0 hover:bg-[#4dae2b] transition-all duration-[400ms]">
                        <button
                            className="flex items-center justify-around w-4 h-4 text-white disabled:cursor-not-allowed"
                            // onClick={handleAddBasket}
                            disabled={mobile.price === "ناموجود"}
                        >
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-white" d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <span>اعمال تغییر</span>
                        <button
                            className="flex items-center justify-around w-4 h-4 text-white disabled:cursor-not-allowed"
                        // onClick={handleDeletBasket}
                        >
                            <span>-</span>
                        </button>
                    </div>
                </div>
                <div className="">
                    <h3 className="my-3 font-bold">بررسی اجمالی محصول</h3>
                    <p className="sm:text-[18px] text-[13px]">
                        با توجه به اینکه فروش این محصول در بازه زمانی هشت هفته کاری نیز
                        عرضه می‌شود، تضمینی برای تحویل محصول از نوع مونتاژ کشور ویتنام یا
                        هند وجود ندارد. گوشی از نوع ریجستر شده به همراه گارانتی معتبر
                        داخلی است. چنانچه سفارش شما از نوع هشت هفته کاری باشد در این حالت
                        بابت ضمانت در تحویل محصول یک فقره سفته الکترونیک ( به میزان مبلغ
                        پرداختی ) و قرارداد رسمی شرکتی صادر می‌شود. صدور قرارداد و سفته
                        الکترونیک حداکثر ۴۸ ساعت کاری پس از ثبت سفارش، توسط واحد حقوقی
                        فروشگاه اینترنتی توشه برای شما ارسال می‌شود.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MobileDetail;