import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Telkomcolumns } from "../../../../components/dashboard/products/Telkomsel";

import { useState } from "react";
import { produts } from "../../../../apis/produtcs";
import { AiOutlineSearch } from "react-icons/ai";

const TelkomselPage = () => {
  const [dataProducts, setDataProducts] = useState(produts);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold pl-1">Pulsa Telkomsel</h1>
        <div className="search w-[315px] bg-white rounded h-[45px] m-1">
          <AiOutlineSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Box sx={{ height: 500, width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={dataProducts.filter((data) => {
              return search.toLowerCase() === ""
                ? data
                : data.nama_produk.toLowerCase().includes(search);
            })}
            columns={Telkomcolumns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

export default TelkomselPage;

//   useEffect(() => {
//     const loweredSearchedWords = search.toLowerCase();
//     const updatedDataProducts = [];
//     if (search !== "") {
//       dataProducts.forEach((dataProduct) => {
//         const lowerProducts = dataProduct.name.toLowerCase();
//         if (lowerProducts.includes(loweredSearchedWords)) {
//           updatedDataProducts.push(dataProduct);
//         }
//       });
//       setDataProducts2(updatedDataProducts);
//     } else {
//       setDataProducts2(dataProducts);
//     }
//   }, [dataProducts, search]);

//   function reducer(acc, cur) {
//     return { ...acc, [cur.id]: cur };
//   }
//   const newDatas = dataProducts.reduce(reducer, {});
//   setData(newDatas);

//   console.log("new Datas", newDatas);
