// import TelkomselPage from "../../pages/dashboard/products/telecommunication/Telkomsel";
import axios from "axios";
import { useState, useEffect } from "react";

export const Telkomcolumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "nama_produk",
    headerName: "Nama Produk",
    width: 262,
    editable: true,
  },
  {
    field: "harga_produk",
    headerName: "Harga Produk",
    width: 150,
    editable: true,
  },
  {
    field: "stok_produk",
    headerName: "Stok Produk",
    width: 110,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className=" w-[100%]">
          <div className="flex justify-center items-center text-white">
            <div className="pr-2">
              <button className="bg-midblue gap-3 px-5 pt-[10px] pb-[10px] rounded">
                Edit
              </button>
            </div>
            <button className="bg-midred gap-3 px-5 pt-[10px] pb-[10px] rounded">
              Delete
            </button>
          </div>
        </div>
      );
    },
  },
];
