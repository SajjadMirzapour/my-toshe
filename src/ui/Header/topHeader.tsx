import Image from "next/image";
import HeartIcon from "/public/icons/heart.svg";
import BasketIcon from "/public/icons/basket.svg";
import PersonIcon from "/public/icons/person.svg";
import ToggleTheme from "./toggleButton";
import type { IProduct } from '@/lib/definitions';

// const x: number[] = [1, 2, 3 ]
function TopHeader() {

  const basket: IProduct[] = []

  return (
    <div className="md:flex hidden items-center justify-between p-2 pl-32 pr-64 ">
      <div></div>
      <Image
        className="lg:w-[20%] md:w-[30%]"
        width={200}
        height={200}
        src="/images/logo.png"
        alt="logo"
      />
      <ul className="nav flex justify-between w-80 dark:fill-white">
        <li>
          <ToggleTheme />
        </li>
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
          <div className="flex justify-center items-center absolute w-6 h-6 animate-ping-slow  text-white bg-[#2e81ff] rounded-[1rem] right-[-40%] top-[25%]">
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
        {/* <button onClick={handleDarkMode}>dark mode</button> */}
        {/* <DarkButton onClick={}/> */}
        {/* <CreateThemeCookie /> */}
      </ul>
    </div>
  );
}

export default TopHeader;