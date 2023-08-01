import magnifyingGlass from "../../../assets/img/magnifying-glass 1.png";

const Search = () => {
  return (
    <div className="flex flex-col items-center bg-grayScale-10 mt-10">
      <div className="p-10 rounded-2xl">
        <img src={magnifyingGlass} className="w-[70px] h-[70px]" />
      </div>
      <h1 className="mt-5 text-2xl font-bold">
        Hasil pencarian tidak ditemukan
      </h1>
      <p className="text-grayScale-60 font-medium text-base mt-3">
        Kata kunci yang anda cari tidak sesuai dengan data apapun
      </p>
    </div>
  );
};

export default Search;
