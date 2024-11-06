'use client'

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../Card/card";

const Slider = ({ homeMobiles }: any) => {
    
    return (
        <div>
            <Swiper
                modules={[Navigation, A11y]}
                speed={900}
                // spaceBetween={50}
                breakpoints={{
                    1: {
                        slidesPerView: 1,
                        spaceBetween: 8,
                    },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 8,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 8,
                  },
                  1440: {
                    slidesPerView: 6,
                    spaceBetween: 8,
                  },
                }}
                // slidesPerView={6}
                // spaceBetween={8}
                navigation={{
                    disabledClass: "invisible",
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                {homeMobiles.map((mobile: any) => (
                    <SwiperSlide className="border-[1px] border-[#ececec] rounded-lg mb-20 w-[15%] max-h-96 py-2 pl-3 pb-0" key={mobile.id}>
                        <Card
                            src={mobile.src}
                            src_hover={mobile.src_hover}
                            name={mobile.name}
                            originalPrice={mobile.price}
                            id={mobile.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


export default Slider;