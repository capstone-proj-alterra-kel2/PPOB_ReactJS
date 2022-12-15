import SidebarPage from "../../../../sidebar/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../../../../apis/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { integerPropType } from "@mui/utils";

const AddPaketDataTelkomsel = () => {
  const id_opsi = {
    provider_id: 18,
  };
  const initialValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    status: "Tersedia",
    is_available: true,
    price_status: "",
    discount: 0,
    promo_start_date: "",
    promo_end_date: "",
  };

  const token = Cookies.get("token");

  const navigate = useNavigate();
  const [showPromo, setShowPromo] = useState(false);
  const [hargaStok, setHargaStok] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const backToTelkomsel = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  console.log("kelelel", formValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const errors = validate(formValues);
    setIsSubmit(true);

    const data = {
      name: formValues.name,
      description: formValues.name,
      price: ++formValues.price,
      provider_id: id_opsi.provider_id,
      stock: ++formValues.stock,
      status: "Tersedia",
      is_available: true,
      price_status: formValues.price_status,
      discount: ++formValues.discount,
      promo_start_date: formValues.promo_start_date,
      promo_end_date: formValues.promo_end_date,
    };

    console.log(data);

    if (Object.keys(errors).length === 0 && isSubmit) {
      await AxiosInstance.post("/admin/products", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          setLoading(true);
          //  onClose(true);
          console.log(res);
          toast.success("Data Akun BERHASIL DIBUAT!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Data Akun GAGAL DIBUAT!");
        });
    }
    //  else {
    //   Object.values(errors).map((err) => alert(err));
    // }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name Produk is required!";
    }
    if (!values.price) {
      errors.price = "price Produk is required!";
    }
    if (!values.stock) {
      errors.stock = "Stock Produk is required!";
    }
    if (!values.price_status) {
      errors.price_status = "Price Status Produk is required!";
    }
    return errors;
  };

  return (
    <>
      <SidebarPage>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="font-bold text-3xl my-3">Tambah Produk Paket Data</h1>
          <div className="h-auto w-[600px] gap-6 bg-white rounded-xl mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Detail</h2>
              <div className="flex justify-between items-center mb-4">
                {/* Product */}
                <label>Nama Produk</label>
                <div>
                  <input
                    className="border-solid border border-black w-[328px] h-14 rounded-xl px-2 "
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Pulsa Rp. 5.000,00"
                  />
                  <p className="text-center text-red2">{formErrors.name}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <label>Stok</label>
                <div>
                  <input
                    className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                    name="stock"
                    onChange={handleChange}
                    value={formValues.stock}
                    type="number"
                    placeholder="Jumlah Stok..."
                  />
                  <p className="text-center text-red2">{formErrors.stock}</p>
                </div>
              </div>

              {/* Harga*/}
              <h2 className="text-2xl font-semibold">Harga</h2>
              <div className="flex justify-between items-center mb-4">
                <label>Harga Produk</label>
                <div>
                  <input
                    className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                    name="price"
                    type="number"
                    onChange={handleChange}
                    value={formValues.price}
                    placeholder="Rp. 5.000.00"
                  />
                  <p className="text-center text-red2">{formErrors.price}</p>
                </div>
              </div>

              {/* Status Harga */}
              <div className="flex justify-between items-center mb-4">
                <label>Status Harga</label>
                <div className="flex justify-start items-center w-[328px]">
                  <input
                    className="border-solid border border-black w-5 h-5 rounded-xl px-2 mr-4"
                    name="price_status"
                    onChange={handleChange}
                    type="radio"
                    value="normal"
                    onClick={() => setShowPromo(false)}
                  />
                  <label className="pr-10">Normal</label>
                  <input
                    className="border-solid border border-black w-5 h-5 rounded-xl px-2 mr-4"
                    name="price_status"
                    onChange={handleChange}
                    type="radio"
                    value="promo"
                    onClick={() => setShowPromo(true)}
                  />
                  <label>Promo</label>
                </div>
              </div>
              <p className="ml-60 text-center text-red2">{formErrors.price}</p>
              {showPromo ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <label>Harga Promo</label>
                    <input
                      className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                      name="discount"
                      onChange={handleChange}
                      type="number"
                      value={formValues.discount}
                      placeholder="Pulsa Rp. 5.000,00"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <label>Periode Promo</label>
                    <div className="flex flex-col justify-end">
                      <input
                        className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                        name="promo_start_date"
                        onChange={handleChange}
                        type="date"
                        value={formValues.promo_start_date}
                        placeholder="Pulsa Rp. 5.000,00"
                      />
                      <label className="mb-3">DD/MM/YYYY</label>
                      <input
                        className=" border-solid border border-black w-[328px] h-14 rounded-xl px-2 "
                        name="promo_end_date"
                        onChange={handleChange}
                        type="date"
                        value={formValues.promo_end_date}
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
                <button
                  onClick={handleSubmit}
                  className=" mr-5 w-[123px] h-12  gap-8 bg-primary50 text-white rounded-full font-semibold text-base"
                >
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

export default AddPaketDataTelkomsel;
