import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
const ListView = ({ openDetail }) => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(0);
  //SAYFALAMA DEĞERLERİ

  // Sayfa Başına Eleman
  const itemsPerPage = 10;
  // gösterilecek son itemi tespit
  const endOffset = itemOffset + itemsPerPage;
  // Belirli aralıktaki  "3.sayfada için (20-30)" aralığı diziden alıyor
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  // Toplam Kaç Sayfa Olduğunu Hesaplıyor
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);
  // Sayfalara tıklanınca çalışır >
  const handlePageClick = (event) => {
    // > Kaçıncı elemandan itibaren kesileceğini hesaplar
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover ">
        <thead>
          <tr>
            <th>İd</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly) => (
              <tr key={fly.id}>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lan}</td>
                <td>
                  <button onClick={() => openDetail(fly.id)}>Detay</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="İleri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Geri"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default ListView;
