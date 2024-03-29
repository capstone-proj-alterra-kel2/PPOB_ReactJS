import { useEffect, useState } from "react";
import SidebarPage from "../../../../../components/dashboard/sidebar/Sidebar";
import DelPaketDataTelkomsel from "../../../../../components/dashboard/products/DelPaketDataTelkomsel";
import icondel from "../../../../../assets/img/icon-delete.png";
import iconedit from "../../../../../assets/img/icon-edit2.png";
import iconAdd from "../../../../../assets/img/icon-add.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagination from "../../../../../components/dashboard/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../utils/Loading";
import Search from "../../../../../components/dashboard/search/Search";
import { setProducts } from "../../../../../redux/feature/ProductSlice";
import { BreadcrumbTelkomsel } from "../../../../../components/dashboard/breadcrumbs/BreadCrumbs";
import { GetProduct } from "../../../../../apis/produtcs";

const TelkomselPagePulsa = () => {
  const Products = useSelector((state) => state.products.products);
  const [filterData, setFilterData] = useState([]);
  const [currentItems, setcurrentItems] = useState(filterData);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const [showModalDel, setShowModalDel] = useState(false);
  const [id, setID] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    GetProduct().then((res) => {
      setLoading(false);
      dispatch(setProducts(res));
      // console.log("data product telkomsel", res);
    });
  }, [loading]);

  useEffect(() => {
    setFilterData(Products.filter((data) => data.provider_id === 10));
    setLoading(false);
  }, [Products]);
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setSearch(getSearch);
    if (getSearch !== "") {
      const searchData = filterData.filter(
        (item) =>
          item.name.toLowerCase().includes(getSearch) ||
          item.price_status.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(filterData.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };
  return (
    <SidebarPage>
      <div className="px-10 py-3">
        <div className="pb-5">
          <p className="text-base font-medium text-grayScale-60 mb-4">
            <BreadcrumbTelkomsel />
          </p>
          <div className="mb-5 flex justify-between h-[64px]">
            <div className="not-italic text-2xl font-bold ">
              Pulsa Telkomsel
            </div>
          </div>
          <div className="flex justify-between">
            <div className="search mr-5 w-[315px] bg-grayScale-10 rounded">
              <AiOutlineSearch className="mr-2" />
              <input
                type="text"
                value={search}
                placeholder="Search..."
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </div>
            <Link
              to="new"
              className=" gap-2 px-6 py-3  bg-primary-50 text-grayScale-10 cursor-pointer flex justify-center items-center rounded"
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
        <div className="flex flex-col cards h-[450px] flex-wrap">
          {loading ? (
            <div className="h-[100vh] flex justify-center items-center">
              <Loading />
            </div>
          ) : currentItems.length === 0 ? (
            <Search />
          ) : (
            <>
              {currentItems.map((PaketData) => {
                return (
                  <div key={PaketData.id} className="card-component-2">
                    <div className="flex items-center flex-1 font-medium text-sm">
                      <p></p>
                      <div className=" w-80 flex flex-col">
                        <div className="text-grayScale-60">Nama Produk</div>
                        <div className="text-lg font-semibold">
                          {PaketData?.name}
                        </div>
                      </div>
                      <div className=" w-60">
                        <div className="text-grayScale-60">Harga Produk</div>
                        <div className="text-lg font-semibold">
                          {formatter.format(PaketData?.price)}
                        </div>
                      </div>
                      <div className=" w-60">
                        <div className="text-grayScale-60">Stok Produk</div>
                        <div className="text-lg font-semibold">
                          {PaketData.stock}
                        </div>
                      </div>
                      <div className=" w-60">
                        <div className="text-grayScale-60">Produk</div>
                        <div className="text-lg font-semibold">
                          {PaketData.price_status}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      {/* Edit  */}
                      <Link
                        to={`edit/${PaketData.id}`}
                        className="px-3 pt-[10px] pb-[10px]  text-primary-50 flex mr-2 "
                      >
                        <img
                          src={iconedit}
                          className="w-[20px] h-[20px] mt-1"
                          alt="Edit"
                        />
                      </Link>
                      <button
                        className="px-3 pt-[10px] pb-[10px] text-error-50 flex"
                        onClick={() => {
                          setID(PaketData.id);
                          setShowModalDel(true);
                        }}
                      >
                        <img
                          src={icondel}
                          className="w-[20px] h-[20px] mt-1 "
                          alt="Delete"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <DelPaketDataTelkomsel
        isVisible={showModalDel}
        onClose={() => setShowModalDel(false)}
        id={id}
        setLoading={setLoading}
      />
      <Pagination
        Datas={filterData}
        setcurrentItems={setcurrentItems}
        currentItems={currentItems}
        loading={loading}
      />
    </SidebarPage>
  );
};

export default TelkomselPagePulsa;
