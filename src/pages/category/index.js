import RootLayout from "@/layout/RootLayout";
import { FaRegObjectGroup, FaPerbyte } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { LuMonitor } from "react-icons/lu";
import { BsFillDeviceSsdFill, BsLightningFill } from "react-icons/bs";

import React from "react";
import Link from "next/link";

export default function Category() {
  const pcComponentsCategory = [
    {
      ProductType: "Cpu",
      Category: "Cpu",
      CategoryIcon: <GiProcessor size={50} />,
    },
    {
      ProductType: "Monitor",
      Category: "Monitor",
      CategoryIcon: <LuMonitor size={50} />,
    },
    {
      ProductType: "StorageDevice",
      Category: "Storage Device",
      CategoryIcon: <BsFillDeviceSsdFill size={50} />,
    },
    {
      ProductType: "PowerSupply",
      Category: "Power Supply",
      CategoryIcon: <BsLightningFill size={50} />,
    },
    {
      ProductType: "Ram",
      Category: "Ram",
      CategoryIcon: <FaPerbyte size={50} />,
    },
    {
      ProductType: "MotherBoards",
      Category: "Motherboards",
      CategoryIcon: <FaRegObjectGroup size={50} />,
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mt-[7rem] mb-[8rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-5 pt-4 ml-[30%] sm:ml-[10%] md:ml-[3%]">

        {pcComponentsCategory.map((category, index) => (
          <Link key={index} href={`/categoryType/${category.ProductType}`}>
            <div className="bg-purple-600 text-white flex justify-center items-center flex-col w-[200px] max-w-[200px] py-[2em]">

              {category.CategoryIcon}
              <h3 className="text-white">{category.Category}</h3>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
