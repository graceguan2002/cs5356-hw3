fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const dogImageElement = document.getElementById('dog-image');
        dogImageElement.src = data.message; 
        dogImageElement.alt = 'Random Dog Photo';
    })
    .catch(error => {
        console.error('Error fetching dog photo:', error);
    });