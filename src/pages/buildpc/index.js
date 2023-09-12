import NoFooterLayout from "@/layout/NoFooterLayout";
import Swal from "sweetalert2";
import { FaRegObjectGroup, FaPerbyte } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { LuMonitor } from "react-icons/lu";
import { BsFillDeviceSsdFill, BsLightningFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "@/components/Table/TableRow";
import TableHeading from "@/components/Table/TableHeading";
import InitialTableRow from "@/components/Table/InitialTableRow";
import { clearAndCheckout } from "@/Redux/buildPcSlice";

function BuildPcPage() {
  const { components } = useSelector((state) => state.pcComponents);
  const dispatch = useDispatch();
  const cpuData = components.find((element) => element.ProductType === "Cpu");
  const ramData = components.find((element) => element.ProductType === "Ram");
  const monitorData = components.find(
    (element) => element.ProductType === "Monitor"
  );
  const storageDeviceData = components.find(
    (element) => element.ProductType === "StorageDevice"
  );
  const motherBoardData = components.find(
    (element) => element.ProductType === "MotherBoards"
  );
  const powerSupplyData = components.find(
    (element) => element.ProductType === "PowerSupply"
  );

  // Define an array of conditions
  const conditions = [
    "Cpu",
    "Ram",
    "Monitor",
    "StorageDevice",
    "MotherBoards",
    "PowerSupply",
  ];

  // Check if all conditions are true
  const allConditionsAreTrue = conditions.every((condition) =>
    components.some((element) => element.ProductType === condition)
  );

  const handleCheckout = async () => {
    await dispatch(clearAndCheckout());
    await Swal.fire("Good job!", "You build is clear now see cart", "success");
  };

  /* Note : I break down each <tr> table-row into seperate components--> src/components/cards */ 

  /* (1) 
  The buildpc page start hear and for each category we take the data form the store then send it to the src/components/Table 
  (2)
  Then InitialTableRow comes into play for dynamic category rendaring by using Add button 
  (3)
  Then by clicking add button render dynamic data on src/pages/buildpc/[addcomponents].js and hear we find the eachCategory(ram,cpu etc) array then we map each category object data
  (4)
  Then we render 4-data on src/components/cards data through buildpc/componentsDetails.js*/


  return (
    <section className="bg-white py-20 mt-[4rem]">
      <div className="container w-full m-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <TableHeading />
                </thead>
                <tbody>
                  {cpuData ? (
                    <TableRow
                      componentData={cpuData}
                      icon={<GiProcessor className="w-full h-full" />}
                    />
                  ) : (
                    <InitialTableRow
                      category={"Cpu"}
                      icon={<GiProcessor className="w-full h-full" />}
                    />
                  )}
                  {monitorData ? (
                    <TableRow
                      componentData={monitorData}
                      icon={<LuMonitor className="w-full h-full" />}
                    />
                  ) : (
                    <InitialTableRow
                      category={"Monitor"}
                      icon={<LuMonitor className="w-full h-full" />}
                    />
                  )}
                  {ramData ? (
                    <TableRow
                      componentData={ramData}
                      icon={<FaPerbyte className="w-full h-full" />}
                    />
                  ) : (
                    <InitialTableRow
                      category={"Ram"}
                      icon={<FaPerbyte className="w-full h-full" />}
                    />
                  )}
                  {storageDeviceData ? (
                    <TableRow
                      componentData={storageDeviceData}
                      icon={<FaRegObjectGroup className="w-full h-full" />}
                    />
                  ) : (
                    <InitialTableRow
                      category={"StorageDevice"}
                      icon={<FaRegObjectGroup className="w-full h-full" />}
                    />
                  )}
                  {motherBoardData ? (
                    <TableRow
                      componentData={motherBoardData}
                      icon={<BsFillDeviceSsdFill className="w-full h-full" />}
                    />
                  ) : (
                    <InitialTableRow
                      category={"MotherBoards"}
                      icon={<BsFillDeviceSsdFill className="w-full h-full" />}
                    />
                  )}
                  {powerSupplyData ? (
                    <TableRow
                      componentData={powerSupplyData}
                      icon={<BsLightningFill className="w-full h-full" />}
                    />
                  ) : (
                    <InitialTableRow
                      category={"PowerSupply"}
                      icon={<BsLightningFill className="w-full h-full" />}
                    />
                  )}
                </tbody>
              </table>
              {allConditionsAreTrue ? (
                <button
                  onClick={handleCheckout}
                  className="border py-2 px-6 mt-4 rounded"
                >
                  Add To Cart
                </button>
              ) : (
                <button className="border py-2 px-6 mt-4 rounded cursor-not-allowed">
                  Add Components First
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildPcPage;

BuildPcPage.getLayout = function getLayout(page) {
  return <NoFooterLayout>{page}</NoFooterLayout>;
};
