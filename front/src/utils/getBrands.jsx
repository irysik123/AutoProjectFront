export async function getBrands() {
    let baseURL = "http://localhost:4000/brands";

    return await fetch(baseURL)
    .then((data) => {
        console.log(data)
        if (data.ok) {
          return data.json();
        } else {
          return []
        }
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
}