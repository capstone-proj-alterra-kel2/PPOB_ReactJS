import { useEffect, useState } from "react";
import "../../../assets/styles/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../redux/feature/UsersSlice";
import { GetDataUsers } from "../../../apis/user";

import Loading from "../../../utils/Loading";
import { BreadcrumbUser } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";
import {
  CreateUsers,
  UpdateUsers,
  DeleteUsers,
  Pagination,
  Sidebar,
  NotFoundSearch,
} from "../../../components";
// assets logo / icon
import ICONS from "../../../assets/img";
import { AiOutlineSearch } from "react-icons/ai";

const UsersPage = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const DataUsers = useSelector((state) => state.users.users);
  const [search, setSearch] = useState("");
  const [id, setID] = useState("");

  // Pagination useState
  const [currentItems, setcurrentItems] = useState(DataUsers); //5
  // loading
  const [loading, setLoading] = useState(true);

  // Show modal
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);

  useEffect(() => {
    GetDataUsers().then((res) => {
      setLoading(false);
      dispatch(setUsers(res));
    });
  }, [loading]);

  // Filter search to example manage users ==>
  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setSearch(getSearch);
    if (getSearch !== "") {
      const searchData = DataUsers.filter((item) =>
        item.name.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(DataUsers.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };

  return (
    <Sidebar>
      <div className="px-10 pt-5 h-[100%]">
        <div className="pb-5">
          <div className="mb-5">
            <p className="text-base font-medium text-grey2">
              <BreadcrumbUser />
            </p>
            <div className="not-italic text-2xl font-bold ">Menu Pengguna</div>
          </div>
          <div className="flex justify-between">
            <div className="search mr-5 w-[315px] bg-white rounded">
              <AiOutlineSearch className="mr-2" />
              <input
                type="text"
                value={search}
                placeholder="Search..."
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </div>
            <div
              className=" gap-[10px] px-5 pt-[10px] pb-[10px] bg-primary50 text-white cursor-pointer flex justify-center items-center rounded"
              onClick={() => {
                setShowModalAdd(true);
              }}
            >
              <img
                src={ICONS.addIcon}
                style={{ width: "22px", height: "22px" }}
                alt="ADD"
              />
              <div>Tambah Pengguna</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col cards h-[450px] flex-wrap">
          {loading ? (
            <div className="h-[100vh] flex justify-center items-center">
              <Loading />
            </div>
          ) : currentItems.length === 0 ? (
            <NotFoundSearch />
          ) : (
            currentItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="card h-[80px] mb-2 bg-white flex items-center justify-between px-[18px]"
                >
                  <div className="flex items-center flex-1">
                    <div className=" mr-5 relative">
                      <img
                        src={item.image}
                        alt="Item"
                        className="w-[55px] h-[55px] rounded-full"
                      />
                    </div>
                    <div className="pr-[25px] w-60">
                      <div className="text-grey2">Nama Lengkap</div>
                      <div>{item.name}</div>
                    </div>
                    <div className="pr-[25px] w-60">
                      <div className="text-grey2">Email</div>
                      <div>{item.email}</div>
                    </div>
                    <div className="pr-[25px] w-60">
                      <div className="text-grey2">No Handphone</div>
                      <div>{item.phone_number}</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-3 pt-[10px] pb-[10px]  text-primary50 flex mr-2 "
                      onClick={() => {
                        setID(item.id);
                        setShowModalEdit(true);
                      }}
                    >
                      <img
                        src={ICONS.editIcon}
                        className="w-[20px] h-[20px] mt-1"
                        alt="Edit"
                      />
                    </button>
                    <button
                      className="px-3 pt-[10px] pb-[10px] text-error50 flex"
                      onClick={() => {
                        setID(item.id);
                        setShowModalDel(true);
                      }}
                    >
                      <img
                        src={ICONS.deleteIcon}
                        className="w-[20px] h-[20px] mt-1 "
                        alt="Delete"
                      />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <UpdateUsers
          isVisible={showModalEdit}
          onClose={() => setShowModalEdit(false)}
          id={id}
          setLoading={setLoading}
        />
        <CreateUsers
          isVisible={showModalAdd}
          onClose={() => setShowModalAdd(false)}
          setLoading={setLoading}
        />
        <DeleteUsers
          isVisible={showModalDel}
          onClose={() => setShowModalDel(false)}
          id={id}
          setLoading={setLoading}
        />

        <Pagination
          Datas={DataUsers}
          setcurrentItems={setcurrentItems}
          currentItems={currentItems}
          loading={loading}
        />
      </div>
    </Sidebar>
  );
};

export default UsersPage;
