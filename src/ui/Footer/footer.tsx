import Instagram from "/public/icons/instagram.svg";
import Utube from "/public/icons/utube.svg";
import Telegram from "/public/icons/telegram.svg";
import Aparat from "/public/icons/aparat.svg";
import Image from "next/image";
import GoToTopButton from "./goToTopButton";
import MobileFooter from "./mobileFooter";

const Footer = () => {
  return (
    <>
    <MobileFooter />
    <footer>
      <section className="dark:bg-[#1F2433] grid grid-cols-2 items-center sm:w-[80%] w-[95%] m-auto mt-20 shadow-primary rounded-[30px_38px_0_0] relative py-6 px-8">
        <div className="md:flex hidden justify-between items-center">
          <h3>ارتباط با ما</h3>
          <div className="flex items-center first:ml-8">
            <h3>
              <strong>021</strong>
              28422742
            </h3>
            <h3>
              <strong>021</strong>
              28422741
            </h3>
          </div>
        </div>
        <GoToTopButton />
          <div className="flex md:col-span-1 col-span-2 xl:mr-40 sm:mr-16 mr-0 justify-between items-center">
            <a
              className="group flex justify-center items-center mr-2 p-2 rounded-[2rem] border-[1px] border-solid border-[#c0c0c0]"
              href="_blank"
            >
              <span className="text-[0] transition-all duration-300 group-hover:lg:text-[1rem] group-hover:text-[#fe021c]  group-hover:lg:ml-2 relative">
                my_tosheh
              </span>
              <Utube className="brightness-0 opacity-[.7] dark:invert-[1] group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
            </a>
            <a
              className="group flex justify-center items-center mr-2 p-2 rounded-[2rem] border-[1px] border-solid border-[#c0c0c0]"
              href="_blank"
            >
              <span className="text-[0] transition-all duration-300 group-hover:lg:text-[1rem] group-hover:text-[#e91e63]  group-hover:lg:ml-2 relative">
                mytosheh
              </span>
              <Aparat className="brightness-0 opacity-[.7] dark:invert-[1] group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
            </a>
            <a
              className="group flex justify-center items-center mr-2 p-2 rounded-[2rem] border-[1px] border-solid border-[#c0c0c0]"
              href="_blank"
            >
              <span className="text-[0] transition-all duration-300 group-hover:lg:text-[1rem] group-hover:bg-clip-text text-[transparent] group-hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)]  group-hover:lg:ml-2 relative">
                mytosheh@
              </span>
              <Instagram className="brightness-0 opacity-[.7] dark:invert-[1] group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
            </a>
            <a
              className="group flex justify-center items-center mr-2 p-2 rounded-[2rem] border-[1px] border-solid border-[#c0c0c0]"
              href="_blank"
            >
              <span className="text-[0] transition-all duration-300 group-hover:lg:text-[1rem] group-hover:text-[#20a0e1] group-hover:lg:ml-2 relative">
                mytosheh
              </span>
              <Telegram className="brightness-0 opacity-[.7] dark:invert-[1]  group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
            </a>
          </div>
      </section>
      <section className="dark:bg-[black] bg-[#F7F8F9] py-20 px-[10%]">
        <div className="grid gap-24 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 m-auto pb-6 border-b-[1px] border-[#ddd] xl:text-[1.25rem] lg:text-[1rem] md:text-[.75rem] ">
          <div>
            <a className="" href="_blank">
              <Image
                className="w-[150px] h-[150px]"
                src="/images/Enamad.png"
                alt="E-namad"
                width={150}
                height={150}
                sizes="100vw"
              />
            </a>
          </div>
          <ul>
            <li>دسترسی سریع</li>
            <li>توشه</li>
            <li>خرید ایرپاد</li>
            <li>خرید اپل واچ</li>
            <li>هدفون بی سیم</li>
          </ul>
          <ul>
            <li>خدمات مشتریان</li>
            <li>حساب کاربری</li>
            <li>شیوه کاری توشه</li>
            <li>قوانین و مقررات</li>
            <li>مجوزهای توشه</li>
          </ul>
          <div className="md:col-span-2">
            <div>
              <span className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={300}
                  height={111}
                />
                <h4>توشه من</h4>
              </span>
              <p>
                فروشگاه توشه به عنوان یک پلتفرم خرید محصولات فیزیکی به شکل پیش
                خرید / فروش، خدمات خود را به کاربران ارائه می دهد. خرید محصولات
                فیزیکی از فروشگاه اینترنتی موبایل توشه منجر می شود تا کاربر با
                هزینه کمتر از قیمت بازار آزاد، محصول دلخواه خود را در یک بازه
                زمانی توافق شده تحویل گیرد. فروشگاه توشه با پیش خرید محصولات
                فیزیکی از واردکنندگان معتبر کشور نسبت به تهیه محصولات اقدام
                می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
    </>
  );
};

export default Footer;
