import { fetchMobileData } from "@/lib/data";
import MobileDetail from "./mobileDetail";
import MobileComments from "./mobileComments";

async function Mobile({ params }: { params: { id: any } }) {

    const mobile = await fetchMobileData(params.id)
    return (
        <main className="w-[90%] mx-auto">
            <MobileDetail mobile={mobile} />
            <MobileComments mobile={mobile} />
            <section className=""></section>
        </main>
    );
}

export default Mobile;