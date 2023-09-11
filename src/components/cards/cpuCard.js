import MonitorCard from "@/components/cards/monitorCard";
import MotherBoardsCard from "@/components/cards/motherBoardCard";
import PowerSupplyCard from "@/components/cards/powerSupplyCard";
import RamCard from "@/components/cards/ramCard";
import StorageDeviceCard from "@/components/cards/storageDeviceCard";
import NoFooterLayout from "@/layout/NoFooterLayout";
import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function CpuCard({ singleProduct }) {
  /* review for Cpu */
  const [review, setReview] = useState(false);
  return (
    /* This default return statement is for Cpu and other components are in 
    src/components/cards folder */
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 mt-[6rem]">
      <div className="xl:w-2/6 lg:w-2/5 sm:w-80">
        <img
          className="w-full"
          alt="image of a pc component"
          src={singleProduct.Image}
        />
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center text-white w-full py-4 mt-4">
          Add To Build
        </button>
      </div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
            {singleProduct.Category}
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {singleProduct.ProductName}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Brand Name
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
              {singleProduct.KeyFeatures.Brand}
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Product Rating
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
              {singleProduct.Rating}
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
            Price
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
              $ {singleProduct.Price}
            </p>
          </div>
        </div>
        <div>
          <p className="text-bold leading-4 mt-7 text-gray-600 dark:text-gray-300">
            Highlighted Features
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
            Voltage: {singleProduct.KeyFeatures.Voltage}
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
            Specification: {singleProduct.KeyFeatures.Specification}
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
            Port: {singleProduct.KeyFeatures.Port}
          </p>
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div>
              <p className="text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 my-5">
                {singleProduct.Details}
              </p>
            </div>
            <div
              onClick={() => setReview(!review)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                Review
              </p>
              <button
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <IoIosArrowDropdownCircle />
              </button>
            </div>
            <div
              className={
                review
                  ? "pt-4 text-base pr-12 mt-4 text-gray-600 dark:text-gray-300"
                  : "hidden pt-4 text-base pr-12 mt-4 text-gray-600 dark:text-gray-300"
              }
            >
              {singleProduct?.Reviews?.map((eachReview,index) => (
                <p key={index}>{eachReview},</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CpuCard;
