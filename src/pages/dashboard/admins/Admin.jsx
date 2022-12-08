import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAdminsHasura } from "../../../apis/user";
import iconAdd from "../../../assets/img/icon-add.png";
import icondel from "../../../assets/img/icon-delete.png";
import iconedit from "../../../assets/img/icon-edit2.png";
import AddModal from "../../../components/dashboard/admin/AddModal";
import EditModal from "../../../components/dashboard/admin/EditModal";
import ModalDeleteAdmin from "../../../components/dashboard/admin/ModalDeleteAdmin";
import Pagination from "../../../components/dashboard/pagination/Pagination";
import Search from "../../../components/dashboard/search/Search";
import SidebarPage from "../../../components/dashboard/sidebar/Sidebar";
import { setAdmins } from "../../../redux/feature/AdminSlice";
import Loading from "../../../utils/Loading";
import { BreadcrumbAdmin } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";
import { AxiosInstance } from "../../../apis/api";
import Cookies from "js-cookie";

const AdminPage = () => {
  const token = Cookies.get("token");
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const DataAdmins = useSelector((state) => state.admins.admins);
  const [id, setID] = useState("");
  const [currentItems, setcurrentItems] = useState(DataAdmins);

  // const token = Cookies.get("token");

  // loading
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  // Showmodal
  const [showModalEditAdmin, setShowModalEditAdmin] = useState(false);
  const [showModalAddAdmin, setShowModalAddAdmin] = useState(false);
  const [showModalDelAdmin, setShowModalDelAdmin] = useState(false);

  useEffect(() => {
    AxiosInstance("/admin/admins?size=100&sort=name", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      setLoading(false);
      dispatch(setAdmins(res.data.data.items));
      console.log("data admins", res.data.data.items);
    });
  }, [loading]);

  // Filter search to example manage users ==>
  const handleSearch = (e) => {
    const getSearch = e.target.value;
    console.log("serach value", getSearch);
    setSearch(getSearch);
    if (getSearch !== "") {
      const searchData = DataAdmins.filter((item) =>
        item.name.toLowerCase().includes(getSearch)
      );
      setcurrentItems(searchData.slice(0, 5));
    } else {
      setcurrentItems(DataAdmins.slice(0, 5));
    }
    setCounter((prev) => prev + 1);
  };

  return (
    <SidebarPage>
      <div className="px-10 py-5">
        <div className="flex  pb-3 flex-col">
          <div className="mb-5">
            <p className="text-base font-medium text-grey2">
              <BreadcrumbAdmin />
            </p>
            <div className="not-italic text-2xl font-bold ">Menu Admin</div>
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
                setShowModalAddAdmin(true);
              }}
            >
              <img
                src={iconAdd}
                style={{ width: "22px", height: "22px" }}
                alt="ADD"
              />
              <div>Tambah Admin</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col cards h-[450px]">
          {loading ? (
            <div className="h-[100vh] flex justify-center items-center">
              <Loading />
            </div>
          ) : currentItems.length === 0 ? (
            <Search />
          ) : (
            currentItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="card h-[80px] mb-2 bg-white flex items-center justify-between px-[18px] flex-wrap"
                >
                  <div className="flex items-center text-sm ">
                    <div className=" mr-12 relative">
                      <img
                        src={item.image}
                        alt="Item"
                        className="w-[55px] h-[55px] rounded-full"
                      />
                    </div>
                    <div className="pr-[50px] w-[250px]">
                      <div className="text-grey2">Nama Lengkap</div>
                      <div>{item.name}</div>
                    </div>
                    <div className="pr-[50px] w-60">
                      <div className="text-grey2">Email</div>
                      <div>{item.email}</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-3 pt-[10px] pb-[10px]  text-primary50 flex mr-2 "
                      onClick={() => {
                        setID(item.id);
                        setShowModalEditAdmin(true);
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
                        setShowModalDelAdmin(true);
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
        <AddModal
          isVisible={showModalAddAdmin}
          onClose={() => setShowModalAddAdmin(false)}
          setLoading={setLoading}
        ></AddModal>
        <EditModal
          isVisible={showModalEditAdmin}
          onClose={() => setShowModalEditAdmin(false)}
          setLoading={setLoading}
          id={id}
        ></EditModal>
        <ModalDeleteAdmin
          isVisible={showModalDelAdmin}
          onClose={() => setShowModalDelAdmin(false)}
          setLoading={setLoading}
          id={id}
        ></ModalDeleteAdmin>
        <Pagination
          Datas={DataAdmins}
          setcurrentItems={setcurrentItems}
          currentItems={currentItems}
          loading={loading}
        />
      </div>
    </SidebarPage>
  );
};

export default AdminPage;
