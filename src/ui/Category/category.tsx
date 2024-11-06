// import "./category.scss";

import Image from "next/image";

function Category() {
  return (
    <section className="py-10">
      <h1 className="flex w-[30%] m-auto justify-center text-center mb-6 text-[2rem]">دسته‌بندی‌های توشه</h1>
      <ul className="grid gap-10 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <li className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/images/categories1.png"
            alt="category"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/images/categories2.png"
            alt="category"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/images/categories3.png"
            alt="category"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/images/categories4.png"
            alt="category"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/images/categories5.png"
            alt="category"
          />
        </li>
        <li className="flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src="/images/categories6.png"
            alt="category"
          />
        </li>
      </ul>
    </section>
  );
}

export default Category;
