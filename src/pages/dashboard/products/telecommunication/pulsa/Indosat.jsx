import { useEffect, useState } from "react";
import ICONS from "../../../../../assets/img";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Sidebar,
  NotFoundSearch,
  Pagination,
  DeleteProducts,
} from "../../../../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../../utils/Loading";
import { BreadcrumbPDSmartfren } from "../../../../../components/dashboard/breadcrumbs/BreadCrumbs";
import { setProducts } from "../../../../../redux/feature/ProductSlice";
import { GetProduct } from "../../../../../apis/produtcs";

const SmartfrenPagePaketData = () => {
  const Products = useSelector((state) => state.products.products);
  const [filterData, setFilterData] = useState([]);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentItems, setcurrentItems] = useState(filterData);
  const [counter, setCounter] = useState(0);

  const [showModalDel, setShowModalDel] = useState(false);
  const [id, setID] = useState("");

  useEffect(() => {
    GetProduct().then((res) => {
      setLoading(false);
      dispatch(setProducts(res));
    });
  }, [loading]);

  useEffect(() => {
    setFilterData(Products.filter((data) => data.provider_id === 11));
  }, [Products]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setSearch(getSearch);
    if (getSearch !== "") {
      const searchData = filterData.filter((item) =>
        item.name.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(filterData.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };
  return (
    <Sidebar>
      <div className="px-10 py-3">
        <div className="pb-5">
          <p className="text-base font-medium text-grayScale-60 mb-4">
            <BreadcrumbPDSmartfren />
          </p>
          <div className="mb-5 flex justify-between h-[64px]">
            <div className="not-italic text-2xl font-bold ">Pulsa Indosat</div>
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
                src={ICONS.addIcon}
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
            <NotFoundSearch />
          ) : (
            <>
              {currentItems.map((PaketData) => {
                return (
                  <div key={PaketData.id} className="card-component-2">
                    <div className="flex items-center flex-1 font-medium text-sm">
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
                    </div>
                    <div className="flex justify-center items-center">
                      {/* Edit  */}
                      <Link
                        to={`edit/${PaketData.id}`}
                        className="px-3 pt-[10px] pb-[10px]  text-primary-50 flex mr-2 "
                      >
                        <img
                          src={ICONS.editIcon}
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
                          src={ICONS.deleteIcon}
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
      <DeleteProducts
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
    </Sidebar>
  );
};

export default SmartfrenPagePaketData;
