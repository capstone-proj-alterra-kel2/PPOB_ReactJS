import { useEffect, useState } from "react";
import "../../../assets/styles/dashboard.css";
import icondel from "../../../assets/img/icon-delete.png";
import iconedit from "../../../assets/img/icon-edit2.png";
import iconAdd from "../../../assets/img/icon-add.png";
import AddModal from "../../../components/dashboard/Users/AddModal";
import EditModal from "../../../components/dashboard/Users/EditModal";
import DeleteModal from "../../../components/dashboard/Users/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../redux/feature/UsersSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { getUsersHasura } from "../../../apis/user";
import Pagination from "../../../components/dashboard/pagination/Pagination";
import Loading from "../../../utils/Loading";
import SidebarPage from "../../../components/dashboard/sidebar/Sidebar";

const UsersPage = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const DataUsers = useSelector((state) => state.users.users);
  const [search, setSearch] = useState("");
  console.log("punya data ?", DataUsers);
  // Pagination useState
  const [currentItems, setcurrentItems] = useState(DataUsers);

  // loading
  const [loading, setLoading] = useState(true);

  // Showmodal Edit
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [id, setID] = useState("");

  useEffect(() => {
    getUsersHasura().then((res) => {
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
        item.username.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(DataUsers.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };

  return (
    <SidebarPage>
      {loading ? (
        <div className="h-[100vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="p-5">
          <div className="flex  pb-3 flex-col flex-wrap">
            <div className="mb-5">
              <div className="not-italic text-2xl font-bold ">
                Menu Pengguna
              </div>
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
                  onChange={(e) => {
                    handleSearch(e);
                  }}
                />
              </div>
              <div
                className=" gap-[10px] px-5 pt-[10px] pb-[10px] bg-primary50 text-white cursor-pointer flex justify-center items-center rounded"
                onClick={() => {
                  setShowModal2(true);
                }}
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
          <div className="flex flex-col cards h-[450px]">
            {loading ? (
              <div className="h-[100vh] flex justify-center items-center">
                <Loading />
              </div>
            ) : currentItems.length === 0 ? (
              <div className="bg-golden10 border border-golden text-sm font-medium py-5 px-2 flex items-center justify-center">
                <AiOutlineSearch className="mr-2" />
                <div>Hasil Pencarian Tidak Ditemukan</div>
              </div>
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
                          src={item.avatar}
                          alt="Item"
                          className="w-[55px] h-[55px] rounded-full"
                        />
                      </div>
                      <div className="pr-[25px] w-60">
                        <div className="text-grey2">Username</div>
                        <div>{item.username}</div>
                      </div>
                      <div className="pr-[25px] w-60">
                        <div className="text-grey2">Email</div>
                        <div>{item.email}</div>
                      </div>
                      <div className="pr-[25px] w-60">
                        <div className="text-grey2">No Handphone</div>
                        <div>{item.handphone}</div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        className="px-3 pt-[10px] pb-[10px]  text-primary50 flex mr-2 "
                        onClick={() => {
                          setID(item.id);
                          setShowModal(true);
                        }}
                      >
                        <img
                          src={iconedit}
                          className="w-[20px] h-[20px] mt-1"
                          alt="Edit"
                        />
                      </button>
                      <button
                        className="px-3 pt-[10px] pb-[10px] text-error50 flex"
                        onClick={() => {
                          setID(item.id);
                          setShowModal3(true);
                        }}
                      >
                        <img
                          src={icondel}
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
          <EditModal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            id={id}
            setLoading={setLoading}
          ></EditModal>
          <AddModal
            isVisible={showModal2}
            onClose={() => setShowModal2(false)}
            setLoading={setLoading}
          ></AddModal>
          <DeleteModal
            isVisible={showModal3}
            onClose={() => setShowModal3(false)}
            id={id}
            setLoading={setLoading}
          ></DeleteModal>

          <Pagination
            Datas={DataUsers}
            setcurrentItems={setcurrentItems}
            currentItems={currentItems}
            loading={loading}
          />
        </div>
      )}
      {/* {loading || currentItems.length === 0
        ? null
        : counter === 0
        ? "No data"
        : null} */}
    </SidebarPage>
  );
};

export default UsersPage;
