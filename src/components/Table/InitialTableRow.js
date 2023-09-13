import Link from "next/link";
import React from "react";

function InitialTableRow({category,icon}) {
  return (
    <tr>
      <td className="text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
              {icon}
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{category}</p>
          </div>
        </div>
      </td>
      <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
        <Link href={`/buildpc/${category}`}>
          <button className="border py-2 px-6 rounded hover:bg-[#130436] hover:text-white">
            Add
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default InitialTableRow;
