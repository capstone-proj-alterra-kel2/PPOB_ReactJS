import { AxiosInstance } from "./api";
import Cookies from "js-cookie";

export const GetDataTransactions = async () => {
  const token = Cookies.get("token");

  const res = await AxiosInstance.get("/admin/transactions?size=8000&sort=id", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data.items;
};

export const transactions = [
  {
    id: 1,
    date_transaction: "04/30/2022",
    time_transaction: "2:58",
    email: "wtillman0@smugmug.com",
    products: "pulsa",
    total: "$69.3M",
    status: "success",
  },
  {
    id: 2,
    date_transaction: "07/02/2022",
    time_transaction: "1:02",
    email: "gcrathern1@photobucket.com",
    products: "pulsa",
    total: "$362.28M",
    status: "pending",
  },
  {
    id: 3,
    date_transaction: "12/20/2021",
    time_transaction: "17:50",
    email: "bcully2@pagesperso-orange.fr",
    products: "paketdata",
    total: "$806.79M",
    status: "pending",
  },
  {
    id: 4,
    date_transaction: "06/30/2022",
    time_transaction: "18:06",
    email: "nduckworth3@mac.com",
    products: "paketdata",
    total: "$397.33M",
    status: "success",
  },
  {
    id: 5,
    date_transaction: "06/13/2022",
    time_transaction: "11:56",
    email: "atuckwell4@gov.uk",
    products: "pdam",
    total: "$4.06B",
    status: "pending",
  },
  {
    id: 6,
    date_transaction: "09/27/2022",
    time_transaction: "2:07",
    email: "gkirman5@facebook.com",
    products: "pdam",
    total: "$99.1M",
    status: "pending",
  },
  {
    id: 7,
    date_transaction: "10/30/2022",
    time_transaction: "0:02",
    email: "ttripp6@ed.gov",
    products: "Trueblue - Blueberry 12x473ml",
    total: "$65.53M",
    status: "success",
  },
  {
    id: 8,
    date_transaction: "02/04/2022",
    time_transaction: "5:58",
    email: "jmcclounan7@berkeley.edu",
    products: "Laundry - Bag Cloth",
    total: "$128.8M",
    status: "success",
  },
  {
    id: 9,
    date_transaction: "01/10/2022",
    time_transaction: "19:38",
    email: "aheasly8@oaic.gov.au",
    products: "Pastry - Chocolate Chip Muffin",
    total: "$484.51M",
    status: "success",
  },
  {
    id: 10,
    date_transaction: "12/26/2021",
    time_transaction: "2:04",
    email: "kchristoffe9@shareasale.com",
    products: "Wine - Wyndham Estate Bin 777",
    total: "n/a",
    status: "success",
  },
  {
    id: 11,
    date_transaction: "08/28/2022",
    time_transaction: "1:05",
    email: "pmcquaidea@opera.com",
    products: "Icecream Bar - Del Monte",
    total: "$3.47B",
    status: "pending",
  },
  {
    id: 12,
    date_transaction: "01/25/2022",
    time_transaction: "7:50",
    email: "cburhouseb@about.com",
    products: "Wine - Chardonnay Mondavi",
    total: "n/a",
    status: "pending",
  },
  {
    id: 13,
    date_transaction: "06/15/2022",
    time_transaction: "19:23",
    email: "cpaulec@sphinn.com",
    products: "Gloves - Goldtouch Disposable",
    total: "n/a",
    status: "pending",
  },
  {
    id: 14,
    date_transaction: "12/09/2022",
    time_transaction: "8:35",
    email: "gdelaunded@sciencedirect.com",
    products: "Beer - True North Strong Ale",
    total: "$3.87B",
    status: "pending",
  },
  {
    id: 15,
    date_transaction: "07/03/2022",
    time_transaction: "23:12",
    email: "hraye@php.net",
    products: "Lid - High Heat, Super Clear",
    total: "$25.18B",
    status: "success",
  },
  {
    id: 16,
    date_transaction: "11/25/2022",
    time_transaction: "16:34",
    email: "klawlanf@zimbio.com",
    products: "Cheese - Ermite Bleu",
    total: "n/a",
    status: "success",
  },
  {
    id: 17,
    date_transaction: "12/12/2021",
    time_transaction: "11:26",
    email: "mstattong@huffingtonpost.com",
    products: "Lid - 3oz Med Rec",
    total: "$11.18B",
    status: "success",
  },
  {
    id: 18,
    date_transaction: "07/21/2022",
    time_transaction: "8:33",
    email: "dbeeswingh@uol.com.br",
    products: "Vinegar - White",
    total: "$429.86M",
    status: "success",
  },
  {
    id: 19,
    date_transaction: "10/22/2022",
    time_transaction: "20:33",
    email: "dransburyi@blog.com",
    products: "Pork - Shoulder",
    total: "$8.17M",
    status: "pending",
  },
  {
    id: 20,
    date_transaction: "08/30/2022",
    time_transaction: "18:22",
    email: "fgundersonj@diigo.com",
    products: "Samosa - Veg",
    total: "$1.84B",
    status: "success",
  },
  {
    id: 21,
    date_transaction: "08/30/2022",
    time_transaction: "18:22",
    email: "fgundersonj@diigo.com",
    products: "pulsa",
    total: "$1.84B",
    status: "success",
  },
];
