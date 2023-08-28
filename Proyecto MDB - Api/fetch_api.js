const API_KEY = 'e6809d33cea0c26e1545ccba35e9b3b7';

// const petition = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

// petition
//     .then(reply => reply.json())
//     .then(({data}) => {
//         // console.log(data.images.original.url);
//         const movie = data.results[0]
//         console.log(movie.title);
//         console.log(movie.release_date)
//         console.log(movie.overview)

//         document.body.append(img);
//     })
//     .catch(console.warn)





const fetchMovieDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const movieList = await response.json();

        // Access the first movie in the list
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



        // document.body.append(movie.title)
        // document.body.append(img);
        // document.body.append(movie.overview)
        // console.log(overview)
    });
    // console.log(movie)
    // console.log(movie.title);
    // console.log(movie.release_date);
    // console.log(movie.overview);

    document.body.appendChild(catalogContainer);

    };

    fetchMovieDetails();






    // const TMDB_API_KEY = "YOUR_API_KEY";
    // const movieId = 614479;
    
    // const fetchMovieDetails = async () => {
    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`);
    //     const movieDetails = await response.json();
        
    //     // Access the desired information from the movieDetails object
    //     console.log(movieDetails.title);
    //     // console.log(movieDetails.release_date);
    //     console.log(movieDetails.overview);
    //     const posterPath = movieDetails.poster_path;
    //     const posterURL = `https://image.tmdb.org/t/p/w500${posterPath}`
    //     const img = document.createElement('img')
    //     img.src = posterURL;
    //     document.body.append(movieDetails.title)
    //     document.body.append(img);
    //     document.body.append(movieDetails.overview)

    // };
    
    // fetchMovieDetails();