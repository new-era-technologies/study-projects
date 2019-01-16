export default function (id) {
    return fetch('https://codeguida.com/api/v1/posts/' + id + '/?fields=author_detailed&fields=serie_posts&fields=related_posts&fields=reading_time_word&fields=reading_time_word&fields=edit_url&fields=partner&fields=authorship',
        {
            method: 'GET'
        })
        .then(response => response.json())
}