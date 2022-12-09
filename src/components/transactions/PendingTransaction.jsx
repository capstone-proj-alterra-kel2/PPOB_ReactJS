import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

import Cookies from "js-cookie";

const PendingTransaction = () => {
  const [search, setSearch] = useState("");
  //   const [token, setToken] = useState(Cookies.get("token"));
  return (
    <>
      <div className="sub-menu flex justify-between  flex-wrap pb-3 pt-5 ">
        <div className="search w-[315px] bg-white rounded h-[45px] m-1">
          <AiOutlineSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="drop-down w-[154px] bg-white h-[45px] m-1 flex justify-center">
          <select className=" w-[154px]">
            <option defaultValue="semuaProduk" selected>
              Semua Produk
            </option>
            <option value="pulsa">Pulsa</option>
            <option value="paketdata">Paket Data</option>
            <option value="">Indihome</option>
            <option value="">BPJS</option>
            <option value="">PDAM</option>
            <option value="">Gopay</option>
            <option value="">ShopeePay</option>
          </select>
        </div>
      </div>
      <h1>Pending Transaksi</h1>
    </>
  );
};

export default PendingTransaction;
