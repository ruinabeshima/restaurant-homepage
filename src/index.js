import "./styles.css"
import { CreateHomeContent } from "./components/home"
import {CreateCuisine, CreateFoodCard} from "./components/menu"

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
  CreateCuisine("Indian")
})






