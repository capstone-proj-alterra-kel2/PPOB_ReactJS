import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import iconAdd from "../../../assets/img/icon-add.png";
import icondel from "../../../assets/img/icon-delete.png";
import iconedit from "../../../assets/img/icon-edit2.png";

const AdminPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-5">
      <div className="flex  pb-3 flex-col">
        <div className="mb-5">
          <div className="not-italic text-2xl font-bold ">Akun Admin</div>
          <p className="text-base font-medium text-grey2">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="search mr-5 w-[315px] bg-white rounded">
            <AiOutlineSearch className="mr-2" />
            <input
              type="text"
              value={search}
              placeholder="Search..."
              // onChange={(e) => {
              //   handleSearch(e);
              // }}
            />
          </div>
          <div
            className=" gap-[10px] px-5 pt-[10px] pb-[10px] bg-primary50 text-white cursor-pointer flex justify-center items-center rounded"
            // onClick={() => {
            //   setShowModal2(true);
            // }}
          >
            <img
              src={iconAdd}
              style={{ width: "22px", height: "22px" }}
              alt="ADD"
            />
            <div>Tambah Pengguna</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col cards ">
        <div className="card h-[80px] mb-2 bg-white flex items-center justify-between px-[18px]">
          <div className="flex items-center flex-1">
            <div className=" mr-5 relative">
              <img
                src="{item.avatar}"
                alt="Item"
                className="w-[55px] h-[55px] rounded-full"
              />
            </div>
            <div className="pr-[25px] w-60">
              <div className="text-grey2">Username</div>
              <div>ha</div>
            </div>
            <div className="pr-[25px] w-60">
              <div className="text-grey2">Email</div>
              <div>a</div>
            </div>
            <div className="pr-[25px] w-60">
              <div className="text-grey2">No Handphone</div>
              <div>ccc</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="px-3 pt-[10px] pb-[10px]  text-primary50 flex mr-2 "
              // onClick={() => {
              //   setID(item.id);
              //   setShowModal(true);
              // }}
            >
              <img
                src={iconedit}
                className="w-[20px] h-[20px] mt-1"
                alt="Edit"
              />
            </button>
            <button
              className="px-3 pt-[10px] pb-[10px] text-error50 flex"
              // onClick={() => {
              //   setID(item.id);
              //   setShowModal3(true);
              // }}
            >
              <img
                src={icondel}
                className="w-[20px] h-[20px] mt-1 "
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
