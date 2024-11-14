const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsList = document.getElementById('results');

const data = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Strawberry',
    'Grape'
];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    resultsList.innerHTML = ''; // Clear previous results

    const results = data.filter(item => item.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            resultsList.appendChild(li);
        });
    } else {
        resultsList.innerHTML = '<li>No results found</li>';
    }
});



var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000)


