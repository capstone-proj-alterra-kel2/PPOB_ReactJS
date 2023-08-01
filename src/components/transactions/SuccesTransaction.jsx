import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import iconEmail from "../../assets/img/icon-email2.png";

import Cookies from "js-cookie";
import Search from "../dashboard/search/Search";
import { transactions } from "../../apis/Transactions";
import Pagination from "../dashboard/pagination/Pagination";
const SuccesTransaction = () => {
  const [search, setSearch] = useState("");
  const dataPending = transactions.filter((data) => data.status === "success");

  const [dataFilter, setDataFilter] = useState(dataPending);
  const [currentItems, setcurrentItems] = useState(dataFilter);
  const [counter, setCounter] = useState(0);

  // loading
  const [loading, setLoading] = useState(false);

  console.log("data pending value", dataPending);

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setSearch(getSearch);
    if (getSearch !== "") {
      const searchData = dataFilter.filter((item) =>
        item.email.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(dataFilter.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };

  const dataFilteringBYProduct = (e) => {
    const value = e.target.value;
    console.log("value", value);
    if (value === "all") {
      setDataFilter(dataPending);
    } else if (value === "pulsa") {
      const Product = dataPending.filter((item) => item.products === "pulsa");
      setDataFilter(Product);
      console.log(Product);
    } else if (value === "paketdata") {
      const Product = dataPending.filter(
        (item) => item.products === "paketdata"
      );
      setDataFilter(Product);
    } else if (value === "pdam") {
      const product = dataPending.filter((item) => item.products === "pdam");
      setDataFilter(product);
    } else if (value === "indihome") {
      const product = dataPending.filter(
        (item) => item.products === "indihome"
      );
      setDataFilter(product);
    } else if (value === "bpjs") {
      const product = dataPending.filter((item) => item.products === "bpjs");
      setDataFilter(product);
    } else if (value === "gopay") {
      const product = dataPending.filter((item) => item.products === "gopay");
      setDataFilter(product);
    } else if (value === "shopepay") {
      const product = dataPending.filter(
        (item) => item.products === "shopepay"
      );
      setDataFilter(product);
    }
  };
  return (
    <>
      <div className="sub-menu flex justify-between  flex-wrap pb-3 pt-5 ">
        <div className="search w-[315px] bg-grayScale-10 rounded h-[45px] m-1">
          <AiOutlineSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
        <div className="drop-down w-[154px] bg-grayScale-10 h-[45px] m-1 flex justify-center">
          <select
            className=" w-[154px]"
            onChange={(e) => dataFilteringBYProduct(e)}
          >
            <option value="all" selected>
              Semua Produk
            </option>
            <option value="pulsa">Pulsa</option>
            <option value="paketdata">Paket Data</option>
            <option value="indihome">Indihome</option>
            <option value="bpjs">BPJS</option>
            <option value="pdam">PDAM</option>
            <option value="gopay">Gopay</option>
            <option value="shoopepay">ShopeePay</option>
          </select>
        </div>
      </div>
      {dataFilter.length === 0 ? (
        <div>
          <Search />
        </div>
      ) : currentItems.length === 0 ? (
        <Search />
      ) : (
        <div className="h-[450px]">
          {currentItems.map((data) => (
            <div className="card card-component">
              <div className="flex items-center w-full">
                <div style={{ flex: "1" }}>
                  <div className="text-grayScale-60">ID</div>
                  <div>{data.id}</div>
                </div>
                <div style={{ flex: "2" }}>
                  <div className="text-grayScale-60">Tanggal</div>
                  <div>{`${data.date_transaction} (${data.time_transaction})`}</div>
                </div>
                <div style={{ flex: "3" }}>
                  <div className="text-grayScale-60">Email</div>
                  <div>{data.email}</div>
                </div>
                <div style={{ flex: "3" }}>
                  <div className="text-grayScale-60">Produk</div>
                  <div>{data.products}</div>
                </div>
                <div style={{ flex: "3" }}>
                  <div className="text-grayScale-60">Total Pembayaran</div>
                  <div>{data.total}</div>
                </div>
                <div style={{ flex: "3" }}>
                  <div className="text-grayScale-60">Keterangan</div>
                  <div>Telkomsel 200.000</div>
                </div>
                <div>
                  <img src={iconEmail} alt="" className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Pagination
        Datas={dataFilter}
        setcurrentItems={setcurrentItems}
        currentItems={currentItems}
        loading={loading}
      />
    </>
  );
};

export default SuccesTransaction;
