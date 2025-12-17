export interface CakeCategory {
  id: number;
  name: string;
  image: string;
  minWeight?: number;
}
export const cakesCategories: CakeCategory[] = [
  {
    id: 1,
    name: "Season’s Sweet Treats",
    image: "christmas",
    minWeight: 0.5,
  },
  {
    id: 2,
    name: "Ghibli-Inspired Wonders",
    image: "ghibli-cakes",
    minWeight: 1,
  },
  {
    id: 3,
    name: "Happily Ever After",
    image: "happily-ever-after",
    minWeight: 2,
  },
  {
    id: 4,
    name: "Birthday Bliss",
    image: "birthday-cake",
  },
  {
    id: 5,
    name: "Kids’ Celebration Cakes",
    image: "kids-special",
    minWeight: 1,
  },
  {
    id: 6,
    name: "Bride’s Sweet Moments-She Said Yes!",
    image: "bride-to-be",
    minWeight: 1.5,
  },
  {
    id: 7,
    name: "Welcome Little One",
    image: "baby-shower",
    minWeight: 1,
  },

  {
    id: 8,
    name: "Two-Tier Elegance",
    image: "2-tier-cake",
    minWeight: 1.5,
  },
  {
    id: 9,
    name: "Three-Tier Majesty",
    image: "3-tier-cake",
    minWeight: 2,
  },
  {
    id: 10,
    name: "Classic Favorites",
    image: "classic-cake",
    minWeight: 1.5,
  },
];
