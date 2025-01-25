const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchDestination);

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', clearBlank);

function clearBlank () {
     document.getElementById('keywordInput').value = '';  // Clear the input field
}

function searchDestination() {
    const resultDiv = document.getElementById('resultsContainer');
    const input = document.getElementById('keywordInput').value.toLowerCase();

    // Clear previous results and input field
    resultDiv.innerHTML = '';  // Clear the results container
    document.getElementById('keywordInput').value = '';  // Clear the input field

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (!input) {
                resultDiv.innerHTML = 'Please enter a search term.';
                return;
            }

            let foundResults = false;

            if (input === "countries") {
                data.countries.forEach(country => {
                    const resultDiv = document.createElement('div');
                    resultDiv.classList.add('resultItem'); // Add a class for styling
                            
                    const name = country.name;
                    
                    // Loop through each city within the country
                    country.cities.forEach(city => {
                        const cityName = city.name;
                        const imageUrl = city.imageUrl; // Get the image URL for the city
                        const description = city.description; // Get the description for the city
            
                        resultDiv.innerHTML += `
                            <h2>${name}</h2>
                            <h3>${cityName}</h3>
                            <img src="${imageUrl}" alt="${cityName}">
                            <p><strong>Description:</strong> ${description}</p>
                        `;
                    });
            
                    // Append this result to the container
                    resultsContainer.appendChild(resultDiv);
                });                   
        } else if (input === "temples") {
            data.temples.forEach(temple => {
                const resultDiv = document.createElement('div');
            resultDiv.classList.add('resultItem');

                const name = temple.name;
                const imageUrl = temple.imageUrl;
                const description = temple.description;

                resultDiv.innerHTML = `
              <h2>${name}</h2>
              <img src="${imageUrl}" alt="${name}">
              <p><strong>Description:</strong> ${description}</p>
            `;

            // Append this result to the container
            resultsContainer.appendChild(resultDiv);
            });

        } else if (input === "beaches") {
            data.beaches.forEach(beach => {
                const resultDiv = document.createElement('div');
            resultDiv.classList.add('resultItem');

                const name = beach.name;
                const imageUrl = beach.imageUrl;
                const description = beach.description;

                resultDiv.innerHTML = `
              <h2>${name}</h2>
              <img src="${imageUrl}" alt="${name}">
              <p><strong>Description:</strong> ${description}</p>
            `;

            // Append this result to the container
            resultsContainer.appendChild(resultDiv);
            });
        } else {
            resultDiv.innerHTML = 'No matching destination found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while searching for the destination.';
      });
};
