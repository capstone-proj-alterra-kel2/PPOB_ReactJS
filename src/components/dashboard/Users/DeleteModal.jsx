import React, { useState, useEffect } from "react";
import "../../../assets/styles/modal.css";
import backgroundDel from "../../../assets/img/del-pengguna.png";
import { toast } from "react-toastify";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";

const DeleteModal = ({ isVisible, onClose, id, setLoading }) => {
  const idUser = id;
  const [email, setEmail] = useState("");
  const token = Cookies.get("token");

  // get data email user
  useEffect(() => {
    AxiosInstance(`/admin/users/${idUser}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setEmail(res.data.data?.email);
    });
  }, [idUser, token]);

  // pop up / modals
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // remove data using axios delete
  const handleDelete = () => {
    AxiosInstance.delete(`/admin/users/${idUser}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then(() => {
        setLoading(true);
        onClose(true);
        toast.success("Akun Pengguna BERHASIL DIHAPUS!");
      })
      .catch(() => {
        toast.error("Data Akun  Pengguna GAGAL DIHAPUS!");
      });
  };

  return (
    <section className="modal-component " id="wrapper" onClick={handleClose}>
      <div className="w-[454px] flex flex-col">
        <div className="bg-primary-10 p-2 rounded">
          <div className="flex flex-col">
            <div className="h-[68px] w-[100%] ">
              <img src={backgroundDel} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-lg text-center mb-[10px]">
              Anda yakin ingin menghapus akun dengan email
            </h1>
            <div className="bg-warning-10 h-[45px] mb-5 text-center text-sm pt-[10px] pb-[10px]">
              {email}
            </div>
          </div>
          <div className="flex justify-center items-center mx-auto">
            <button
              onClick={() => {
                onClose();
                toast.error("Akun Pengguna GAGAL DIHAPUS!");
              }}
              className="bg-primary-10 p-[10px] w-[200px] mr-[12px] gap-[10px] text-primary-50 border-solid border-2 border-primary-50 rounded"
            >
              Kembali
            </button>
            <button
              onClick={handleDelete}
              className="p-[10px] w-[200px] bg-error-40 gap-[10px] text-grayScale-10 rounded"
            >
              Ya, Hapus Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteModal;
