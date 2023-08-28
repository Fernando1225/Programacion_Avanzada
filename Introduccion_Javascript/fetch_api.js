const API_KEY = 'dTVOOHuMdTNXXlix9ZTOcxzcOLneLtxX';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

petition
    .then(reply => reply.json())
    .then(({data}) => {
        // console.log(data.images.original.url);
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)