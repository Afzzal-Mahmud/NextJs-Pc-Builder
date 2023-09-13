import React from "react";

function TableHeading() {
  return (
    <tr className="bg-[#130436] text-center">
      <th className="text-left w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">
        Components
      </th>
      <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">
        Image
      </th>
      <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">
        Details
      </th>
      <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">
        Status
      </th>
      <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">
        Price
      </th>
      <th className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
        Remove
      </th>
    </tr>
  );
}

export default TableHeading;
