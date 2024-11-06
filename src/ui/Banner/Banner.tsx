'use client'

import { Autoplay, Navigation, A11y, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

function Banner() {
    return (
        <section>
            <div className="md:block hidden">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination, Navigation, A11y]}
                    speed={900}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    effect={'fade'}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        disabledClass: "invisible",
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <Link className="flex justify-center items-center" href="/">
                            <Image
                                className="w-[100%] h-[25rem] rounded-2xl"
                                width={1215}
                                height={400}
                                src="/images/banner1.png"
                                alt="banner"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <Image
                                className="w-[100%] h-[25rem] rounded-2xl"
                                width={1215}
                                height={400}
                                src="/images/banner2.png"
                                alt="banner"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <Image
                                className="w-[100%] h-[25rem] rounded-2xl"
                                width={1215}
                                height={400}
                                src="/images/banner3.png"
                                alt="banner"
                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="md:hidden block my-10">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination, Navigation, A11y]}
                    speed={900}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    effect={'fade'}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        disabledClass: "invisible",
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <Link className="flex justify-center items-center" href="/">
                            <Image
                                className="w-[100%] h-[16rem] rounded-2xl"
                                width={340}
                                height={250}
                                src="/images/banner-mobile1.png"
                                alt="banner"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <Image
                                className="w-[100%] h-[16rem] rounded-2xl"
                                width={340}
                                height={250}
                                src="/images/banner-mobile2.png"
                                alt="banner"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="/">
                            <Image
                                className="w-[100%] h-[16rem] rounded-2xl"
                                width={340}
                                height={250}
                                src="/images/banner-mobile3.png"
                                alt="banner"
                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Banner;