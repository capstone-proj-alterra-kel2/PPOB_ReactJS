import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { transactions } from "../../apis/Transactions";
import Pagination from "../dashboard/pagination/Pagination";
import { useEffect } from "react";
import Search from "../dashboard/search/Search";
import { AxiosInstance } from "../../apis/api";
import Cookies from "js-cookie";
import Loading from "../../utils/Loading";

const PendingTransaction = () => {
  const token = Cookies.get("token");
  const [search, setSearch] = useState("");
  const [dataTransactions, setDataTransactions] = useState([]);
  console.log("data transactions", dataTransactions);
  const [dataFilter, setDataFilter] = useState(dataTransactions); // data yang diolah
  const [currentItems, setcurrentItems] = useState(dataFilter);
  console.log("data Current", dataFilter);
  const [counter, setCounter] = useState(0);

  // loading
  const [loading, setLoading] = useState(false);

  console.log("data pending value", dataTransactions);

  useEffect(() => {
    AxiosInstance.get("/admin/transactions?size=1000&sort=id", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setLoading(false);
      setDataTransactions(res.data.data.items);
    });
  }, [loading]);

  console.log("data transactions", dataTransactions);

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
    console.log("value", value);
    if (value === "all") {
      setDataFilter(dataTransactions);
    } else if (value === "pulsa") {
      const Product = dataTransactions.filter(
        (item) => item.product_type === "Pulsa"
      );
      setDataFilter(Product);
      console.log(Product);
    } else if (value === "Paket Data") {
      const Product = dataTransactions.filter(
        (item) => item.product_type === "Paket Data"
      );
      setDataFilter(Product);
    } else if (value === "pdam") {
      const product = dataTransactions.filter(
        (item) => item.product_type === "pdam"
      );
      setDataFilter(product);
    } else if (value === "indihome") {
      const product = dataTransactions.filter(
        (item) => item.product_type === "indihome"
      );
      setDataFilter(product);
    } else if (value === "bpjs") {
      const product = dataTransactions.filter(
        (item) => item.product_type === "bpjs"
      );
      setDataFilter(product);
    } else if (value === "gopay") {
      const product = dataTransactions.filter(
        (item) => item.product_type === "gopay"
      );
      setDataFilter(product);
    } else if (value === "shopepay") {
      const product = dataTransactions.filter(
        (item) => item.product_type === "shopepay"
      );
      setDataFilter(product);
    }
  };

  console.log("data filter ", dataFilter);

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
              Semua Produk
            </option>
            <option value="pulsa">Pulsa</option>
            <option value="Paket Data">Paket Data</option>
            <option value="indihome">Indihome</option>
            <option value="bpjs">BPJS</option>
            <option value="pdam">PDAM</option>
            <option value="gopay">Gopay</option>
            <option value="shoopepay">ShopeePay</option>
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
                    <div>{data.total_price}</div>
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
