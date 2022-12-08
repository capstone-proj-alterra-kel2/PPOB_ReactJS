import React, { useState } from "react";
import background from "../../../assets/img/add-admin.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import { toast } from "react-toastify";
import telpIcon from "../../../assets/img/icon-telp.png";
import emailIcon from "../../../assets/img/icon-email.png";
import userIcon from "../../../assets/img/icon-user.png";
import lockIcon from "../../../assets/img/icon-lock.png";
import { useSelector } from "react-redux";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";

const AddModalAdmin = ({ isVisible, onClose, setLoading }) => {
  const token = Cookies.get("token");
  const [image, setImage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone_number: "",
    image: "",
    role_id: 2,
  };
  const dataAdmins = useSelector((state) => state.admins.admins);
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
  console.log("data image", image);

  // console.log("form values", formValues);

  const handleAddUser = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setIsSubmit(true);

    const datauser = new FormData();
    datauser.append("name", formValues.name);
    datauser.append("email", formValues.email);
    datauser.append("phone_number", formValues.phone_number);
    datauser.append("password", formValues.password);
    datauser.append("image", image);

    // console.log("data untuk post", datauser);

    if (Object.keys(errors).length === 0 && isSubmit) {
      await AxiosInstance.post("/admin/admins", datauser, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          console.log("data succes", res);
          setLoading(true);
          onClose(true);
          toast.success("Data Akun BERHASIL DIBUAT!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Data Akun GAGAL DIBUAT!");
        });
    } else {
      Object.values(errors).map((err) => alert(err));
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    dataAdmins.map((user) => {
      if (values.name === user.name) {
        errors.name = "Username has been ";
      }
      if (values.email === user.email) {
        errors.email = "email has been ";
      }
    });
    if (values.name === null || values.name === "") {
      errors.name = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    // else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    if (!values.phone_number) {
      errors.phone_number = "phone_number is required!";
    }

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
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[454px] flex flex-col">
          <div className="bg-grey3 p-2 rounded">
            <div className="flex flex-col">
              <div className="h-[68px] w-[100%] ">
                <img src={background} />
              </div>
              <div className="pt-6 pb-7 flex flex-col justify-end items-center">
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  className=" relative"
                />

                <label htmlFor="file" className="absolute">
                  <img src={iconEdit} alt="edit" className="z-50 w-8 h-8 " />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={imageUpload}
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="mb-3 text-grey2">Nama Lengkap</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={userIcon}
                    alt="user.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    value={formValues.name}
                    name="name"
                    type="text"
                    placeholder="Masukan nama..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="mb-3 text-grey2">Email</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={emailIcon}
                    alt="email.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    value={formValues.email}
                    name="email"
                    placeholder="Masukan Email..."
                    type="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Password</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={lockIcon}
                    alt="pass.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    type="password"
                    required
                    name="password"
                    value={formValues.password}
                    placeholder="Masukan Password..."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Handphone</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={lockIcon}
                    alt="pass.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    type="number"
                    required
                    name="phone_number"
                    value={formValues.phone_number}
                    placeholder="Masukan phone number..."
                    onChange={handleChange}
                  />
                </div>
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
                onClick={handleAddUser}
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

export default AddModalAdmin;
