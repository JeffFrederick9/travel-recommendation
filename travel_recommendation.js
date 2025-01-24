const btnSearch = document.getElementById('btnSearch');

function searchDestination() {
    const input = document.getElementById('Input').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);
        const temple = data.temples.find(item => item.name.toLowerCase() === input);
        const beach = data.beaches.find(item => item.name.toLowerCase() === input);

        if (country) {
          const name = countries.name;
          const imageURL = countries.imageUrl;
          const description = countries.description;

          resultDiv.innerHTML += `<h2>${name}</h2>`;
          resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;

        }

        if (temple) {
            const name = temples.name(', ');
            const imageURL = temples.ImageUrl (', ');
            const description = temples.description;
  
            resultDiv.innerHTML += `<h2>${name}</h2>`;
            resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
  
          } 

          if (beach) {
            const name = beaches.name(', ');
            const imageURL = beaches.ImageUrl (', ');
            const description = beaches.description;
  
            resultDiv.innerHTML += `<h2>${name}</h2>`;
            resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
  
          } 
        
        
        else {
          resultDiv.innerHTML = 'No matching destination found.';       }
      })

      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while searching for the destination.';
      });
  }
    btnSearch.addEventListener('click', searchDestination);

    