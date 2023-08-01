import React, { useState, useEffect } from "react";
import "../../../assets/styles/modal.css";
import backgroundDel from "../../../assets/img/del-product.png";
import { toast } from "react-toastify";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";

const DelPaketDataTelkomsel = ({ isVisible, onClose, id, setLoading }) => {
  const idUser = id;
  const token = Cookies.get("token");
  const [name, setName] = useState("");

  // get data name user
  useEffect(() => {
    AxiosInstance(`/admin/products/${idUser}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setName(res.data.data?.name);
    });
  }, [idUser, token]);

  // pop up / modals
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // remove data using axios delete
  const handleDelete = () => {
    AxiosInstance.delete(`/admin/products/${idUser}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log("data terhapus", res);
        setLoading(true);
        onClose(true);
        toast.success("Akun Pengguna BERHASIL DIHAPUS!");
      })
      .catch((err) => {
        toast.error("Data Akun  Pengguna GAGAL DIHAPUS!");
      });
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-grayScale-100 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[454px] flex flex-col">
          <div className="bg-grayScale-20 p-2 rounded">
            <div className="flex flex-col">
              <div className="h-[68px] w-[100%] ">
                <img src={backgroundDel} />
              </div>
            </div>
            <div>
              <h1 className="text-lg text-center mb-[10px]">
                Anda yakin ingin menghapus Produk ini:
              </h1>
              <div className="bg-warning-10 h-[45px] mb-5 text-center text-sm pt-[10px] pb-[10px]">
                {name}
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
      </div>
    </>
  );
};

export default DelPaketDataTelkomsel;
