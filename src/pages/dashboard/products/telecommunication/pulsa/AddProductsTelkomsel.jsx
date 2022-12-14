import SidebarPage from "../../../../../components/dashboard/sidebar/Sidebar";
import { Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AddProductsTelkomsel = () => {
  const navigate = useNavigate();
  const [showPromo, setShowPromo] = useState(false);
  const [hargaStok, setHargaStok] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  const backToTelkomsel = () => {
    navigate(-1);
  };

  const initialValues = {
    namaproduk: "",
    stok: "",
    harga: "",
    status: "",
    hargapromo: "",
    promoperiodeawal: "",
    promoperiodeakhir: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [Valuedate, setValuedate] = useState("");
  console.log("test", Valuedate);

  console.log("masuk", formValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeStartDate = (e) => {
    const startDate = e.target.value;
    setFormValues((prev) => ({ ...prev, promoperiodeawal: startDate }));
  };

  const handleChangeFinishDate = (e) => {
    const finishDate = e.target.value;
    setFormValues((prev) => ({ ...prev, promoperiodeakhir: finishDate }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const errors = validate(formValues);
  //   setIsSubmit(true);

  //   const datauser = new FormData();
  //   datauser.append("name", formValues.namaproduk);
  //   datauser.append("stock", formValues.stok);
  //   datauser.append("price", formValues.harga);
  //   datauser.append("status", formValues.status);
  //   datauser.append("discount", formValues.hargapromo);
  //   datauser.append("promo_start_date", formValues.promoperiodeawal);
  //   datauser.append("promo_end_date", formValues.promoperiodeakhir);

  //   if (Object.keys(errors).length === 0 && isSubmit) {
  //     await AxiosInstance.post("/admin/users", datauser, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then(() => {
  //         setLoading(true);
  //         onClose(true);
  //         toast.success("Data Produk Berhasil Ditambahkan");
  //       })
  //       .catch((err) => {
  //         toast.error("Data Produk Gagal Ditambahkan");
  //       });
  //   } else {
  //     Object.values(errors).map((err) => alert(err));
  //   }
  // };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   // DataUsers.map((user) => {
  //   //   if (values.name === user.name) {
  //   //     errors.name = "Username has been ";
  //   //   }
  //   //   if (values.email === user.email) {
  //   //     errors.email = "email has been ";
  //   //   }
  //   //   if (values.phone_number === user.phone_number) {
  //   //     errors.phone_number = "Handphone has been ";
  //   //   }
  //   // });
  //   if (values.produk === null || values.produk === "") {
  //     errors.produk = "Produk harus diisi";
  //   }

  // if (!values.email) {
  //   errors.email = "Email is required!";
  // } else if (!regex.test(values.email)) {
  //   errors.email = "This is not a valid email format!";
  // }

  // if (!values.phone_number) {
  //   errors.phone_number = "phone_number is required!";
  // }

  // if (!values.password) {
  //   errors.password = "Password is required";
  // } else if (values.password.length < 4) {
  //   errors.password = "Password must be more than 4 characters";
  // }
  // else if (values.password.length > 10) {
  //   errors.password = "Password cannot exceed more than 10 characters";
  // }

  // return errors;
  // };

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
                  name="namaproduk"
                  type="text"
                  value={formValues.namaproduk}
                  placeholder="Pulsa Rp. 5.000,00"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label>Stok</label>
                <input
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                  name="stok"
                  type="text"
                  value={formValues.stok}
                  placeholder="Jumlah Stok..."
                  onChange={handleChange}
                />
              </div>

              {/* Harga*/}
              <h2 className="text-2xl font-semibold">Harga</h2>
              <div className="flex justify-between items-center mb-4">
                <label>Harga Produk</label>
                <input
                  onChange={handleChange}
                  className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                  name="harga"
                  type="text"
                  value={formValues.harga}
                  placeholder="Pulsa Rp. 5.000,00"
                />
              </div>

              {/* Status Harga */}
              <div className="flex justify-between items-center mb-4">
                <label>Status Harga</label>
                <div className="flex justify-start items-center w-[328px]">
                  <input
                    className="border-solid border border-black w-5 h-5 rounded-xl px-2 mr-4"
                    name="status"
                    type="radio"
                    value="false"
                    onClick={() => setShowPromo(false)}
                    onChange={handleChange}
                  />
                  <label className="pr-10">Normal</label>
                  <input
                    className="border-solid border border-black w-5 h-5 rounded-xl px-2 mr-4"
                    name="status"
                    type="radio"
                    value="true"
                    onClick={() => setShowPromo(true)}
                    onChange={handleChange}
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
                      name="hargapromo"
                      type="text"
                      value={formValues.hargapromo}
                      placeholder="Pulsa Rp. 5.000,00"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <label>Periode Promo</label>
                    <div className="flex flex-col justify-end">
                      <input
                        className="border-solid border border-black w-[328px] h-14 rounded-xl px-2"
                        name="periodepromoawal"
                        type="date"
                        value={formValues.promoperiodeawal}
                        placeholder="Pulsa Rp. 5.000,00"
                        onChange={handleChangeStartDate}
                      />
                      <label className="mb-3">DD/MM/YYYY</label>
                      <input
                        className=" border-solid border border-black w-[328px] h-14 rounded-xl px-2 "
                        name="periodepromoakhir"
                        type="date"
                        value={formValues.periodepromoakhir}
                        placeholder="Pulsa Rp. 5.000,00"
                        onChange={handleChangeFinishDate}
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
