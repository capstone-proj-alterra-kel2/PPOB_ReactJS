import { useEffect, useState } from "react";
import "../../../assets/styles/dashboard.css";
import { GetDataTransactions } from "../../../apis/Transactions";
import { BreadcrumbTransaction } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";
import { useDispatch } from "react-redux";
import { setTransactions } from "../../../redux/feature/ProductSlice";

import { Sidebar, TransactionsComponent } from "../../../components";

// Logo assets
import pending from "../../../../src/assets/img/logo-pending.png";
import berhasil from "../../../../src/assets/img/logo-berhasil.png";

const TransactionsPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // Pagination useState
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    GetDataTransactions().then((res) => {
      console.log("apapapapap", res);
      setLoading(false);
      dispatch(setTransactions(res));
    });
  }, [loading]);

  return (
    <Sidebar>
      {loading ? (
        "data masih Proses"
      ) : (
        <div className="snap-x">
          <div className="px-10 pt-5 snap-center">
            <div className="flex justify-between pb-3">
              <div>
                <p className="text-base font-medium text-grey2 mb-6">
                  <BreadcrumbTransaction />
                </p>
                <h1 className="text-3xl font-bold pl-1">
                  Menu Riwayat Transaksi
                </h1>
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
              <TransactionsComponent />
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
};

export default TransactionsPage;
