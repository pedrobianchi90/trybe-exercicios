const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// // Exercício 1

// function formatedBookNames() {
//     return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
//   }

//   console.log(formatedBookNames());

  // Exercício 2

//   function nameAndAge() {
//     return books.map ((book) => (
//         {
//             age: book.releaseYear - book.author.birthYear,
//             author: book.author.name,
//         }
//     ))
//     .sort((book1, book2) => book1.age - book2.age);
//   }

//   console.log(nameAndAge());

  // Exercício 3

//   function fantasyOrScienceFiction() {
//     return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
//   }

//   console.log(fantasyOrScienceFiction());

  // Exercício 4
//   function oldBooksOrdered() {
//     return books.filter((book) => 2022 - book.releaseYear > 60)
//     .sort((date1, date2) => date1.releaseYear - date2.releaseYear);
//   }
 
//   console.log(oldBooksOrdered());

// Exercício 5
// function fantasyOrScienceFictionAuthors() {
//    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
//    .map((book) => book.author.name).sort();
//   }

//   console.log(fantasyOrScienceFictionAuthors())

// Exercício 6

// function oldBooks() {
//     return books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);
//   }

//   console.log(oldBooks())

  // Exercício 7

  function authorWith3DotsOnName() {
      return books.find((book) => (book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3)).name;
  }
  console.log(authorWith3DotsOnName());