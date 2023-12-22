import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getAdvertisement from "../utils/getAdvertisement";

export default function AdvertisementDetail() {
    let { id } = useParams();

   const [car, setCar] = useState('')
   useEffect(() => {
    getAdvertisement(id).then((data) => setCar(data))
   }, [id])
   
    return (
      <div>
       {JSON.stringify(car)}
      </div>
    );
  }