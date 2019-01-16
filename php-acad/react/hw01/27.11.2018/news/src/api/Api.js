export default function () {
    return fetch('https://newsapi.org/v2/top-headlines?country=jp&apiKey=e6a3b44db4a84e7ca75f9f6fdf6a41d3',
        {
            method: 'GET'
        })
        .then(response => response.json())
}