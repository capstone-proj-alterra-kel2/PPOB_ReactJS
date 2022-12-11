import iconProducts from "../../../assets/img/icon-products.png";
import iconHistory from "../../../assets/img/icon-history.png";
import iconUsers from "../../../assets/img/icon-users.png";
import iconAdmin from "../../../assets/img/icon-admin.png";
import { FaConnectdevelop } from "react-icons/fa";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";

export const menuItem = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaConnectdevelop className="w-7 h-7" />,
  },
  {
    path: "/dashboard/users",
    name: "Pengguna",
    icon: <img src={iconUsers} alt="" className="w-7 h-7" />,
  },
  {
    path: "/dashboard/products",
    name: "Produk Kami",
    icon: <img src={iconProducts} alt="" className="w-7 h-7" />,
  },
  {
    path: "/dashboard/transactions",
    name: "Riwayat Transaksi",
    icon: <img src={iconHistory} alt="" className="w-7 h-7" />,
  },
  {
    path: "/dashboard/admins",
    name: "Akun Admin",
    icon: <img src={iconAdmin} alt="" className="w-7 h-7" />,
  },
];
