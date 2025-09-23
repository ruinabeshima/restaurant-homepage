import "./styles.css"
import { CreateHomeContent } from "./components/home"
import {CreateCuisine, CreateFoodItem} from "./components/menu"

import pizza from "./assets/pizza.jpg"
import pasta from "./assets/pasta.jpg"
import tiramisu from "./assets/tiramisu.jpg"
import dimsum from "./assets/dimsum.jpg"
import noodles from "./assets/noodles.jpg"
import duck from "./assets/duck.jpg"
import panipuri from "./assets/panipuri.jpg"
import tandoori from "./assets/tandoori.jpg"
import tikkamasala from "./assets/tikkamasala.jpg"

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
  CreateFoodItem(italianContainer, "Pizza", "8.50", pizza)
  CreateFoodItem(italianContainer, "Pasta", "6.70", pasta)
  CreateFoodItem(italianContainer, "Tiramisu Cake", "4.20", tiramisu)

  CreateCuisine("Chinese")
  const chineseContainer = document.getElementById("chinese-container")
  CreateFoodItem(chineseContainer, "Dim Sum", "6.40", dimsum)
  CreateFoodItem(chineseContainer, "Crispy Noodles", "10.00", noodles)
  CreateFoodItem(chineseContainer, "Peking Duck", "16.23", duck)
  
  CreateCuisine("Indian")
  const indianContainer = document.getElementById("indian-container")
  CreateFoodItem(indianContainer, "Pani Puri", "5.60", panipuri)
  CreateFoodItem(indianContainer, "Tandoori Chicken", "30.00", tandoori)
  CreateFoodItem(indianContainer, "Tikka Masala", "20.00", tikkamasala)
})






