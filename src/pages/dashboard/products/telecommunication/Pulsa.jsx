import { pulsaData } from "../../../../components/dashboard/products/Telecommunication";
import { NavLink } from "react-router-dom";
const PulsaPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold pl-1">Pulsa Page</h1>
      <div>
        <div className="cards-product mt-12">
          {pulsaData.map((data) => {
            return (
              <NavLink key={data.id} to={data.path}>
                <div className="card-product">
                  <div className="flex justify-center items-center pl-4">
                    <div className="mr-4">{data.logo}</div>
                    <div className="text-semibold text-white text-2xl">
                      {data.data_produk}
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PulsaPage;
