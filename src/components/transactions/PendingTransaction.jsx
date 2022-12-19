import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Pagination from "../dashboard/pagination/Pagination";
import Search from "../dashboard/search/Search";
import { useSelector } from "react-redux";

const PendingTransaction = () => {
  const DataTranactionsRedux = useSelector(
    (state) => state.products.transactions
  );
  const [search, setSearch] = useState("");
  const [dataFilter, setDataFilter] = useState(DataTranactionsRedux); // data yang diolah
  const [currentItems, setcurrentItems] = useState(dataFilter);
  const [counter, setCounter] = useState(0);

  // loading
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setSearch(getSearch);
    if (getSearch !== "") {
      const searchData = dataFilter.filter((item) =>
        item.user_email.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(dataFilter.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };

  const dataFilteringBYProduct = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setDataFilter(DataTranactionsRedux);
    } else if (value === "pulsa") {
      const Product = DataTranactionsRedux.filter(
        (item) => item.product_type === "Pulsa"
      );
      setDataFilter(Product);
    } else if (value === "Paket Data") {
      const Product = DataTranactionsRedux.filter(
        (item) => item.product_type === "Paket Data"
      );
      setDataFilter(Product);
    } else if (value === "Token Listik") {
      const product = DataTranactionsRedux.filter(
        (item) => item.product_type === "Token Listik"
      );
      setDataFilter(product);
    } else if (value === "Tagihan Listrik") {
      const product = DataTranactionsRedux.filter(
        (item) => item.product_type === "Tagihan Listrik"
      );
      setDataFilter(product);
    } else if (value === "Tagihan PDAM") {
      const product = DataTranactionsRedux.filter(
        (item) => item.product_type === "Tagihan PDAM"
      );
      setDataFilter(product);
    } else if (value === "BPJS") {
      const product = DataTranactionsRedux.filter(
        (item) => item.product_type === "BPJS"
      );
      setDataFilter(product);
    }
  };

  return (
    <div>
      <div className="sub-menu flex justify-between  flex-wrap pb-3 pt-5 ">
        <div className="search w-[315px] bg-white rounded h-[45px] m-1">
          <AiOutlineSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
        <div className="drop-down w-[154px] bg-white h-[45px] m-1 flex justify-center">
          <select
            className=" w-[154px]"
            onChange={(e) => dataFilteringBYProduct(e)}
          >
            <option value="all" selected>
              Semua
            </option>
            <option value="pulsa">Isi Pulsa</option>
            <option value="Paket Data">Paket Data</option>
            <option value="Token Listik">Token Listrik</option>
            <option value="Tagihan Listrik">Tagihan Listrik</option>
            <option value="Tagihan PDAM">Tagihan PDAM</option>
            <option value="BPJS">BPJS</option>
          </select>
        </div>
      </div>
      <div className="h-[450px]">
        {dataFilter.length === 0 ? (
          <Search />
        ) : currentItems.length === 0 ? (
          <Search />
        ) : (
          <>
            {currentItems.map((data) => (
              <div className="card h-[80px] mb-2 bg-white flex items-center justify-between px-[18px]">
                <div className="flex items-center w-full">
                  <div style={{ flex: "1" }}>
                    <div className="text-grey2">ID</div>
                    <div>{data.id}</div>
                  </div>
                  <div style={{ flex: "2" }}>
                    <div className="text-grey2">Tanggal</div>
                    <div>{data.transaction_date}</div>
                  </div>
                  <div style={{ flex: "3" }}>
                    <div className="text-grey2">Email</div>
                    <div>{data.user_email}</div>
                  </div>
                  <div style={{ flex: "2" }}>
                    <div className="text-grey2">Produk</div>
                    <div>{data.product_type}</div>
                  </div>
                  <div style={{ flex: "2" }}>
                    <div className="text-grey2">Total Pembayaran</div>
                    <div>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(data.total_price)}
                    </div>
                  </div>
                  <div style={{ flex: "3" }}>
                    <div className="text-grey2">Keterangan</div>
                    <div>{data.product_name}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <Pagination
        Datas={dataFilter}
        setcurrentItems={setcurrentItems}
        currentItems={currentItems}
        loading={loading}
      />
    </div>
  );
};

export default PendingTransaction;
