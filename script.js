fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const dogs = document.getElementById('dogs');
        
        data.message.forEach(imageUrl => {
            const imgElement = document.createElement('img'); 
            imgElement.src = imageUrl; 
            imgElement.alt = 'Random Dog Photo';
            dogs.appendChild(imgElement);
          });
    })
    .catch(error => {
        console.error('Error fetching dog photo:', error);
    });