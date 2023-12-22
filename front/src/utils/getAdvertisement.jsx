export default async function getAdvertisement(id) {
    let baseURL = "http://localhost:4000";

    return await fetch(`${baseURL}/advertisement/${id}`).then((data) => data.json());
}