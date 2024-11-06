import { fetchMobilesData } from "@/lib/data";
import SortedCards from "@/app/mobiles/sortedCards";

async function CardContainer() {

    const mobiles = await fetchMobilesData()

    return (
        <div>
          <SortedCards mobiles={mobiles} />
        </div>

    );
}

export default CardContainer;