export const categoriesData = [
  {category: 'Seating', image: 'category-seating.png'},
  {category: 'Tables', image: 'category-tables.png'},
  {category: 'Desks', image: 'category-desks.png'},
  {category: 'Storage', image: 'category-storage.png'},
  {category: 'Bedroom', image: 'category-bedroom.png'},
  {category: 'Misc', image: 'category-miscellaneous.png'},
];

export const categories = categoriesData.map((item) => {
  return item.category;
})
