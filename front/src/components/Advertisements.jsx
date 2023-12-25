import AdvertisementCard from "./AdvertisementCard";
import { useSelector, useDispatch } from "react-redux";
import { setOffset, setAdvertisement } from "../redux/rootReducer";
import getAdvertisements from "../utils/getAdvertisements";
import css from "./Advertisements.module.css";
import { Outlet } from "react-router-dom";

function Advertisements() {
  const { advertisement, offset, brand, price, mileage } = useSelector(
    (state) => state.cars
  );

  const dispatch = useDispatch();

  function handleOnClick() {
    let newOffset = offset + 10;
    dispatch(setOffset(newOffset));
    getAdvertisements({ brand, price, mileage, offset: newOffset }).then(
      (data) => dispatch(setAdvertisement({advertisements: data, clear: false}))
    );
  }

  return (
    <>
    <Outlet/>
    <div className={css.advertisements_container}>
      <div className={css.advertisement_card}>
        {advertisement.map((ad, i) => (
          <AdvertisementCard data={ad} key={i} />
        ))}
      </div>
      <button className={css.btn_more} onClick={handleOnClick}>Load more</button>
    </div>
    </>
  );
}
export default Advertisements;
