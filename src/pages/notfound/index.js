import { Link } from "react-router-dom";
import image404 from "../../assets/img/image-404error.png";

const NotFound = () => {
  return (
    <div className="bg-grey h-screen w-screen flex  flex-col justify-center items-center">
      <img src={image404} alt="not found" className="w-[300px] h-[300px]" />
      <h1 className="text-3xl font-bold">Halaman Tidak Ditemukan</h1>
      <p className="text-base font-medium text-grey2 mb-10">
        Halaman yang anda cari mungkin telah dihapus atau sedang terjadi error
      </p>
      <Link to="/">
        <button className="rounded bg-primary50 text-white py-[10px] px-5 gap-[10px]">
          Kembali ke dashboard
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
