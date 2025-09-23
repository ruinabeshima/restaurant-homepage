import "./styles.css"

const content = document.getElementById("content")
const homediv = document.createElement("div")
homediv.id = "home-div"
content.appendChild(homediv)
const title = document.createElement("h1")
title.textContent = "Welcome to Rui's Restaurant!"
homediv.appendChild(title)
const description = document.createElement("p")
description.textContent = "A welcoming restaurant offering a diverse menu of fresh, high-quality dishes in a comfortable and inviting atmosphere, with friendly service for any occasion."
homediv.appendChild(description)





