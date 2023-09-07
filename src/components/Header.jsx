import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
  return (
    <header>
      <div>
        <img
          src="https://i.pinimg.com/originals/ab/9d/16/ab9d160d211535fb7d23625be2a2884e.png"
          alt=""
        />
        <h2>Uçuş Radarı</h2>
      </div>
      <h4 className="title">
        {store.isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : `${store.flights.length} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
