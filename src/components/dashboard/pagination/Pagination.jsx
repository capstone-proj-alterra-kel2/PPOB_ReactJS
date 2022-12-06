import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ Datas, setcurrentItems, currentItems, loading }) => {
  const [pageCount, setpageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const endOffset = itemsPerPage + itemOffset;
  const enteries = Datas.length;
  // pagination
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setcurrentItems(Datas.slice(itemOffset, endOffset));
    setpageCount(Math.ceil(Datas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, Datas]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Datas.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {loading ? (
        "Loading"
      ) : currentItems.length === 0 ? null : (
        <div className=" flex  justify-between pt-3">
          <div className="ml-[30px]">
            Menampilkan {itemOffset + 1} dari {endOffset} | {enteries} Data
          </div>
          <ReactPaginate
            previousLabel={`<`}
            nextLabel={`>`}
            breakLabel={`...`}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={`pagination`}
            pageClassName={`page-item`}
            pageLinkClassName={`page-link-data`}
            previousLinkClassName={`page-link`}
            nextLinkClassName={`page-link-next`}
            activeLinkClassName={`active`}
          />
        </div>
      )}
    </>
  );
};

export default Pagination;
