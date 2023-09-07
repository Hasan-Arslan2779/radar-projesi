import axios from "axios";
import { useEffect, useState } from "react";
import { detailOpt } from "../helpers/constant";
const SideDetails = ({ detailId, setShowDetail }) => {
  const [det, setDetail] = useState(null);
  // İd her değiştiğinde  o id'ye sahip uçağın detaylarını alır
  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOpt
      )
      .then((res) => setDetail(res.data));
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close" onClick={() => setShowDetail(false)}>
          <span>X</span>
        </p>
        {!det ? (
          <p className="load">Yükleniyor...</p>
        ) : (
          <>
            <h2>{det.aircraft?.model?.text}</h2>
            <h2>{det.aircraft?.model?.code}</h2>
            <p>Kuyruk No: {det.aircraft?.registration}</p>
            <img src={det.aircraft?.images?.large[0]?.src} alt="" />
            <p>Şirket : {det.airline?.short}</p>
            <p>
              Kalkış :{" "}
              <a href={det.airport?.origin?.website}>
                {det.airport?.origin?.name}
              </a>
            </p>
            <p>
              Hedef :{" "}
              <a href={det.airport?.destination?.website}>
                {det.airport?.destination?.name}
              </a>
            </p>
            <p>
              Durum :{" "}
              <span className="status" style={{ background: det.status?.icon }}>
                {det.status?.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetails;
