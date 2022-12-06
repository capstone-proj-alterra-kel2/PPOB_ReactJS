import React, { useState } from "react";
import background from "../../../assets/img/add-pengguna.png";
import iconEdit from "../../../assets/img/icon-edit.png";
import { toast } from "react-toastify";
import { hasuraApi } from "../../../apis/user";
import telpIcon from "../../../assets/img/icon-telp.png";
import emailIcon from "../../../assets/img/icon-email.png";
import userIcon from "../../../assets/img/icon-user.png";
import lockIcon from "../../../assets/img/icon-lock.png";

const AddModal = ({ isVisible, onClose, setLoading }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [handphone, setHandphone] = useState("");

  const AddData = async () => {
    await hasuraApi
      .post("/users", {
        username: username,
        email: email,
        handphone: handphone,
        password: password,
        avatar: avatar,
      })
      .then((res) => {
        // console.log("data succes", res);
        setLoading(true);
        onClose(true);
        toast.success("Data Akun BERHASIL DIBUAT!");
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Data Akun GAGAL DIBUAT!");
      });
  };

  const imageUpload = (e) => {
    const data = e.target.files[0].name;
    setAvatar(data);
    console.log("data2a", avatar);
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
                <img src={background} alt="" />
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
                  alt=""
                />

                <label htmlFor="file">
                  <img
                    src={iconEdit}
                    alt="edit"
                    className="absolute w-8 h-8 top-[155px] left-[670px]"
                  />
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
                <label className="text-grey2 mb-3">Masukan Username</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={userIcon}
                    alt="user.icon"
                    className="w-5 h-5 mr-2"
                  />

                  <input
                    value={username}
                    type="text"
                    className="w-[100%]"
                    placeholder="Masukan Email..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input mb-[24px]">
                <label className="text-grey2 mb-3">Masukan Email</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={emailIcon}
                    alt="email.icon"
                    className="w-5 h-5 mr-2"
                  />
                  <input
                    value={email}
                    placeholder="Masukan Email..."
                    type="email"
                    className="w-[100%]"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">
                  Masukan Nomor Handphone
                </label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={telpIcon}
                    alt="telp.icon"
                    className="w-5 h-5 mr-2"
                  />

                  <input
                    type="number"
                    required
                    value={handphone}
                    className="w-[100%]"
                    placeholder="Masukan Nomor Handphone..."
                    onChange={(event) => {
                      setHandphone(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col form-input  mb-[24px]">
                <label className="text-grey2 mb-3">Masukan Password</label>
                <div className="flex w-[100%] bg-white items-center pl-3">
                  <img
                    src={lockIcon}
                    alt="lock.icon"
                    className="w-5 h-5 mr-2"
                  />

                  <input
                    type="password"
                    required
                    value={password}
                    className="w-[100%]"
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

export default AddModal;
