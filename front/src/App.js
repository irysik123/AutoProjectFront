import "./App.css";
import HomePage from "./components/HomePage";
import AddForm from "./components/AddForm"
import { useEffect } from "react";
import { setAdvertisement, setBrands, setLoadMore } from "./redux/rootReducer";
import { useDispatch } from "react-redux";
import { Route, useRouteError, BrowserRouter, Routes } from "react-router-dom";
import getAdvertisements from "./utils/getAdvertisements";
import AdvertisementDetail from "./components/AdvetisementDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:4000/brands")
      .then((result) => result.json())
      .then((data) => dispatch(setBrands(data)));
    getAdvertisements().then((data) => {
      dispatch(setLoadMore(data.total > data.amount));
      dispatch(setAdvertisement({ advertisements: data.data, clear: true }));
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" errorElement={<ErrorBoundary />}>
          <Route element={<AddForm/>} path="addForm"/>
          <Route element={<AdvertisementDetail />} path="advertisement/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

export default App;
