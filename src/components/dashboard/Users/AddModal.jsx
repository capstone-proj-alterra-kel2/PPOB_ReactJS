import React, { useState } from "react";
import { toast } from "react-toastify";
import ICONS from "../../../assets/img";
import { useSelector } from "react-redux";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";

const AddModal = ({ isVisible, onClose, setLoading }) => {
  const token = Cookies.get("token");
  const [image, setImage] = useState("");
  const DataUsers = useSelector((state) => state.users.users);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone_number: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setIsSubmit(true);

    const datauser = new FormData();
    datauser.append("name", formValues.name);
    datauser.append("email", formValues.email);
    datauser.append("phone_number", formValues.phone_number);
    datauser.append("password", formValues.password);
    datauser.append("image", image);

    if (Object.keys(errors).length === 0 && isSubmit) {
      await AxiosInstance.post("/admin/users", datauser, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(() => {
          setLoading(true);
          onClose(true);
          toast.success("Data Akun BERHASIL DIBUAT!");
          setFormValues({
            email: "",
            password: "",
            phone_number: "",
            image: "",
            name: "",
          });
        })
        .catch((err) => {
          toast.error("Data Akun GAGAL DIBUAT!");
        });
    } else {
      Object.values(errors).map((err) => alert(err));
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexfullname = /^[a-zA-Z]+$/;
    const handphone = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    const number = /^([^\d\s]{1,}\s?[+-]?)(\d{1,3})(\,\d{3})*(\.\d{1,})?$/;

    DataUsers.map((user) => {
      if (values.name === user.name) {
        errors.name = "nama sudah tersedia, silahkan ganti nama pengguna";
      }
      if (values.email === user.email) {
        errors.email = "email sudah tersedia ";
      }
      if (values.phone_number === user.phone_number) {
        errors.phone_number = "nomor handphone tersedia";
      }
    });
    if (values.name === null || values.name === "") {
      errors.name = "Harap memasukan nama lengkap";
    } else if (!regexfullname.test(values.name)) {
      errors.name =
        "Tidak Memerlukan angka atau symbol dalam penulisan nama lengkap";
    }

    if (!values.email) {
      errors.email = "Harap memasukan email";
    } else if (!regex.test(values.email)) {
      errors.email = "Harap memasukan email sesuai dengan format";
    }

    if (!values.phone_number) {
      errors.phone_number = "harap memasukan No handphone";
    } else if (!handphone.test(values.phone_number)) {
      errors.phone_number = "Harap memasukan no telp. yang valid 08....";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    // else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }

    return errors;
  };

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[454px] flex flex-col">
          <div className="bg-grey3 p-2 rounded">
            <div className="flex flex-col">
              <div className="h-[68px] w-[100%] ">
                <img src={ICONS.addUser} alt="" />
              </div>
              <div className="w-[100%] h-35 pt-6 pb-7 flex flex-col justify-end items-center">
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  className=" relative"
                  alt=""
                />
                <label htmlFor="file" className="absolute">
                  <img
                    src={ICONS.editPictIcon}
                    alt="edit"
                    className="z-50 w-8 h-8 "
                  />
                </label>

                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    imageUpload(event);
                  }}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="text-grey2 mb-3">Nama Lengkap</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={ICONS.userIcon}
                    alt="user.icon"
                    className="w-5 h-5 mr-2"
                  />

                  <input
                    value={formValues.name}
                    type="text"
                    name="name"
                    className="w-[100%]"
                    placeholder="Masukan Nama Lengkap..."
                    onChange={handleChange}
                  />
                </div>
                {/* <p>{formErrors.username}</p> */}
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="text-grey2 mb-3">Email</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={ICONS.emailIcon}
                    alt="email.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    value={formValues.email}
                    placeholder="Masukan Email..."
                    type="email"
                    name="email"
                    className="w-[100%]"
                    onChange={handleChange}
                  />
                </div>
                {/* <p>{formErrors.email}</p> */}
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">No Handphone</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={ICONS.telpIcon}
                    alt="telp.icon"
                    className="w-5 h-5 mr-2"
                  />

                  <input
                    type="number"
                    required
                    name="phone_number"
                    value={formValues.phone_number}
                    className="w-[100%]"
                    placeholder="Masukan Nomor Handphone..."
                    onChange={handleChange}
                  />
                </div>
                {/* <p>{formErrors.phone_number}</p> */}
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Password</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={ICONS.lockIcon}
                    alt="lock.icon"
                    className="w-5 h-5 mr-2"
                  />

                  <input
                    type="password"
                    required
                    name="password"
                    value={formValues.password}
                    className="w-[100%]"
                    placeholder="Masukan Password..."
                    onChange={handleChange}
                  />
                </div>
                {/* <p>{formErrors.password}</p> */}
              </div>
            </div>

            <div className="flex justify-center items-center mx-auto">
              <button
                onClick={() => {
                  onClose();
                  toast.error("Data Akun GAGAL DIBUAT!");
                }}
                className="bg-grey p-[10px] w-[200px] mr-[12px] gap-[10px] text-midblue border-solid border-2 border-midblue rounded"
              >
                Kembali
              </button>
              <button
                onClick={handleSubmit}
                className="p-[10px] w-[200px] bg-midblue gap-[10px] text-white rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
