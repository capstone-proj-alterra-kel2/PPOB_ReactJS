import React, { useState } from "react";
import { toast } from "react-toastify";
import ICONS from "../../../assets/img";
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
  };
  const dataAdmins = useSelector((state) => state.admins.admins);
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const clearForm = {
    name: "",
    email: "",
    password: "",
    phone_number: "",
    image: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setImage(data);
  };

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

    if (Object.keys(errors).length === 0 && isSubmit) {
      await AxiosInstance.post("/admin/admins", datauser, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          setLoading(true);
          onClose(true);
          toast.success("Data Akun BERHASIL DIBUAT!");
          setFormValues(clearForm);
        })
        .catch((err) => {
          alert(err.response?.data.message);
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
    <section className="modal-component " id="wrapper" onClick={handleClose}>
      <div className="w-[454px] flex flex-col">
        <div className="p-2 rounded bg-grayScale-20">
          <div className="flex flex-col">
            <div className="h-[68px] w-[100%] ">
              <img src={ICONS.addAdmin} alt="" />
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
                onChange={imageUpload}
                accept="image/*"
                style={{ display: "none" }}
              />
            </div>
            <div className="flex flex-col form-input mb-[24px]">
              <label className="mb-3 text-grayScale-60">Nama Lengkap</label>
              <div className="flex w-[100%] bg-grayScale-10 items-center pl-3">
                <img
                  src={ICONS.userIcon}
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
              <label className="mb-3 text-grayScale-60">Email</label>
              <div className="flex w-[100%] bg-grayScale-10 items-center pl-3">
                <img
                  src={ICONS.emailIcon}
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
              <label className="text-grayScale-60 mb-3">Password</label>
              <div className="flex w-[100%] bg-grayScale-10 items-center pl-3">
                <img
                  src={ICONS.lockIcon}
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
              <label className="text-grayScale-60 mb-3">Handphone</label>
              <div className="flex w-[100%] bg-grayScale-10 items-center pl-3">
                <img
                  src={ICONS.telpIcon}
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
              className="bg-primary-10 p-[10px] w-[200px] mr-[12px] gap-[10px] text-primary-50 border-solid border-2 border-primary-50 rounded"
            >
              Kembali
            </button>
            <button
              onClick={handleAddUser}
              className="p-[10px] w-[200px] bg-primary-50 gap-[10px] text-grayScale-10 rounded"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddModalAdmin;
