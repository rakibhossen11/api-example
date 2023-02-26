const loadMeal = () =>{
    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=fish';
    fetch(url)
    .then (res => res.json())
    .then (data => displayMeal(data))
}

const displayMeal = meal =>{
    console.log(meal.meals[0].strMeal);
    
}

loadMeal()