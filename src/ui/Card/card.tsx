import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IProps {
    id: any, name: any, src: any, src_hover: any, originalPrice: any
}

// type MyFuncType = (input: string) => number;

// const myFunc: MyFuncType  = (x) => {
//     return 10
// }

const Card: FC<IProps> = ({ id, name, src, src_hover, originalPrice }) => {

    const discountedPrice = Math.round(
        originalPrice.replaceAll("/", "") * 0.7
    ).toLocaleString();

    return (
        <Link className="group relative py-2 px-4" target="-blank" href={`/mobiles/${id}`}>
            <Image width={160} height={160} className="group-hover:opacity-0 flex duration-1000 visible opacity-100 m-auto mb-2" src={src} alt="عکس" />
            <Image width={160} height={160} className="group-hover:opacity-100 group-hover:block absolute top-0 left-0 right-0 duration-1000 opacity-0 m-auto mb-2" src={src_hover} alt="عکس دوم" />
            <p className="mb-2 text-[.85rem]">
                {name.length > 50 ? `${name.slice(0, 50)} ...` : name}
            </p>
            <div className="flex justify-between items-center mb-2 w-[100%] text-[.85rem]">
                <div>
                    <span className={clsx('ml-1 text-[#313131] dark:text-white', { 'line-through': originalPrice !== 'ناموجود' })}>{originalPrice}</span>
                    {originalPrice === "ناموجود" || <span>تومان</span>}
                </div>
                {originalPrice === "ناموجود" || (
                    <div>
                        <span className="ml-1 text-[#d90429] dark:text-[gray]">{discountedPrice}</span>
                        <span className="ml-1">تومان</span>
                    </div>
                )}
            </div>
            <button className="flex justify-center items-center bg-[#00113c] dark:bg-white text-white dark:text-[#00113c] rounded-lg w-[2rem] h-[2rem]">
                <span className="h-[inherit]">...</span>
            </button>
        </Link>);
}

export default Card;