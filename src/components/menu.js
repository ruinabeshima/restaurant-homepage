export function CreateCuisine(foodTitle){
  const content = document.getElementById("content")
  let newCuisine = document.createElement("div")
  newCuisine.classList.add("content-div")
  newCuisine.id = foodTitle.toLowerCase()
  content.appendChild(newCuisine)
  let CuisineType = document.createElement("p")
  CuisineType.textContent = foodTitle
  newCuisine.appendChild(CuisineType)
}

export function CreateFoodCard(newCuisine, foodTitle, Image){
  //
}