export async function getAdvertisements(filters) {
  let baseURL = "http://localhost:4000/advertisements";

  if (filters) {
    filters.mileageFrom = filters.mileage.from;
    filters.mileageTo = filters.mileage.to;

    delete filters.mileage;
    baseURL += "?" + new URLSearchParams(filters).toString();
  }

  return await fetch(baseURL)
    .then((data) => {
      console.log(data);
      if (data.ok) {
        return data.json();
      } else {
        return { total: 0, amount: 0, data: [] };
      }
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
}
