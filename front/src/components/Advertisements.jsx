import AdvertisementCard from "./AdvertisementCard";
import { useSelector, useDispatch } from "react-redux";
import { setOffset, setAdvertisement } from "../redux/rootReducer";
import getAdvertisements from "../utils/getAdvertisements";

function Advertisements() {
  const { advertisement, offset, brand, price, mileage } = useSelector(
    (state) => state.cars
  );

  const dispatch = useDispatch();

  function handleOnClick() {
    let newOffset = offset +10 
   dispatch( setOffset(newOffset))
    getAdvertisements({ brand, price, mileage, offset:newOffset }).then((data) =>
      dispatch(setAdvertisement(data))
    );
  }

  return (
    <div>
      {advertisement.map((ad, i) => (
        <AdvertisementCard data={ad} key={i} />
      ))}
      <button onClick={handleOnClick}>Load more</button>
    </div>
  );
}
export default Advertisements;
