import pulsa from "../../../assets/img/products/Pulsa.png";
import paketData from "../../../assets/img/products/Paket_data.png";
import indihome from "../../../assets/img/products/Indihome.png";
import bpjs from "../../../assets/img/products/BPJS.png";
import dana from "../../../assets/img/products/dana.png";
import game from "../../../assets/img/products/game.png";
import googlePLay from "../../../assets/img/products/GooglePlay.png";
import gopay from "../../../assets/img/products/gopay.png";
import linkAja from "../../../assets/img/products/LinkAja.png";
import ovo from "../../../assets/img/products/ovo.png";
import pdam from "../../../assets/img/products/PDAM.png";
import shopee from "../../../assets/img/products/shopee.png";
import tagihanListrik from "../../../assets/img/products/Tagihan_listrik.png";
import tokenListrik from "../../../assets/img/products/Token_listrik.png";
export const telekomunikasi = [
  {
    id: 1,
    path: "pulsa",
    produk: "Pulsa",
    logo: (
      <img src={pulsa} alt="pulsa" style={{ width: "48px", height: "48px" }} />
    ),
  },
  {
    id: 2,
    path: "paket-data",
    produk: "Paket Data",
    logo: (
      <img
        src={paketData}
        alt="paket Data"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
  {
    id: 3,
    path: "/",
    produk: "Indihome",
    logo: (
      <img
        src={indihome}
        alt="Indihome"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
];

export const tagihan = [
  {
    id: 1,
    path: "/",
    produk: "BPJS",
    logo: (
      <img src={bpjs} alt="BPJS" style={{ width: "48px", height: "48px" }} />
    ),
  },
  {
    id: 2,
    path: "/",
    produk: "Listrik",
    logo: (
      <img
        src={tagihanListrik}
        alt="Tagihan Listrik"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
  {
    id: 3,
    path: "/",
    produk: "Token Listrik",
    logo: (
      <img
        src={tokenListrik}
        alt="Token Listrik"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
  {
    id: 4,
    path: "/",
    produk: "PDAM",
    logo: (
      <img src={pdam} alt="PDAM" style={{ width: "48px", height: "48px" }} />
    ),
  },
];

export const voucher = [
  {
    id: 1,
    path: "/",
    produk: "Voucher Game",
    logo: (
      <img
        src={game}
        alt="Voucher Game"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
  {
    id: 2,
    path: "/",
    produk: "Google Play",
    logo: (
      <img
        src={googlePLay}
        alt="Google Play"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
];

export const keuangan = [
  {
    id: 1,
    path: "/",
    produk: "ShoopePay",
    logo: (
      <img
        src={shopee}
        alt="Shopee"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
  {
    id: 2,
    path: "/",
    produk: "Linkaja",
    logo: (
      <img
        src={linkAja}
        alt="LinkAja"
        style={{ width: "48px", height: "48px" }}
      />
    ),
  },
  {
    id: 3,
    path: "/",
    produk: "Dana",
    logo: (
      <img src={dana} alt="Dana" style={{ width: "48px", height: "48px" }} />
    ),
  },
  {
    id: 4,
    path: "/",
    produk: "Gopay",
    logo: (
      <img src={gopay} alt="Gopay" style={{ width: "48px", height: "48px" }} />
    ),
  },
  {
    id: 5,
    path: "/",
    produk: "Ovo",
    logo: <img src={ovo} alt="OVO" style={{ width: "48px", height: "48px" }} />,
  },
];
