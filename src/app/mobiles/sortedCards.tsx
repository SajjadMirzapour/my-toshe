'use client'

import Card from "@/ui/Card/card";
import { useState } from "react";

function SortedCards({ mobiles }: any) {
    const [sortedMobiles, setSortedMobiles] = useState(mobiles);
    const handleSort = (ev: any) => {
        setSortedMobiles((prev: any) => {
            const cb = (a: any, b: any) => +a.price.replaceAll('/', '') - +b.price.replaceAll('/', '');
            switch (ev.target.value) {
                case 'cheap':
                    return mobiles.toSorted(cb)
                case 'expensive':
                    return mobiles.toSorted((a: any, b: any) => cb(b, a))
                default:
                    return prev
            }
        })
    }

    return (
        <div>
            <div className="py-4 px-0 flex justify-between">
                <div>
                    <h3 className="mb-4">مرتب سازی بر اساس :</h3>
                    <select onChange={(ev) => handleSort(ev)} className="min-w-24 p-2 border-0 outline-none text-[1rem] rounded-2xl dark:text-[black]">
                        <option value="choose">انتخاب کنید</option>
                        <option value="expensive">گرانترین</option>
                        <option value="cheap">ارزان ترین</option>
                    </select>
                </div>
                <h3 className="flex justify-between font-bold">
                    <span className="ml-2"> {mobiles.length} </span>
                    <span>کالا</span>
                </h3>
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
                {sortedMobiles.map((mobile: any) => (
                    <div className="border-2 border-[#ececec] dark:border-[gray] rounded-md" key={mobile.id}>
                        <Card
                            id={mobile.id}
                            src={mobile.src}
                            name={mobile.name}
                            originalPrice={mobile.price}
                            src_hover={mobile.src_hover}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortedCards;