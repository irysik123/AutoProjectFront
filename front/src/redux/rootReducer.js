import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    brand: "",
    price: "",
    mileage: { from: 0, to: 0 },
    advertisement: [],
    brands: [],
    offset: 0
  },
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setMileage(state, action) {
      state.mileage = action.payload;
      // console.log(state.mileage)
    },
    setAdvertisement(state, action) {
      state.advertisement = [...state.advertisement, ...action.payload];
    },
    setBrands(state, action) {
        state.brands = action.payload
    },
    setOffset(state, action) {
      state.offset = action.payload;
    }
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = carsSlice;
// Extract and export each action creator by name
export const { setBrand, setPrice, setMileage, setAdvertisement, setBrands, setOffset } = actions;
// Export the reducer, either as a default or named export
export default reducer;
