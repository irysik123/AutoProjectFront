import AdvertisementCard from "./AdvertisementCard";
import { useSelector } from "react-redux";

function Advertisements() {
    const advertisements = useSelector((state) => state.cars.advertisement)

    return <div>
        {advertisements.map((ad, i) => <AdvertisementCard data={ad} key={i}/>)}
    </div>
  }

export default Advertisements;