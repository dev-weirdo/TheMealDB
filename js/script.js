function loadMeals(value) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMeal(data))
}

document.getElementById('searchButton').addEventListener('click', () => {
    const searchValue = document.getElementById('searchBox');
    document.getElementById('mealBody').innerHTML = '';
    if (searchValue.value.length == 0) {
        alert("Empty search isn't allowed");
    } else {
        loadMeals(searchValue.value);
        searchValue.value = '';
    }
});

const showMeal = (value) => {
    for (const meal of value.meals) {
        console.log(meal)
        const cardBody = document.getElementById('mealBody');
        const div = document.createElement('div');
        div.classList = 'col';
        div.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        cardBody.appendChild(div);
    }
}