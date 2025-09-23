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

export function CreateFoodItem(foodContainer, foodTitle, price, imageURL){
  // Creating singular food item div
  const foodItem = document.createElement("div")
  foodItem.id = foodTitle.toLowerCase()
  foodItem.classList.add("food-item")
  foodContainer.appendChild(foodItem)

  // Food Name 
  const foodName = document.createElement("p")
  foodName.classList.add("food-name")
  foodName.textContent = foodTitle
  foodItem.appendChild(foodName)

  // Food Price 
  const foodPrice = document.createElement("p")
  foodPrice.classList.add("food-price")
  foodPrice.textContent = "$" + price
  foodItem.appendChild(foodPrice)

  // Food Image 
  const foodImage = document.createElement("img")
  foodImage.src = imageURL
  foodImage.classList.add("food-image")
  foodItem.appendChild(foodImage)
}

