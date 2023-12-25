import { useSelector, useDispatch } from "react-redux";
import {
  setBrand,
  setPrice,
  setMileage,
  setAdvertisement,
} from "../redux/rootReducer";
import getAdvertisements from "../utils/getAdvertisements";
import css from "./Advertisements.module.css";

const prices = [30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500];

export default function Search() {
  const dispatch = useDispatch();

  const { brand, price, mileage, brands } = useSelector((state) => {
    return state.cars;
  });

  function handleOnClick() {
    getAdvertisements({ brand, price, mileage }).then((data) =>
      dispatch(setAdvertisement({advertisements: data, clear:true}))
    );
  }

  return (
    <div className={css.search_bar}>
      <div>
        <p className={css.search_header}>Car Brand</p>
        <select
        className={css.select}
          name="Car brand"
          id="carBrand"
          value={brand}
          onChange={(i) => dispatch(setBrand(i.target.value))}
          
        >
          <option value="">Enter the text</option>
          {brands.map((brand, i) => (
            <option value={brand} key={i}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={css.search_header}>Price/ 1 hour</p>
        <select
          name="Car price"
          id="carPrice"
          value={price}
          onChange={(i) => dispatch(setPrice(i.target.value))}
          className={`${css['select_price']}`}
        >
          <option value="To $">To $</option>
          {prices.map((price, i) => (
            <option value={price} key={i}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className={css.search_header}>Car mileage / km</p>
        <input
          type="text"
          value={mileage.from}
          onChange={(i) =>
            dispatch(setMileage({ ...mileage, from: i.target.value }))
          }
          className={` ${css['select_from']}`}
        />
        <input
          type="text"
          value={mileage.to}
          onChange={(i) =>
            dispatch(setMileage({ ...mileage, to: i.target.value }))
          }
          className={`${css['select_from']}`}
        />
      </div>

      <button className={css.btn_search} onClick={handleOnClick}>Search</button>
    </div>
  );
}
