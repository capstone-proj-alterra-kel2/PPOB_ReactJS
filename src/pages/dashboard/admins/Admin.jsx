import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { GetDataforadmin } from "../../../apis/user";
import ICONS from "../../../assets/img";
import {
  Pagination,
  CreateAdmins,
  UpdateAdmins,
  DeleteAdmins,
  NotFoundSearch,
  Sidebar,
} from "../../../components";
import { setAdmins } from "../../../redux/feature/AdminSlice";
import Loading from "../../../utils/Loading";
import { BreadcrumbAdmin } from "../../../components/dashboard/breadcrumbs/BreadCrumbs";

const AdminPage = ({ isOpen }) => {
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
    GetDataforadmin()
      .then((res) => {
        console.log("data admin", res);
        setLoading(false);
        dispatch(setAdmins(res));
      })
      .catch((err) => console.log(err));
  }, [loading]);

  // useEffect(() => {
  //   AxiosInstance.get("/admin/users").then((res) => {
  //     console.log(res);
  //   });
  // });

  // Filter search to example manage users ==>
  const handleSearch = (e) => {
    const getSearch = e.target.value;
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
    <Sidebar>
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
                src={ICONS.addIcon}
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
            <NotFoundSearch />
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
                        src={ICONS.editIcon}
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
        <CreateAdmins
          isVisible={showModalAddAdmin}
          onClose={() => setShowModalAddAdmin(false)}
          setLoading={setLoading}
        ></CreateAdmins>
        <UpdateAdmins
          isVisible={showModalEditAdmin}
          onClose={() => setShowModalEditAdmin(false)}
          setLoading={setLoading}
          id={id}
        ></UpdateAdmins>
        <DeleteAdmins
          isVisible={showModalDelAdmin}
          onClose={() => setShowModalDelAdmin(false)}
          setLoading={setLoading}
          id={id}
        ></DeleteAdmins>
        <Pagination
          Datas={DataAdmins}
          setcurrentItems={setcurrentItems}
          currentItems={currentItems}
          loading={loading}
        />
      </div>
    </Sidebar>
  );
};

export default AdminPage;
