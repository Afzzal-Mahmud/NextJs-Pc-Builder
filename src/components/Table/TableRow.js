import { removePcComponents } from "@/Redux/buildPcSlice";
import React from "react";
import { useDispatch } from "react-redux";

function TableRow({ componentData, icon }) {
  const dispatch = useDispatch()
  return (
    <tr>
      <td className="text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">{icon}</div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {componentData.Category}
            </p>
          </div>
        </div>
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]">
        <img
          className="w-full h-full"
          src={componentData.Image}
          alt="components-image"
        />
      </td>
      <td className="text-left text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
        {componentData.Details}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] ">
        {componentData.Status}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
        $ {componentData.Price}
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
        <button onClick={()=> dispatch(removePcComponents(componentData._id))} className="border py-2 px-6 rounded hover:bg-[#130436] hover:text-white">
          Remove
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
