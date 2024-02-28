// Task 1 Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
// який виводить на екран список фільмів у вибраному жанрі.

// ```js
// const movies = {
//   action: ['Die Hard', 'John Wick', 'The Matrix'],
//   comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
//   drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
//   horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

//   // Метод, який виводить список фільмів в заданому жанрі
//   listMoviesByGenre: function (genre) {},
// };
// ```

// // Вивести список комедій

// ```js
// movies.listMoviesByGenre('comedy');
// ```

// // Вивести список фільмів в жанрі "sci-fi"

// ```js
// movies.listMoviesByGenre('sci-fi');


const movies = {
    action: ['Die Hard', 'John Wick', 'The Matrix'],
    comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
    drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
    horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

    listMoviesByGenre: function (genre) {
        if (this[genre]) {
          console.log(`Movies in the genre "${genre}": ${this[genre].join(',')}`);
        } else {
          console.log(`No movies found in the genre "${genre}".`);
        }
      },
    };
    movies.listMoviesByGenre('comedy');
    movies.listMoviesByGenre('sci-fi');

