export default function () {
    return fetch('https://codeguida.com/api/v1/posts/?category=programming&o=-moderated_at',
        {
            method: 'GET'
        })
        .then(response => response.json())
}