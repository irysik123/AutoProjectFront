import AdvertisementCard from "./AdvertisementCard";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setOffset, setAdvertisement, setLoadMore } from "../redux/rootReducer";
import getAdvertisements from "../utils/getAdvertisements";
import css from "./Advertisements.module.css";
import { Outlet } from "react-router-dom";

function Advertisements() {
  // const [loadMore, setLoadMore] = useState(true)
  const { advertisement, offset, brand, price, mileage, loadMore } = useSelector(
    (state) => state.cars
  );

  const dispatch = useDispatch();

  function handleOnClick() {
    let newOffset = offset + 10;
    dispatch(setOffset(newOffset));
    getAdvertisements({ brand, price, mileage, offset: newOffset }).then(
      (data) => {
        dispatch(setLoadMore(data.total > data.amount))
        dispatch(setAdvertisement({advertisements: data.data, clear: false}))
      }
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
      {loadMore && <button className={css.btn_more} onClick={handleOnClick}>Load more</button>}
    </div>
    </>
  );
}
export default Advertisements;
