import SidebarPage from "../../../../../components/dashboard/sidebar/Sidebar";
import { pulsaData } from "../../../../../components/dashboard/products/Telecommunication";
import { NavLink } from "react-router-dom";

const PaketData = () => {
  return (
    <SidebarPage>
      <div className="p-6">
        <p className="text-base font-medium mb-11">
          {/* <BreadcrumbPulsa /> */}
        </p>
        <h1 className="text-3xl font-bold pl-1">Paket Data</h1>
        <div>
          <div className="cards-product mt-6">
            {pulsaData.map((data) => {
              return (
                <NavLink key={data.id} to={data.path}>
                  <div className="card-product">
                    <div className="flex justify-center items-center pl-4">
                      <div className="mr-4">{data.logo}</div>
                      <div>
                        <div className="text-semibold text-2xl">
                          {data.data_produk}
                        </div>
                        {/* <div className="text-base">Total Stok: {data.stok}</div> */}
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </SidebarPage>
  );
};

export default PaketData;
