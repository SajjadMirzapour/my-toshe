import Image from "next/image";
import BottomHeader from "./bottomHeader";
import FixedHeader from "./fixedHeader";
import TopHeader from "./topHeader";
import FixedHeaderMobile from "./fixedHeaderMobile";
import MobileHeader from "./mobileHeader";

function Header({ setShowDashboard } : any) {
 
  return (
    <>
      <header className="relative">
        <TopHeader />
        <BottomHeader />
        {/* <MobileHeader /> */}
        <div className="md:hidden block relative w-[80%] mx-auto mt-20 mb-4">
          <input
            className="w-full h-[44px] lg:text-[13px] sm:text-[12px] text-[11px] rounded-[25px] border-[1px] border-[#e3dede] pl-12 pr-[20px]"
            type="text"
            placeholder="نام محصول مورد نظر را وارد کنید ..."
          />
          <button className="flex justify-center items-center absolute top-0 left-0 h-[44px] w-[73.8px] rounded-[25px] border-[1px] border-solid border-[#e3dede]">
            <Image width={20} height={20} src="/images/search.svg" alt="" />
          </button>
        </div>
        <FixedHeader />
        <FixedHeaderMobile setShowDashboard={setShowDashboard} /> 
      </header>
    </>
  );
}

export default Header;

// export default function Header(){
//     return (
//         <header>
//             سلام پسر
//         </header>
//     )
// }
