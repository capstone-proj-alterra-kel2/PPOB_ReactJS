import { useState } from "react";
import "../../../assets/styles/dashboard.css";
import Pagination from "../../../components/dashboard/pagination/Pagination";
import { transactions } from "../../../apis/Transactions";
import SidebarPage from "../../../components/dashboard/sidebar/Sidebar";

// Logo assets
import pending from "../../../../src/assets/img/logo-pending.png";
import berhasil from "../../../../src/assets/img/logo-berhasil.png";
import { useEffect } from "react";
import { AxiosInstance } from "../../../apis/api";
import { BreadcrumbTransaction } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";
import PendingTransaction from "../../../components/transactions/PendingTransaction";
import SuccesTransaction from "../../../components/transactions/SuccesTransaction";

const TransactionsPage = () => {
  const [loading, setLoading] = useState(false);
  // Pagination useState
  const [currentItems, setcurrentItems] = useState(transactions);

  const [showData, setShowData] = useState(false);

  // uji coba api dari be
  // useEffect(() => {
  //   AxiosInstance.get("/admin/products?size=50&sort=product", {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   }).then((res) => console.log("masuk ya", res));
  // }, []);

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
                <button
                  onClick={() => setShowData(true)}
                  className="pending w-[200px] h-[45px] bg-green text-white m-1 flex justify-center items-center rounded"
                >
                  <img
                    src={pending}
                    alt=""
                    className="mr-2 w-[22px] h-[22px]"
                  />
                  <div>Transaksi Pending</div>
                </button>
                <button
                  onClick={() => setShowData(false)}
                  className="berhasil w-[200px] h-[45px] m-1 border border-midblue text-midblue flex justify-center items-center rounded"
                >
                  <img
                    src={berhasil}
                    alt=""
                    className="mr-2 w-[22px] h-[22px]"
                  />
                  <div>Transaksi Berhasil</div>
                </button>
              </div>
            </div>

            <div className="flex flex-col cards">
              {showData ? <PendingTransaction /> : <SuccesTransaction />}
            </div>
          </div>
          {/* <Pagination
            Datas={transactions}
            setcurrentItems={setcurrentItems}
            currentItems={currentItems}
            loading={loading}
          /> */}
        </div>
      )}
    </SidebarPage>
  );
};

export default TransactionsPage;
