'use client'

import Image from "next/image";
import BasketIcon from "/public/icons/basket.svg";
import PersonIcon from "/public/icons/person.svg";
import HeartIcon from "/public/icons/heart.svg";
import { IProduct } from "@/lib/definitions";

function mobileHeader() {



    const basket: IProduct[] = []

    return (
        <div
            className={`md:hidden grid grid-cols-3 border-t-[1px] dark:border-0 p-3 items-center dark:bg-[#1B1F2B] dark:text-[white] bg-white z-20  top-0 w-full transition-all duration-700 shadow-[0_0_15px_rgba(51,51,51,.15)] dark:shadow-[0_0_15px_gray]`}
        >
            <button>
            <Image className="text-[black] dark:text-white opacity-100" src={'/images/menu.png'} alt="dashboard" width={25} height={25} />
            </button>
            <Image
                className=""
                width={100}
                height={100}
                src="/images/logo.png"
                alt="logo"
            />
            <ul className="nav flex justify-between items-center dark:fill-white">
                <li className="ml-4">
                    <HeartIcon />
                </li>
                <li className="ml-4">
                    <PersonIcon />
                </li>
                <li className="group ml-4 relative dark:fill-white">
                    <div className="flex justify-center items-center absolute w-6 h-6 z-20 text-white bg-[#2e81ff] rounded-[1rem] right-[-40%] top-[25%]">
                        {/* {basketNumber} */}
                        0
                    </div>
                    <div className="flex justify-center items-center absolute w-6 h-6 animate-ping-slow text-white bg-[#2e81ff] rounded-[1rem] right-[-40%] top-[25%]">
                    </div>
                    <BasketIcon />
                    <div className="absolute top-10 left-4 min-w-[17rem] origin-top-left scale-0 duration-[600ms] p-2 z-10 bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.15)] group-hover:scale-100">
                        {basket.length ? (
                            <div className="">
                                {basket.map((el) => (
                                    <div
                                        className="flex justify-around border-b-[1px] border-red py-2 px-0 text-[.8rem]"
                                        key={el.id}
                                    >
                                        <Image
                                            className="flex max-w-28 m-auto"
                                            width={100}
                                            height={30}
                                            src={el.src}
                                            alt="سبد"
                                        />
                                        <div>
                                            <div>{el.name}</div>
                                            <div>{el.price} تومان</div>
                                            <div>{el.count} x</div>
                                        </div>
                                    </div>
                                ))}
                                {/* <p> قیمت کلی = {totalPrice.toLocaleString()}</p> */}
                            </div>
                        ) :
                            (
                                <div>
                                    <Image className="flex m-auto" width={200} height={200} src="/images/empty-basket.svg" alt="empty" />
                                    <p className="text-center py-3">سبد خرید شما در حال حاضر خالی است.</p>
                                </div>
                            )}
                        <a
                            className="flex justify-center bg-[#00113c] p-2 text-white rounded-2xl hover:bg-[#071e58] transition-all duration-500"
                            href={"/"}
                        >
                            بازگشت به فروشگاه
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default mobileHeader;
