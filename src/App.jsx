import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import SideDetails from "./components/SideDetails";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { getFlights } from "./redux/action";

const App = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState("");
  const [showMapView, setshowMapView] = useState(null);
  const dispatch = useDispatch();
  // Uçuşları Getirir
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  // haritayı açar ve detaylarınız göstericeğimi uçağın id'sini alır
  const openDetail = (id) => {
    // detaylarınız göstericeğimi uçağın id'sini alır
    setDetailId(id);
    // haritayı açar
    setShowDetail(true);
  };
  return (
    <>
      <Header />
      {/* Yan detay alanı */}
      {showDetail && (
        <SideDetails setShowDetail={setShowDetail} detailId={detailId} />
      )}
      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setshowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setshowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {/* hangi bileşenin ekrana basılacağına karar  ver */}
      {showMapView ? (
        <MapView openDetail={openDetail} setShowDetail={setShowDetail} />
      ) : (
        <ListView openDetail={openDetail} setShowDetail={setShowDetail} />
      )}
    </>
  );
};

export default App;
