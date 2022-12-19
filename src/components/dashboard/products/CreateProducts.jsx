import SidebarPage from "../sidebar/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CreateProducts = () => {
  const Products = useSelector((state) => state.products.products);
  const initialValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    status: "Tersedia",
    prodiver_id: 0,
    is_available: true,
    price_status: "",
    discount: 0,
    promo_start_date: "",
    promo_end_date: "",
  };

  const token = Cookies.get("token");
  console.log("data buat tambaha", Products);
  const navigate = useNavigate();
  const [showPromo, setShowPromo] = useState(false);
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

  const data = {
    name: formValues.name,
    description: formValues.name,
    price: Number(formValues.price),
    provider_id: Number(formValues.prodiver_id),
    stock: Number(formValues.stock),
    status: "Tersedia",
    is_available: true,
    price_status: formValues.price_status,
    discount: Number(formValues.discount),
    promo_start_date: formValues.promo_start_date,
    promo_end_date: formValues.promo_end_date,
  };

  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    const errors = validate(formValues);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0 && isSubmit) {
      AxiosInstance.post("/admin/products", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          navigate(-1);
          toast.success("Data Akun BERHASIL DIBUAT!");
          setLoading(true);
        })
        .catch((err) => {
          toast.error("Data Akun GAGAL DIBUAT!");
        });
    }
    //  else {
    //   Object.values(errors).map((err) => alert(err));
    // }
  };

  const validate = (values) => {
    const errors = {};

    {
      Products.map((data) => {
        if (values.name === data.name) {
          errors.name = "Nama Telah Tersedia! ";
        }
      });
    }

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
          <h1 className="font-bold text-3xl my-3">Tambah Produk</h1>
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

              <div className="flex justify-between items-center mb-4">
                <label>Provider</label>

                <div className="select-tiket ">
                  <select
                    onChange={handleChange}
                    className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                    name="prodiver_id"
                  >
                    <option selected>Pilih Provider</option>
                    <option value={18}>Paket Data Telkomsel</option>
                    <option value={19}>Paket Data Indosat</option>
                    <option value={20}>Paket Data Simpati</option>
                    <option value={21}>Paket Data Three</option>
                    <option value={22}>Paket Data Smartfren</option>
                    <option value={23}>Paket Data Axis</option>
                    <option value={24}>Paket Data Xl</option>
                    <option value={25}>Paket Data by.U</option>
                    <option value={10}>Pulsa Telkomsel</option>
                    <option value={11}>Pulsa Indosat</option>
                    <option value={12}>Pulsa Simpati</option>
                    <option value={13}>Pulsa Three</option>
                    <option value={14}>Pulsa Smarfren</option>
                  </select>
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

export default CreateProducts;
