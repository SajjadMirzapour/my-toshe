import { fetchMobilesData } from "@/lib/data";
import Link from "next/link";
import Slider from "./slider";

async function HomeMobiles() {

    const homeMobiles = await fetchMobilesData()

    return (
        <div>
            <h1 className="w-fit mb-4">
                <Link className="hover:text-hovered-text-color duration-300" href={'/mobiles'} target="_blank">
                    گوشی موبایل
                </Link>
            </h1>
            <Slider homeMobiles={homeMobiles} />
        </div>
    );
}

export default HomeMobiles;