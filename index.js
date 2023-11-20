// const bookCollection = {
//   book1: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', read: true },
//   book2: { title: 'To Kill a Mockingbird', author: 'Harper Lee', read: false },
//   book3: { title: '1984', author: 'George Orwell', read: true },
//   book4: { title: 'Pride and Prejudice', author: 'Jane Austen', read: false },
// };
// const readBooks = Object.fromEntries(
//   Object.entries(bookCollection).filter(([key, book]) => book.read)
// );

// console.log(readBooks);


// const employees = {
//   employee1: { name: 'Alice', age: 28, manager: true },
//   employee2: { name: 'Bob', age: 35, manager: false },
//   employee3: { name: 'Charlie', age: 40, manager: true },
//   employee4: { name: 'David', age: 25, manager: false },
// };

// const managers = Object.fromEntries(Object.entries(employees).filter(([key,employes])=> employes.manager));
// console.log(managers);


// const expenses = {
//   groceries: [50, 75, 30],
//   dining: [20, 40, 60],
//   entertainment: [15, 25, 35],
// };

// const total = Object.values(expenses).flat().reduce((acc, currentval) => acc + currentval, 0);

// console.log(total);


// const shoppingCart = {
//   item1: { name: 'Laptop', price: 1200 },
//   item2: { name: 'Headphones', price: 80 },
//   item3: { name: 'Mouse', price: 25 },
//   item4: { name: 'Backpack', price: 50 },
// };


// const total = Object.values(shoppingCart)
//   .reduce((acc, shoppingCartPrice) =>
//     acc + shoppingCartPrice.price, 0);

// console.log(total)


const movies = {
    movie1: { title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
    movie2: { title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
    movie3: { title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
    movie4: { title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
  };
  
  const totalRating = Object.values(movies)
    .reduce((acc, values) =>
      acc + values.rating, 0);
  console.log("totalRating:" + totalRating);
  const numberOfMovies = Object.keys(movies).length;
  console.log("numberOfMovies:" + numberOfMovies);
  const averageRating = totalRating / numberOfMovies;
  
  console.log("averageRating :" + averageRating);