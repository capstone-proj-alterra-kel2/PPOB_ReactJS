import "../../../assets/styles/dashboard.css";
// import logoRounded from "../../../assets/img/logo-rounded.png";
import {
  telekomunikasi,
  tagihan,
  voucher,
  keuangan,
} from "../../../components/dashboard/products/Products";
import { NavLink } from "react-router-dom";
import SidebarPage from "../../../components/dashboard/sidebar/Sidebar";
import { BreadcrumbProduts } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";

const ProductsPage = () => {
  return (
    <SidebarPage>
      <div className="p-8">
        <p className="text-base font-medium text-grey2">
          <BreadcrumbProduts />
        </p>
        <h1 className="text-3xl font-bold">Produk Kami</h1>
        <div>
          <h1 className="pt-6 pb-6 font-semibold text-2xl ">Telekomunikasi</h1>

          <div className="cards-product">
            {telekomunikasi.map((data) => {
              return (
                <NavLink key={data.id} to={data.path}>
                  <div className="card-product">
                    {/* <div className="flex justify-center items-center"> */}
                    {/* <img
                      src={logoRounded}
                      alt=""
                      className=" w-10 h-10  fixed"
                    /> */}
                    {/* </div> */}
                    <div className="flex justify-center items-center pl-4">
                      <div className="mr-4">{data.logo}</div>
                      <div className="text-semibold text-2xl">
                        {data.produk}
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="pt-6 pb-6 font-semibold text-2xl ">Tagihan</h1>
          <div className="cards-product">
            {tagihan.map((data) => {
              return (
                <div className="card-product">
                  <div className="flex justify-center items-center pl-4">
                    <div className="mr-4">{data.logo}</div>
                    <div className="text-semibold text-white text-2xl">
                      {data.produk}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="pt-6 pb-6 font-semibold text-2xl ">Voucher</h1>
          <div className="cards-product">
            {voucher.map((data) => {
              return (
                <div className="card-product">
                  <div className="flex justify-center items-center pl-4">
                    <div className="mr-4">{data.logo}</div>
                    <div className="text-semibold text-white text-2xl">
                      {data.produk}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="pt-6 pb-6 font-semibold text-2xl ">Tagihan</h1>
          <div className="cards-product">
            {keuangan.map((data) => {
              return (
                <div className="card-product mb-6">
                  <div className="flex justify-center items-center pl-4 ">
                    <div className="mr-4">{data.logo}</div>
                    <div className="text-semibold text-white text-2xl">
                      {data.produk}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SidebarPage>
  );
};

export default ProductsPage;
