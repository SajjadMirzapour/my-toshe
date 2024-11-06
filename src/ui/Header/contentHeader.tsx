
'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

function ContentHeader() {
  const pathname = usePathname()

  return (
    <div className="md:grid grid-cols-5 col-span-5 hidden items-center w-[90%] mx-auto border-[#e3dede] py-4 relative">
      <div className="relative col-span-2">
        <input
          className="w-full h-[44px] lg:text-[13px] sm:text-[10px] text-[8px] rounded-[25px] border-[1px] border-[#e3dede] pl-12 pr-[20px]"
          type="text"
          placeholder="نام محصول مورد نظر را وارد کنید ..."
        />
        <button className="flex justify-center items-center absolute top-0 left-0 h-[44px] w-[73.8px] rounded-[25px] border-[1px] border-solid border-[#e3dede]">
          <Image width={20} height={20} src="/images/search.svg" alt="" />
        </button>
      </div>
      <ul className="flex col-span-3 mr-8 xl:text-[1rem]  lg:text-[.75rem]  md:text-[.65rem]">
        <li className="relative font-bold me-4 last:me-0">
          <a
            className={`${pathname.indexOf("/") > -1 && "text-[blue]"
              }`}
            href="/"
          >
            توشه من
          </a>
        </li>
        <li className="group/menu relative me-4 last:me-0 font-bold">
          <span className="hover:text-[blue]">محصولات</span>
          <ul className="block absolute dark:text-[black] top-8 p-6 z-[7] text-xs bg-white rounded-[.2rem] opacity-0 transition-all duration-500 w-[340%] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] invisible group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:transition-all group-hover/menu:duration-500">
            <li className="group/submenu p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                گوشی موبایل
              </a>
              <ul className="block absolute top-0 right-[125%] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] p-6 z-[7] bg-white rounded-lg invisible opacity-0 transition-all duration-500 w-[80%] group-hover/submenu:visible group-hover/submenu:opacity-100 group-hover/submenu:right-[105%]">
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    گوشی اپل
                  </a>
                </li>
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    گوشی سامسونگ
                  </a>
                </li>
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    گوشی شیائومی
                  </a>
                </li>
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    گوشی آنر
                  </a>
                </li>
              </ul>
            </li>
            <li className="group/submenu2 p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                تبلت
              </a>
              <ul className="hover:text-[blue] absolute top-14 right-[125%] p-6 z-[7] rounded-lg opacity-0 invisible w-[80%] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] bg-white transition-all duration-500 group-hover/submenu2:visible group-hover/submenu2:opacity-100 group-hover/submenu2:right-[105%]">
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    تبلت اپل
                  </a>
                </li>
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    تبلت سامسونگ
                  </a>
                </li>
                <li className="relative p-2 text-[.75rem]">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:text-[10px] before:text-red before:right-[-.5rem]"
                    href="/"
                  >
                    تبلت مایکروسافت
                  </a>
                </li>
              </ul>
            </li>
            <li className="p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                ساعت هوشمند
              </a>
              <ul className="block absolute t-[-1.5rem] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] p-6 z-[7] bg-white rounded-lg invisible opacity-0 transition-all duration-500 w-[80%] r-[125%]  group-hover:visible group-hover:opacity-100 group-hover:r-[115%]">
                <li className="relative">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:right-[-.5rem] before:text-[10px] text-[red]"
                    href="/"
                  >
                    اپل واچ
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:right-[-.5rem] before:text-[10px] text-[red]"
                    href="/"
                  >
                    ساعت هوشمند سامسونگ
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="hover:text-[blue] before:content-['*'] before:absolute before:right-[-.5rem] before:text-[10px] text-[red]"
                    href="/"
                  >
                    ساعت هوشمند شیائومی
                  </a>
                </li>
              </ul>
            </li>
            <li className="p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                کنسول بازی
              </a>
            </li>
            <li className="p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                کامپیوتر همه کاره
              </a>
              <ul className="block absolute t-[-1.5rem] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] p-6 z-[7] bg-white rounded-lg invisible opacity-0 transition-all duration-500 w-[80%] r-[125%]  group-hover:visible group-hover:opacity-100 group-hover:r-[115%]">
                <li>
                  <a href="/">کامپیوتر همه کاره msi</a>
                </li>
              </ul>
            </li>
            <li className="p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                لپ تاپ
              </a>
              <ul className="hover:text-[blue] block absolute t-[-1.5rem] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] p-6 z-[7] bg-white rounded-lg invisible opacity-0 transition-all duration-500 w-[80%] r-[125%]  group-hover:visible group-hover:opacity-100 group-hover:r-[115%]">
                <li>
                  <a href="/">اپل لپ تاپ</a>
                </li>
              </ul>
            </li>
            <li className="p-2">
              <a
                className="hover:text-[blue] after:content-['>'] after:text-[black] after:absolute after:left-2 after:text-[10px] before:content-['*'] before:absolute before:right-2 before:text-[10px] before:text-[red]"
                href="/"
              >
                موس و کیبورد
              </a>
              <ul className="block absolute t-[-1.5rem] shadow-[0_0_15px_0_rgba(41,41,41,0.13)] p-6 z-[7] bg-white rounded-lg invisible opacity-0 transition-all duration-500 w-[80%] r-[125%]  group-hover:visible group-hover:opacity-100 group-hover:r-[115%]">
                <li>
                  <a href="/">موس کیبورد اپل</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav__topic font-bold me-4 last:me-0">
          <a className="" href="/"> خدمات گارانتی</a>
        </li>
        <li className="nav__topic font-bold me-4 last:me-0">
          <a className="" href="/تماس-با-ما">تماس با ما</a>
        </li>
        <li className="nav__topic font-bold me-4 last:me-0">
          <a className="" href="/مجله-اینترنتی">بلاگ</a>
        </li>
      </ul>
    </div>
  );
}

export default ContentHeader;