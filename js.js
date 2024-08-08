
//Declare variable
const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
let container;
//Create divs
btn.addEventListener("click", () => {
    let quantitySquare = prompt("input the number of squares per side for the new grid")
    container = document.querySelector(".container");
    //Delete class grid
    const elements = document.getElementsByClassName("grid");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    //create divs with class grid
      for (let i = 0; i < quantitySquare * quantitySquare; i++) {
        if (quantitySquare > 100) {
          alert("No-no, brother! Max 100")
          break;
        } else if (quantitySquare < 0) {
           alert("No-no, you wrong me!")
           break;
        } else {
      const div = document.createElement("div");
      container.appendChild(div)
      div.className = "grid"
    }
  //Adjustment proportions(Width and Height)

  container.style.maxWidth = `${quantitySquare * 16}px`
  container.style.maxHeight = `${quantitySquare * 16}px`
  }
  // Hover effect
})
btn2.addEventListener("click", () => {
const random1 = Math.floor(Math.random() * 255)
const random2 = Math.floor(Math.random() * 255)
const random3 = Math.floor(Math.random() * 255)
const grid = document.querySelectorAll(".grid")
grid.forEach((item) => {
item.addEventListener("mouseover", () => {
item.style.backgroundColor = "black";
  })
})
})

btn3.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * 255)
  const random2 = Math.floor(Math.random() * 255)
  const random3 = Math.floor(Math.random() * 255)
  const grid = document.querySelectorAll(".grid")
  grid.forEach((item) => {
  item.addEventListener("mouseover", () => {
  item.style.backgroundColor = "rgb(" + random1 + "," + random2 + "," + random3 + ")";
    })
  })
  })

btn4.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * 255)
  const random2 = Math.floor(Math.random() * 255)
  const random3 = Math.floor(Math.random() * 255)
  const grid = document.querySelectorAll(".grid")
  grid.forEach((item) => {
  item.addEventListener("mouseover", () => {
  item.style.backgroundColor = "#ECFFE6";
   })
  })
})
/*Delete Divs and create container
btn2.addEventListener("click", () => {
  let newContainer = document.createElement("div")
  container.parentNode.insertBefore(newContainer, container)
  container.parentNode.removeChild(container)
  newContainer.className = "container"
});
*/