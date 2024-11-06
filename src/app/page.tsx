import Category from "@/ui/Category/category";
import HomeMobiles from "@/ui/HomeMobiles/homeMobiles";
import { Suspense } from "react";
// import Loading from "./loading";
import Banner from "@/ui/Banner/Banner";
import CardSkeleton from "@/ui/CardSkeleton/cardSkeleton";

export default function Home() {
  return (
    <main className="w-[80%] mx-auto">
      <Banner />
      <Suspense fallback={<CardSkeleton />}>
        <HomeMobiles />
      </Suspense>
      <Category />
    </main>
  );
}
