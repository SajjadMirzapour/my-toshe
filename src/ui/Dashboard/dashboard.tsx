import clsx from "clsx";
import Link from "next/link";
import PersonIcon from "/public/icons/person.svg";


function DAshboard({ showDashboard, setShowDashboard }: any) {
    return (
        <>
            <div className={clsx('md:hidden flex fixed top-0 right-0 w-full h-full  z-20 duration-500', { 'right-0': showDashboard === true, 'right-[-100%]': showDashboard === false })}>
                <div className="w-[250px] dark:bg-[black] bg-white p-4">
                    <h1 className="text-[20px] font-bold mb-6">فروشگاه اینترنتی توشه</h1>
                    <ul className="mb-6">
                        <li className="mb-2">
                            <Link href={''}>توشه من</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={''}>محصولات</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={''}>خدمات گارانتی</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={''}>بلاگ</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={''}>تماس با ما</Link>
                        </li>
                    </ul>
                    <div className="mx-auto w-fit">
                        <button className="flex mx-auto">
                            <PersonIcon />
                        </button>
                        <div>ورود / ثبت نام</div>
                    </div>
                </div>
                <div className="w-[calc(100%-250px)] h-full" onClick={() => setShowDashboard(false)}></div>
            </div>
            <div className={clsx('md:hidden flex fixed top-0 right-0 w-full h-full bg-[gray]  z-[19] duration-0 opacity-65', { 'right-0': showDashboard === true, 'right-[-100%]': showDashboard === false} )}></div>
        </>
    );
}

export default DAshboard;