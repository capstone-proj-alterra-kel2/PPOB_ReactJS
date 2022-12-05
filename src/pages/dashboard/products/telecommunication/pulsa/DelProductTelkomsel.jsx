import React, { useState, useEffect } from "react";
import "../../../../../assets/styles/modal.css";
import backgroundDel from "../../../../../assets/img/del-product.png";
import { toast } from "react-toastify";
// import { hasuraApi } from "../../../apis/user";

const DelProductTelkomsel = ({ isVisible, onClose, id, setLoading }) => {
  const idUser = id;
  const [email, setEmail] = useState("");

  // get data email user
  //   useEffect(() => {
  //     hasuraApi(`/get/${idUser}`).then((res) => {
  //       console.log("id user", res.data.users_by_pk);
  //       setEmail(res.data.users_by_pk.email);
  //     });
  //   }, [idUser]);

  // pop up / modals
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  // remove data using axios delete
  //   const handleDelete = () => {
  //     hasuraApi
  //       .delete(`delete/${idUser}`)
  //       .then(() => {
  //         setLoading(true);
  //         onClose(true);
  //         toast.success("Akun Pengguna BERHASIL DIHAPUS!");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         toast.error("Data Akun  Pengguna GAGAL DIHAPUS!");
  //       });
  //   };

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
                <img src={backgroundDel} />
              </div>
            </div>
            <div>
              <h1 className="text-lg text-center mb-[10px]">
                Anda yakin ingin menghapus Produk ini:
              </h1>
              <div className="bg-lightyellow h-[45px] mb-5 text-center text-sm pt-[10px] pb-[10px]">
                {email}
              </div>
            </div>
            <div className="flex justify-center items-center mx-auto">
              <button
                onClick={() => {
                  onClose();
                  toast.error("Akun Pengguna GAGAL DIHAPUS!");
                }}
                className="bg-grey p-[10px] w-[200px] mr-[12px] gap-[10px] text-midblue border-solid border-2 border-midblue rounded"
              >
                Kembali
              </button>
              <button
                //  onClick={handleDelete}
                className="p-[10px] w-[200px] bg-red2 gap-[10px] text-white rounded"
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

export default DelProductTelkomsel;
