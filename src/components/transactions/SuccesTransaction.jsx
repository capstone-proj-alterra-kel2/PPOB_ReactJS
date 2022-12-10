import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import iconEmail from "../../assets/img/icon-email2.png";

import Cookies from "js-cookie";
const SuccesTransaction = () => {
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
            <option value="">BPJS</option>
            <option value="">PDAM</option>
            <option value="">Indihome</option>
            <option value="">Gopay</option>
            <option value="">ShopeePay</option>
          </select>
        </div>
      </div>
      <div className="card h-[80px] mb-2 bg-white flex items-center justify-between px-[18px] flex-wrap">
        <div className="flex items-center w-full">
          <div style={{ flex: "1" }} className="bg-midblue">
            <div className="text-grey2">ID</div>
            <div>1234</div>
          </div>
          <div style={{ flex: "2" }} className="bg-red2">
            <div className="text-grey2">Tanggal</div>
            <div>18/12/2022 {"08:12 Wib"} </div>
          </div>
          <div style={{ flex: "2" }} className="bg-midblue">
            <div className="text-grey2">Email</div>
            <div>email</div>
          </div>
          <div style={{ flex: "2" }} className="bg-red2">
            <div className="text-grey2">Produk</div>
            <div>Tagihan PDAM</div>
          </div>
          <div style={{ flex: "2" }} className="bg-midblue">
            <div className="text-grey2">Disc Voucher</div>
            <div>disc voucher</div>
          </div>
          <div style={{ flex: "2" }} className="bg-red2">
            <div className="text-grey2">Total Pembayaran</div>
            <div>Rp 502.000</div>
          </div>
          <div style={{ flex: "2" }} className="bg-green">
            <div className="text-grey2">Keterangan</div>
            <div>Telkomsel 200.000</div>
          </div>
          <div>
            <img src={iconEmail} alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccesTransaction;
