document.addEventListener('DOMContentLoaded', () =>{ 
    const usersContainer = document.getElementById('users');
    //fetch users from API
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((responce) => responce.json())
    .then((users) => {
        users.forEach((user) => {
            const userElement = createUserElement(user);
            usersContainer.appendChild(userElement);
        });
    })
    .catch((error) => console.error('error fetching users:', error));
    // function to create user element
    function createUserElement(user) {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.innerHTML = `
        <h1>${user.name}</h1>
        <p>Email: ${user.email}</p>
        `;
        return userElement;
    }
});