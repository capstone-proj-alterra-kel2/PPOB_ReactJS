import { AxiosInstance } from "../../../apis/api";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await AxiosInstance();
      setData(res);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
};

export default App;
