import SidebarPage from "../../../../../components/dashboard/sidebar/Sidebar";
import { Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductsTelkomsel = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  const handleToggle = () => {
    let data = toggle;

    if (data === false) setToggle(true);
    else {
      setToggle(false);
    }
  };

  const backToTelkomsel = () => {
    navigate(-1);
  };

  return (
    <>
      <SidebarPage>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="font-bold text-3xl my-3">Tambah Produk</h1>
          <div className="h-auto w-[600px] gap-6 bg-white rounded-xl mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Detail</h2>
              <div className="flex justify-between items-center mb-4">
                {/* Product */}
                <label>Nama Produk</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2 "
                  name="produk"
                  type="text"
                  placeholder="Pulsa Rp. 5.000,00"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label>Stok</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                  name="produk"
                  type="text"
                  placeholder="Jumlah Stok..."
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label>Status Produk</label>
                <div className="w-[328px] flex">
                  <Switch onChange={handleToggle} className=" bg-grey2 mr-2" />
                  {toggle ? <div>Aktif</div> : <div>Non Aktif</div>}
                </div>
              </div>

              {/* Harga*/}
              <h2 className="text-2xl font-semibold">Harga</h2>
              <div className="flex justify-between items-center mb-4">
                <label>Harga Produk</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                  name="produk"
                  type="text"
                  placeholder="Pulsa Rp. 5.000,00"
                />
              </div>

              {/* Status Harga */}
              <div className="flex justify-between items-center mb-4">
                <label>Status Harga</label>
                <div className="flex justify-start items-center w-[328px]">
                  <input
                    className="border-solid border border-black w-5 h-5 rounded-xl px-2 mr-4"
                    name="produk"
                    type="radio"
                    value="normal"
                    onClick={() => setShowPromo(false)}
                  />
                  <label className="pr-10">Normal</label>
                  <input
                    className="border-solid border border-black w-5 h-5 rounded-xl px-2 mr-4"
                    name="produk"
                    type="radio"
                    value="promo"
                    onClick={() => setShowPromo(true)}
                  />
                  <label>Promo</label>
                </div>
              </div>
              {showPromo ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <label>Harga Promo</label>
                    <input
                      className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                      name="produk"
                      type="text"
                      placeholder="Pulsa Rp. 5.000,00"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <label>Periode Promo</label>
                    <div className="flex flex-col justify-end">
                      <input
                        className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                        name="produk"
                        type="date"
                        placeholder="Pulsa Rp. 5.000,00"
                      />
                      <label className="mb-3">DD/MM/YYYY</label>
                      <input
                        className=" border-solid border border-black w-[328px] h-14 rounded-xl px-2 "
                        name="produk"
                        type="date"
                        placeholder="Pulsa Rp. 5.000,00"
                      />
                      <label>DD/MM/YYYY</label>
                    </div>
                  </div>
                </>
              ) : null}

              <div className="flex justify-center items-center">
                <button
                  onClick={backToTelkomsel}
                  className=" mr-5 w-[123px] h-12  gap-8 border border-primary50 text-primary50 rounded-full font-semibold text-base"
                >
                  Batalkan
                </button>
                <button className=" mr-5 w-[123px] h-12  gap-8 bg-primary50 text-white rounded-full font-semibold text-base">
                  Tambahkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarPage>
    </>
  );
};

export default AddProductsTelkomsel;
