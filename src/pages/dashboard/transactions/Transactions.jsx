import { useState } from "react";
import "../../../assets/styles/dashboard.css";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "../../../components/dashboard/pagination/Pagination";
import { transactions } from "../../../apis/Transactions";
import SidebarPage from "../../../components/dashboard/sidebar/Sidebar";
import Cookies from "js-cookie";

// Logo assets
import pending from "../../../../src/assets/img/logo-pending.png";
import berhasil from "../../../../src/assets/img/logo-berhasil.png";
import { useEffect } from "react";
import { AxiosInstance } from "../../../apis/api";
import { BreadcrumbTransaction } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";

const TransactionsPage = () => {
  const [loading, setLoading] = useState(false);
  // Pagination useState
  const [currentItems, setcurrentItems] = useState(transactions);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("token"));

  // uji coba api dari be
  useEffect(() => {
    AxiosInstance.get("/admin/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => console.log("masuk ya", res));
  }, []);

  return (
    <SidebarPage>
      {loading ? (
        "data masih Proses"
      ) : (
        <div className="snap-x">
          <div className="px-10 pt-5 snap-center">
            <div className="flex justify-between pb-3">
              <div>
                <p className="text-base font-medium text-grey2">
                  <BreadcrumbTransaction />
                </p>
                <h1 className="text-3xl font-bold pl-1">Menu Riwayat</h1>
              </div>
              <div className="flex">
                <button className="pending w-[200px] h-[45px] bg-green text-white m-1 flex justify-center items-center rounded">
                  <img
                    src={pending}
                    alt=""
                    className="mr-2 w-[22px] h-[22px]"
                  />
                  <div>Transaksi Pending</div>
                </button>
                <button className="berhasil w-[200px] h-[45px] m-1 border border-midblue text-midblue flex justify-center items-center rounded">
                  <img
                    src={berhasil}
                    alt=""
                    className="mr-2 w-[22px] h-[22px]"
                  />
                  <div>Transaksi Berhasil</div>
                </button>
              </div>
            </div>
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
                  {/* <option value="">BPJS</option>
                  <option value="">PDAM</option>
                  <option value="">Indihome</option>
                  <option value="">Gopay</option>
                  <option value="">ShopeePay</option> */}
                </select>
              </div>
            </div>
            <div className="flex flex-col cards">
              {currentItems.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="card h-[80px] mb-2 bg-white flex items-center justify-between px-[18px]"
                  >
                    <div className="flex items-center w-full">
                      <div style={{ flex: "1" }}>
                        <div className="text-grey2">ID</div>
                        <div>{data.id}</div>
                      </div>
                      <div style={{ flex: "1" }}>
                        <div className="text-grey2">Tanggal</div>
                        <div>{data.tanggal} </div>
                      </div>
                      <div style={{ flex: "3" }}>
                        <div className="text-grey2">Email</div>
                        <div>{data.email}</div>
                      </div>
                      <div style={{ flex: "2" }}>
                        <div className="text-grey2">Produk</div>
                        <div>{data.products}</div>
                      </div>
                      <div style={{ flex: "2" }}>
                        <div className="text-grey2">Disc Voucher</div>
                        <div>{data.disc_voucher}</div>
                      </div>
                      <div style={{ flex: "2" }}>
                        <div className="text-grey2">Total Pembayaran</div>
                        <div>{data.total_pembayaran}</div>
                      </div>
                      <div style={{ flex: "3" }}>
                        <div className="text-grey2">Keterangan</div>
                        <div>{data.keterangan}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Pagination
            Datas={transactions}
            setcurrentItems={setcurrentItems}
            currentItems={currentItems}
            loading={loading}
          />
        </div>
      )}
    </SidebarPage>
  );
};

export default TransactionsPage;
