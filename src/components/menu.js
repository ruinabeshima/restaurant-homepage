// cuisine-type > title + food-container > food-item

export function CreateCuisine(foodTitle){
  const content = document.getElementById("content")
  const newCuisine = document.createElement("div")
  newCuisine.classList.add("content-div")
  newCuisine.classList.add("menu-div")
  newCuisine.id = foodTitle.toLowerCase()
  content.appendChild(newCuisine)
  const CuisineType = document.createElement("p")
  CuisineType.textContent = foodTitle
  newCuisine.appendChild(CuisineType)

  const foodContainer = document.createElement("div")
  foodContainer.classList.add("food-container")
  foodContainer.id = foodTitle.toLowerCase() + "-container"
  newCuisine.appendChild(foodContainer)
}

export function CreateFoodItem(foodContainer, foodTitle){
  const foodItem = document.createElement("div")
  foodItem.id = foodTitle.toLowerCase()
  foodItem.classList.add("food-item")
  foodContainer.appendChild(foodItem)
  const foodName = document.createElement("p")
  foodName.textContent = foodTitle
  foodItem.appendChild(foodName)
}

export function CreateMenuContent(){
  const foodItem = document.createElement("div")
  foodItem.classList.add("food-item")
}