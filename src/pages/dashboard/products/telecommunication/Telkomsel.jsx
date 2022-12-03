import icondel from "../../../../assets/img/icon-delete.png";
import iconedit from "../../../../assets/img/icon-edit2.png";
import iconAdd from "../../../../assets/img/icon-add.png";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

import { useState } from "react";
import { produts } from "../../../../apis/produtcs";
import { AiOutlineSearch } from "react-icons/ai";
import SidebarPage from "../../../../components/dashboard/sidebar/Sidebar";
import { BreadcrumbTelkomsel } from "../../../../components/dashboard/breadcrumbs/BreadCrumbs";
import { Link } from "react-router-dom";

const TelkomselPage = () => {
  const [dataProducts, setDataProducts] = useState(produts);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);

  return (
    <SidebarPage>
      <div className="px-10 py-3">
        <div className="pb-5">
          <div className="mb-5 flex justify-between h-[64px]">
            <div className="flex flex-col">
              <div className="not-italic text-2xl font-bold ">
                Pulsa Telkomsel
              </div>
              <p className="text-base font-medium text-grey2">
                <BreadcrumbTelkomsel />
              </p>
            </div>
            <div className="flex items-end text-white">
              <button className="bg-green py-3 px-4 rounded-full flex justify-center items-center text-sm mr-5 font-semibold">
                <AttachMoneyOutlinedIcon className="mr-1 w-5 h-5" />
                <div>Normal</div>
              </button>
              <button className="border border-primary50 text-primary50 py-3 px-4 rounded-full flex justify-center items-center text-sm font-semibold">
                <div className="mr-2"> x</div>
                <div>Normal</div>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="search mr-5 w-[216px] bg-white rounded-xl">
              <AiOutlineSearch className="mr-2" />
              <input
                type="text"
                value={search}
                placeholder="Search..."
                // onChange={(e) => {
                //   handleSearch(e);
                // }}
              />
            </div>
            <Link
              to="new"
              className=" w-[185px] gap-2 px-5 pt-[10px] pb-[10px] bg-primary50 text-white cursor-pointer flex justify-center items-center rounded-xl"
              // onClick={() => {
              //   setShowModal2(true);
              // }}
            >
              <img
                src={iconAdd}
                style={{ width: "22px", height: "22px" }}
                alt="ADD"
              />
              <div className="text-base">Tambah Produk</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col cards h-[450px]">
          <div
            // key={item.id}
            className="card h-[80px] mb-2 bg-white flex items-center justify-between px-6 py-4 gap-16 rounded-xl"
          >
            <div className="flex items-center flex-1 font-medium text-sm">
              <div className=" mr-5 relative">
                {/* <img
                        src={item.avatar}
                        alt="Item"
                        className="w-[55px] h-[55px] rounded-full"
                      /> */}
              </div>
              <div className="pr-[25px] w-60">
                <div className="text-grey2">Nama Produk</div>
                <div className="text-lg font-semibold">Pulsa 5.000</div>
              </div>
              <div className="pr-[25px] w-60">
                <div className="text-grey2">Harga Produk</div>
                <div className="text-lg font-semibold">Rp. 7.0000,00</div>
              </div>
              <div className="pr-[25px] w-60">
                <div className="text-grey2">Stok Produk</div>
                <div className="text-lg font-semibold">123</div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="px-3 pt-[10px] pb-[10px]  text-primary50 flex mr-2 "
                // onClick={() => {
                //   setID(item.id);
                //   setShowModal(true);
                // }}
              >
                <img
                  src={iconedit}
                  className="w-[20px] h-[20px] mt-1"
                  alt="Edit"
                />
              </button>
              <button
                className="px-3 pt-[10px] pb-[10px] text-error50 flex"
                // onClick={() => {
                //   setID(item.id);
                //   setShowModal3(true);
                // }}
              >
                <img
                  src={icondel}
                  className="w-[20px] h-[20px] mt-1 "
                  alt="Delete"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarPage>
  );
};

export default TelkomselPage;

//   useEffect(() => {
//     const loweredSearchedWords = search.toLowerCase();
//     const updatedDataProducts = [];
//     if (search !== "") {
//       dataProducts.forEach((dataProduct) => {
//         const lowerProducts = dataProduct.name.toLowerCase();
//         if (lowerProducts.includes(loweredSearchedWords)) {
//           updatedDataProducts.push(dataProduct);
//         }
//       });
//       setDataProducts2(updatedDataProducts);
//     } else {
//       setDataProducts2(dataProducts);
//     }
//   }, [dataProducts, search]);

//   function reducer(acc, cur) {
//     return { ...acc, [cur.id]: cur };
//   }
//   const newDatas = dataProducts.reduce(reducer, {});
//   setData(newDatas);

//   console.log("new Datas", newDatas);
