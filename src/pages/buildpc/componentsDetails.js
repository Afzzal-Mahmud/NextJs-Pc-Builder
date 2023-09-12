import CpuCard from "@/components/cards/cpuCard";
import MonitorCard from "@/components/cards/monitorCard";
import MotherBoardsCard from "@/components/cards/motherBoardCard";
import PowerSupplyCard from "@/components/cards/powerSupplyCard";
import RamCard from "@/components/cards/ramCard";
import StorageDeviceCard from "@/components/cards/storageDeviceCard";
import NoFooterLayout from "@/layout/NoFooterLayout";
import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function AddComponentsDetails({ singleProduct }) {
  let ProductCardComponent;

  switch (singleProduct.ProductType) {
    case 'Monitor':
      ProductCardComponent = <MonitorCard singleProduct={singleProduct} />;
      break;
    case 'StorageDevice':
      ProductCardComponent = <StorageDeviceCard singleProduct={singleProduct} />;
      break;
    case 'PowerSupply':
      ProductCardComponent = <PowerSupplyCard singleProduct={singleProduct} />;
      break;
    case 'Ram':
      ProductCardComponent = <RamCard singleProduct={singleProduct} />;
      break;
    case 'MotherBoards':
      ProductCardComponent = <MotherBoardsCard singleProduct={singleProduct} />;
      break;
    default:
      ProductCardComponent = <CpuCard singleProduct={singleProduct}/>;
  }
  return (
    <>
      {ProductCardComponent}
    </>
  );
}

export default AddComponentsDetails;