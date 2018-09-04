export interface Product {
  id: number;
  name: string;
  price: number;
  content: string;
}

const database: Product[] = [
  { id: 1, name: 'product A', price: 100, content: 'product A detail' },
  { id: 2, name: 'product B', price: 200, content: 'product B detail' },
  { id: 3, name: 'product C', price: 300, content: 'product C detail' },
];

export default {
  fetch(): Product[] {
    return database;
  },
  find(id: number): Product | undefined {
    return database.find(el => el.id === id);
  },
  asyncFind(id: number, callback: (p: Product | undefined) => any) {
    setTimeout(() => {
      callback(database.find(el => el.id === id));
    }, 100);
  },
};
