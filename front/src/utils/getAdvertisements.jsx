export default async function getAdvertisements(filters) {
   let baseURL = "http://localhost:4000/advertisements";



   if(filters) {
    filters.mileageFrom = filters.mileage.from
    filters.mileageTo = filters.mileage.to

    delete filters.mileage
    baseURL += '?' + new URLSearchParams(filters).toString();
   }

    return await fetch(baseURL).then((data) =>
      data.json()
    );
  }