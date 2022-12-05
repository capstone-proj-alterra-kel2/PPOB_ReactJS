import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../assets/styles/modal.css";
import telp from "../../../assets/img/icon-telp.png";
import email from "../../../assets/img/icon-email.png";
import user from "../../../assets/img/icon-user.png";
import background from "../../../assets/img/Group 606.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import { toast } from "react-toastify";
import { hasuraApi, usersApi } from "../../../apis/user";

const EditModal = ({ isVisible, onClose, id, setLoading }) => {
  const idUser = id;
  console.log("id user get by id", idUser);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    handphone: "",
    avatar: "",
  });
  const [file, setFile] = useState("");

  // masih belum implementasi untuk axios instance get data by id
  // const getUsersbyid = async (id) => {
  //   const response = await usersApi.get(`/${id}`);
  //   return response.data;
  // };

  // get data by id
  useEffect(() => {
    hasuraApi(`/newusers/${idUser}`).then((res) => {
      console.log("id user", res.data.users_by_pk);
      setFormData({
        username: res.data.users_by_pk.username,
        email: res.data.users_by_pk.email,
        handphone: res.data.users_by_pk.handphone,
        avatar: res.data.users_by_pk.avatar,
      });
    });
  }, [idUser]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/users/${idUser}`)
  //     .then((res) => {
  //       setFormData({
  //         nama: res.data.name,
  //         email: res.data.email,
  //         avatar: res.data.avatar,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, [idUser]);

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

  //onchange data by id user
  // const data = {
  //   username: formData.username,
  //   email: formData.email,
  //   handphone: formData.handphone,
  //   avatar: file,
  // };

  // update to date use axios.post
  const Update = () => {
    hasuraApi
      .put(`users/${idUser}`, {
        username: formData.username,
        email: formData.email,
        handphone: formData.handphone,
        avatar: formData.avatar,
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
              <div className="pt-6 pb-7 flex flex-col justify-center items-center">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : formData.avatar ||
                        "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  className=" relative"
                  // alt="gambar.png"
                />

                <label htmlFor="file">
                  <img
                    src={iconEdit}
                    alt="edit"
                    className="absolute w-8 h-8 top-[210px] left-[670px]"
                  />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="text-grey2 mb-3">Username</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img src={user} alt="telp.icon" className="w-5 h-5 mr-2" />
                  <input
                    className="w-[300px]"
                    value={formData.username}
                    onChange={onChangeData}
                    name="username"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Email</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img src={email} alt="telp.icon" className="w-5 h-5 mr-2" />
                  <input
                    className="w-[300px]"
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
                    className="w-[300px]"
                    value={formData.handphone}
                    onChange={onChangeData}
                    name="handphone"
                    type="text"
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
