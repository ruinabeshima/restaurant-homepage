export function CreateAboutContent(imageURL){
  const content = document.getElementById("content")

  // About div 
  const aboutDiv = document.createElement("div")
  aboutDiv.id = ("about-div")
  content.appendChild(aboutDiv)
  aboutDiv.classList.add("content-div")

  // About Image 
  const aboutImage = document.createElement("img")
  aboutImage.src = imageURL
  aboutImage.id = "about-image"
  aboutDiv.appendChild(aboutImage)

  // About Description 
  const aboutText = document.createElement("p")
  aboutText.textContent = "The Rui Restaurant was founded by Chef Rui Nabeshima, a renowned culinary expert with an impressive history. Having come from humble beginnings, he has taken the world by storm through his experience in noodle making as well as delicious Asian cuisine."
  aboutText.id = "about-description"
  aboutDiv.appendChild(aboutText)
}