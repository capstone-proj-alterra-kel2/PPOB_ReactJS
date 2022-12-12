import React, { useState, useEffect } from "react";
import "../../../assets/styles/modal.css";
import telp from "../../../assets/img/icon-telp.png";
import email from "../../../assets/img/icon-email.png";
import user from "../../../assets/img/icon-user.png";
import background from "../../../assets/img/Group 606.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";

const EditModal = ({ isVisible, onClose, id, setLoading }) => {
  const idUser = id;
  const token = Cookies.get("token");
  console.log("id user get by id", idUser);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    image: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const [image, setImage] = useState("");

  useEffect(() => {
    AxiosInstance.get(`/admin/users/${idUser}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      console.log("data get by id", res.data.data);
      setFormData({
        name: res.data.data?.name,
        email: res.data.data?.email,
        phone_number: res.data.data?.phone_number,
        image: res.data.data?.image,
      });
    });
  }, [idUser]);

  console.log("form data prev image", formData.image);
  console.log("form data next image", image);

  // pop up / modals
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // get value by name
  const onChangeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dataAdmins = new FormData();
  dataAdmins.append("name", formData.name);
  dataAdmins.append("email", formData.email);
  dataAdmins.append("phone_number", formData.phone_number);
  dataAdmins.append("image", image);

  // update to date use axios put
  const Update = async (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0 && isSubmit) {
      await AxiosInstance.put(`/admin/users/${idUser}`, dataAdmins, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(() => {
          setLoading(true);
          onClose(true);
          toast.success("Data Akun Pengguna BERHASIL DIPERBARUI!");
        })
        .catch((err) => {
          console.log(err);

          toast.error("Data Akun  Pengguna GAGAL DIPERBARUI!");
        });
    } else {
      Object.values(errors).map((err) => alert(err));
    }
  };

  const imageUpload = (e) => {
    const dataImage = e.target.files[0];
    setImage(dataImage);
    setFormData((prev) => ({ ...prev, image: dataImage }));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // DataUsers.map((user) => {
    //   if (values.name === user.name) {
    //     errors.name = "Username has been ";
    //   }
    //   if (values.email === user.email) {
    //     errors.email = "email has been ";
    //   }
    //   if (values.phone_number === user.phone_number) {
    //     errors.phone_number = "Handphone has been ";
    //   }
    // });
    if (values.name === null || values.name === "") {
      errors.name = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone_number) {
      errors.phone_number = "phone_number is required!";
    }

    return errors;
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
                <img src={background} alt="" />
              </div>
              <div className="pt-6 pb-7 flex flex-col justify-end items-center">
                <img
                  alt=""
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : formData.image ||
                        "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  className=" relative"
                  // alt="gambar.png"
                />

                <label htmlFor="file" className="absolute">
                  <img src={iconEdit} alt="edit" className="z-50 w-8 h-8 " />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => imageUpload(e)}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="text-grey2 mb-3">Username</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img src={user} alt="telp.icon" className="w-5 h-5 mr-2" />
                  <input
                    value={formData.name}
                    onChange={onChangeData}
                    name="name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Email</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img src={email} alt="telp.icon" className="w-5 h-5 mr-2" />
                  <input
                    value={formData.email}
                    onChange={onChangeData}
                    name="email"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">No Handphone</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img src={telp} alt="telp.icon" className="w-5 h-5 mr-2" />
                  <input
                    value={formData.phone_number}
                    onChange={onChangeData}
                    name="phone_number"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mx-auto">
              <button
                onClick={() => {
                  onClose();
                  toast.error("Data Akun  Pengguna GAGAL DIPERBARUI!");
                }}
                className="bg-grey p-[10px] w-[200px] mr-[12px] gap-[10px] text-midblue border-solid border-2 border-midblue rounded"
              >
                Kembali
              </button>
              <button
                onClick={Update}
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

export default EditModal;
