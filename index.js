const person = {
  name: "Sulaiman",
  age: 18,
  city: "Kuwait City",
};

person.email = "Sulaiman12345@gmail.com";

function hasKey(obj, key) {
  if (obj[key]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

hasKey(person, "email");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

movies.forEach((movie) => {
  console.log(movie.title);
});
movieYear = 0;
movies.forEach((movie) => {
  if (movie.year == 1994) {
    movieYear = movieYear + 1;
  }
});
console.log(movieYear);

movies[3].genre = "Action/Drama";
console.log(movies);
