export default async function getAccessories(id) {
    let baseURL = "http://localhost:4000";

    return await fetch(`${baseURL}/accessories`).then((data) => data.json())
}