export const sortByPriceAsc = (a, b) => a.price - b.price;
export const sortByPriceDesc = (a, b) => b.price - a.price;
export const sortByPopularity = (a, b) => {
  if (b.popularity === a.popularity) {
    return b.price - a.price; // Secondary sort by price if popularity is equal
  }
  return b.popularity - a.popularity;
};
export const sortByNameAsc = (a, b) => a.name.localeCompare(b.name);