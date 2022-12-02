import React, { useState } from "react";
import background from "../../../assets/img/add-admin.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import { toast } from "react-toastify";
import { hasuraApi } from "../../../apis/user";
import telpIcon from "../../../assets/img/icon-telp.png";
import emailIcon from "../../../assets/img/icon-email.png";
import userIcon from "../../../assets/img/icon-user.png";

const AddModalAdmin = ({ isVisible, onClose, setLoading }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");

  const data = {
    username: nama,
    email: email,
    avatar: avatar,
  };

  const AddData = async () => {
    // const data = new FormData();
    // data.append("name", nama);
    // data.append("email", email);
    // data.append("avatar", avatar);

    await hasuraApi
      .post("/post", {
        username: nama,
        email: email,
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

    // axios
    //   .post(`http://localhost:3000/users/`, data)
    //   .then((res) => {
    //     console.log("data succes", res);
    //     setLoading(true);
    //     onClose(true);
    //     toast.success("Data Akun BERHASIL DIBUAT!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("Data Akun GAGAL DIBUAT!");
    //   });
  };

  const imageUpload = (e) => {
    const data = e.target.files[0];
    setAvatar(data);
    console.log("data2a", avatar);
  };
  console.log("data", avatar);

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
              <div className="pt-6 pb-7 flex flex-col justify-center items-center">
                <img
                  src={
                    avatar
                      ? URL.createObjectURL(avatar)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                  className=" relative"
                />

                <label htmlFor="file">
                  <img src={iconEdit} alt="edit" className="icon2" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    imageUpload(event);
                  }}
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="mb-3 text-grey2">Nama Lengkap</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={userIcon}
                    alt="telp.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    value={nama}
                    type="text"
                    placeholder="Masukan Email..."
                    onChange={(event) => {
                      setNama(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="mb-3 text-grey2">Email</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={emailIcon}
                    alt="telp.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    value={email}
                    placeholder="Masukan Email..."
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Password</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={emailIcon}
                    alt="telp.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    placeholder="Masukan Password..."
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
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
                onClick={AddData}
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
