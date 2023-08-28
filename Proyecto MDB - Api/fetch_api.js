const API_KEY = 'e6809d33cea0c26e1545ccba35e9b3b7';

const fetchMovieDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const movieList = await response.json();

    const movies = movieList.results;

    const catalogContainer = document.createElement("div");
    catalogContainer.classList.add("catalog-container");
    
    movies.forEach(movie => {
        console.log(movie)
        console.log(movie.title);
        console.log(movie.overview)


        const card = document.createElement("div");
        card.classList.add("card");

        // console.log(movie.poster_path)
        const posterPath = movie.poster_path;
        const posterURL = `https://image.tmdb.org/t/p/w500${posterPath}`
        const img = document.createElement('img')
        img.src = posterURL;
        img.alt = movie.title;


        const title = document.createElement("h2");
        title.textContent = movie.title;
        const overview = document.createElement("p");        
        overview.textContent = movie.overview;

        card.appendChild(title);
        card.appendChild(img);
        // card.appendChild(title);
        card.appendChild(overview);

        catalogContainer.appendChild(card);
    });

    document.body.appendChild(catalogContainer);

    };

    fetchMovieDetails();