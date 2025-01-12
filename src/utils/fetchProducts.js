export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      fetch("/data/products.json")
        .then((response) => {
          if (!response.ok) {
            reject(new Error(`HTTP Error: ${response.status} ${response.statusText}`));
          }
          return response.json();
        })
        .then((data) => {
          const updatedProducts = data.map((product) => ({
            ...product,
            popularity: Math.floor(Math.random() * 5) + 1,
          }));
          resolve(updatedProducts);
        })
        .catch((error) => reject(new Error(`Fetch Error: ${error.message}`)));
    });
  };