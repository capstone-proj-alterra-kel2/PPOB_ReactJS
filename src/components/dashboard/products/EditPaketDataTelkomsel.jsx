import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosInstance } from "../../../apis/api";
import SidebarPage from "../sidebar/Sidebar";

const EditPaketDataTelkomsel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPromo, setShowPromo] = useState(false);
  const token = Cookies.get("token");
  const [isSubmit, setIsSubmit] = useState(false);
  const Redirect = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    price_status: "",
    provider_id: "",
    discount: 0,
    promo_start_date: "",
    promo_end_date: "",
  });

  // get value by name
  const onChangeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        provider_id: res.data.data.provider_id,
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

  // update to date use axios put
  const Update = async () => {
    const errors = validate(formData);
    setIsSubmit(true);

    const data = {
      name: formData.name,
      price: Number(formData.price),
      stock: Number(formData.stock),
      price_status: formData.price_status,
      provider_id: Number(formData.provider_id),
      discount: Number(formData.discount),
      promo_start_date: formData.promo_start_date,
      promo_end_date: formData.promo_end_date,
    };

    if (Object.keys(errors).length === 0 && isSubmit) {
      await AxiosInstance.put(`/admin/products/${id}`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          // setLoading(true);
          toast.success("Data Akun Pengguna BERHASIL DIPERBARUI!");
          Redirect(-1);
        })
        .catch((err) => {
          toast.error("Data Akun  Pengguna GAGAL DIPERBARUI!");
        });
    } else {
      Object.values(errors).map((err) => alert(err));
    }
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
          <h1 className="font-bold text-3xl my-3">Edit Produk</h1>
          <div className="h-auto w-[600px] gap-6 bg-grayScale-10 rounded-xl mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Detail</h2>
              <div className="flex justify-between items-center mb-4">
                {/* Product */}
                <label>Nama Produk</label>
                <input
                  className="border-solid border border-grayScale-100 w-[328px] h-14 rounded-xl px-2 "
                  name="name"
                  type="text"
                  value={formData.name}
                  placeholder="Pulsa Rp. 5.000,00"
                  onChange={onChangeData}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label>Stok</label>
                <input
                  className="border-solid border border-grayScale-100 w-[328px] h-14 rounded-xl px-2"
                  name="stock"
                  type="number"
                  value={formData.stock}
                  placeholder="Jumlah Stok..."
                  onChange={onChangeData}
                />
              </div>

              {/* Harga*/}
              <h2 className="text-2xl font-semibold">Harga</h2>
              <div className="flex justify-between items-center mb-4">
                <label>Harga Produk</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                  name="price"
                  type="text"
                  placeholder="Pulsa Rp. 5.000,00"
                  value={formData.price}
                  onChange={onChangeData}
                />
              </div>

              {/* Status Harga */}
              <div className="flex justify-between items-center mb-4">
                <label>Status Harga</label>
                <div className="flex justify-start items-center w-[328px]">
                  <input
                    className="border-solid border border-grayScale-100 w-5 h-5 rounded-xl px-2 mr-4"
                    name="price_status"
                    type="radio"
                    value="normal"
                    onClick={() => setShowPromo(false)}
                    onChange={onChangeData}
                  />
                  <label className="pr-10">Normal</label>
                  <input
                    className="border-solid border border-grayScale-100 w-5 h-5 rounded-xl px-2 mr-4"
                    name="price_status"
                    type="radio"
                    value="promo"
                    onClick={() => setShowPromo(true)}
                    onChange={onChangeData}
                  />
                  <label>Promo</label>
                </div>
              </div>
              {showPromo ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <label>Harga Promo</label>
                    <input
                      className="border-solid border border-grayScale-100 w-[328px] h-14 rounded-xl px-2"
                      name="discount"
                      type="number"
                      onChange={onChangeData}
                      value={formData.discount}
                      placeholder="Rp. 5,000,00"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <label>Periode Promo</label>
                    <div className="flex flex-col justify-end">
                      <input
                        className="border-solid border border-grayScale-100 w-[328px] h-14 rounded-xl px-2"
                        onChange={onChangeData}
                        name="promo_start_date"
                        type="date"
                      />
                      <label className="mb-3">DD/MM/YYYY</label>
                      <input
                        className=" border-solid border border-grayScale-100 w-[328px] h-14 rounded-xl px-2 "
                        onChange={onChangeData}
                        name="promo_end_date"
                        type="date"
                      />
                      <label>DD/MM/YYYY</label>
                    </div>
                  </div>
                </>
              ) : null}

              <div className="flex justify-center items-center">
                <button
                  onClick={backToTelkomsel}
                  className=" mr-5 w-[123px] h-12  gap-8 border border-primary-50 text-primary-50 rounded-full font-semibold text-base"
                >
                  Batalkan
                </button>
                <button
                  onClick={Update}
                  className=" mr-5 w-[123px] h-12  gap-8 bg-primary-50 text-grayScale-10 rounded-full font-semibold text-base"
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

export default EditPaketDataTelkomsel;
