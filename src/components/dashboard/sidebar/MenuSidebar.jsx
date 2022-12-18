import iconProducts from "../../../assets/img/icon-products.png";
import iconHistory from "../../../assets/img/icon-history.png";
import iconUsers from "../../../assets/img/icon-users.png";
import iconAdmin from "../../../assets/img/icon-admin.png";
import { FaConnectdevelop } from "react-icons/fa";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

export const menuItem = [
  // {
  //   path: "/",
  //   name: "Dashboard",
  //   icon: <FaConnectdevelop className="w-7 h-7" />,
  // },
  {
    path: "/users",
    name: "Pengguna",
    icon: <GroupsOutlinedIcon className="w-7 h-7" />,
  },
  {
    path: "/products",
    name: "Produk Kami",
    icon: <img src={iconProducts} alt="" className="w-7 h-7" />,
  },
  {
    path: "/transactions",
    name: "Riwayat Transaksi",
    icon: <img src={iconHistory} alt="" className="w-7 h-7" />,
  },
  {
    path: "/admins",
    name: "Akun Admin",
    icon: <img src={iconAdmin} alt="" className="w-7 h-7" />,
  },
];
