'use client'

import Image from "next/image";
import BasketIcon from "/public/icons/basket.svg";
import ContentHeader from "./contentHeader";
import { IProduct } from "@/lib/definitions";
import { useEffect, useState } from "react";

function FixedHeader() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const basket: IProduct[] = []

  return (
    <div
      className={`md:grid grid-cols-6 hidden items-center justify-between dark:border-0 px-6 dark:bg-[#1B1F2B] dark:text-[white] bg-white z-20 fixed ${show ? "top-0" : "top-[-95px]"
        } w-full transition-all duration-700 shadow-[0_0_15px_rgba(51,51,51,.15)] dark:shadow-[0_0_15px_gray]`}
    >
      <ContentHeader />
      <span className="group flex justify-center col-span-1 relative dark:fill-white">
        <div className="flex justify-center items-center absolute w-6 h-6 z-20 text-white bg-[#2e81ff] rounded-[1rem] right-[40%] top-[25%]">
          {/* {basketNumber} */}
          0
        </div>
        <div className="flex justify-center items-center absolute w-6 h-6 animate-ping-slow text-white bg-[#2e81ff] rounded-[1rem] right-[40%] top-[25%]">
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
      </span>
    </div>
  );
}

export default FixedHeader;
