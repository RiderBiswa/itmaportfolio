document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.querySelector('.user-profile img').src = user.picture.large;
            document.querySelector('.user-profile h1').innerText = `${user.name.first} ${user.name.last}`;
        })
        .catch(error => console.error('Error fetching user data:', error));
});
