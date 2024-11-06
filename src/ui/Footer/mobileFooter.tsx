
import HeartIcon from "/public/icons/heart.svg";
import BasketIcon from "/public/icons/basket.svg";
import PersonIcon from "/public/icons/person.svg";
import Question from "/public/icons/question.svg";


function MobileFooter() {
    return (
        <div className="sm:hidden fixed w-full h-[55px] bottom-0 right-0 py-1 bg-white shadow-[0_0_15px_rgba(51,51,51,.15)] dark:shadow-[0_0_15px_gray] opacity-100 z-20 ">
            <ul className="grid grid-cols-4 gap-2 w-[90%] mx-auto text-[12px]">
                <li className="flex justify-center">
                    <div>
                        <div className="w-fit mx-auto">
                            <HeartIcon />
                        </div>
                        <div>علاقه مندی ها</div>
                    </div>
                </li>
                <li className="flex justify-center">
                    <div>
                        <div className="w-fit mx-auto">
                            <Question />
                        </div>
                        <div>سوالات</div>
                    </div>
                </li>
                <li className="flex justify-center">
                    <div>
                        <div className="w-fit mx-auto">
                            <BasketIcon />
                        </div>
                        <div>سبد خرید</div>
                    </div>
                </li>
                <li className="flex justify-center">
                    <div>
                        <div className="w-fit mx-auto">
                            <PersonIcon />
                        </div>
                        <div>حساب کاربری</div>
                    </div>
                </li>
            </ul>
        </div >
    );
}

export default MobileFooter;