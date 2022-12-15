import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosInstance } from "../../../../../../apis/api";
import SidebarPage from "../../../../sidebar/Sidebar";

const EditPaketDataTelkomsel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPromo, setShowPromo] = useState(false);
  const [name, setName] = useState("");

  const token = Cookies.get("token");

  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    price: "",
    price_status: "",
    discount: 0,
    promo_start_date: "",
    promo_end_date: "",
  });

  //   get Data by id
  useEffect(() => {
    AxiosInstance.get(`/admin/products/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setFormData({
        name: res.data.data.name,
        stock: res.data.data.stock,
        price: res.data.data.price,
        price_status: res.data.data.price_status,
        discount: res.data.data.discount,
        promo_start_date: res.data.data.promo_start_date,
        promo_end_date: res.data.data.promo_end_date,
      });
    });
  }, [id, token]);

  const backToTelkomsel = () => {
    navigate(-1);
  };

  console.log("data form", formData);

  return (
    <>
      <SidebarPage>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="font-bold text-3xl my-3">Edit Produk</h1>
          <h2> get data by id {id}</h2>
          <div className="h-auto w-[600px] gap-6 bg-white rounded-xl mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Detail</h2>
              <div className="flex justify-between items-center mb-4">
                {/* Product */}
                <label>Nama Produk</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2 "
                  name="name"
                  type="text"
                  value={formData.name}
                  placeholder="Pulsa Rp. 5.000,00"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label>Stok</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                  name="produk"
                  type="number"
                  value={formData.stock}
                  placeholder="Jumlah Stok..."
                />
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
                  value={formData.price}
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
                      type="number"
                      value={formData.discount}
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

export default EditPaketDataTelkomsel;
