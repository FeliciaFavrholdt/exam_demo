import casual from 'casual';

// Create an object for the jewelry shop config file
const db = { items: [] };

for (let i = 1; i <= 50; i++) {
  const item = {};
  item.id = i;

  // Generate a random jewelry type
  item.type = casual.random_element(['Necklace', 'Bracelet', 'Ring', 'Earrings', 'Pendant', 'Anklet']);

  // Generate a random material
  item.material = casual.random_element(['Gold', 'Silver', 'Platinum', 'Rose Gold', 'White Gold']);

  // Create a random item name with 1-3 words
  item.name = casual.words(casual.integer(1, 3)) + ' ' + item.type;

  // Assign a random price between $50 and $5000
  item.price = parseFloat((Math.random() * (5000 - 50) + 50).toFixed(2));

  // Generate a random stock quantity between 0 and 100
  item.stock = casual.integer(0, 100);

  // Generate a random rating between 0 and 5
  item.rating = parseFloat((Math.random() * 5).toFixed(1));

  // Generate a random year of design between 1990 and 2024
  item.year_designed = casual.integer(1990, 2024);

  // Add a random image URL based on jewelry type
  item.image = `https://source.unsplash.com/featured/?${item.type.toLowerCase()}`;

  db.items.push(item);
}

console.log(JSON.stringify(db, null, 2));
