import "./styles.css"
import { CreateHomeContent } from "./components/home"
import {CreateCuisine, CreateFoodItem, CreateMenuContent} from "./components/menu"

const homeButton = document.getElementById("home-button")
const menuButton = document.getElementById("menu-button")
const aboutButton = document.getElementById("about-button")

function DeleteDiv(){
  const deleteItems = document.querySelectorAll(".content-div")
  deleteItems.forEach(element => {
    element.remove()
  });
}

CreateHomeContent()

homeButton.addEventListener("click", function(){
  DeleteDiv()
  CreateHomeContent()
})

menuButton.addEventListener("click", function(){
  DeleteDiv()

  CreateCuisine("Italian")
  const italianContainer = document.getElementById("italian-container")
  CreateFoodItem(italianContainer, "Pizza")
  CreateFoodItem(italianContainer, "Pasta")
  CreateFoodItem(italianContainer, "Gnocchi")

  CreateCuisine("Chinese")
  const chineseContainer = document.getElementById("chinese-container")
  CreateFoodItem(chineseContainer, "Dim Sum")
  CreateFoodItem(chineseContainer, "Crispy Noodles")
  CreateFoodItem(chineseContainer, "Peking Duck")
  
  CreateCuisine("Indian")
  const indianContainer = document.getElementById("indian-container")
  CreateFoodItem(indianContainer, "Pani Puri")
  CreateFoodItem(indianContainer, "Tandoori")
  CreateFoodItem(indianContainer, "Tikka Masala")
})






