//code for choosing pizza sauce from radio buttons

const radios = document.getElementsByClassName("radioSauce");
function findSauce() {
  let selectedSauce;
  for (const radioButton of radios) {
    if (radioButton.checked) {
      selectedSauce = radioButton.value;
      console.log(selectedSauce);
      break;
    }
  }

  if (selectedSauce == "tomato") {
    document.getElementById("base").src = "/images/basedTomato.png";
  }
  else if (selectedSauce == "barbecue") {
    document.getElementById("base").src = "/images/basedBarbecue.png";
  }
}


//code for screenshotting the pizza

function screenshot() {
  
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("pizzaName", name);
  
  html2canvas(document.getElementById("pizzaContainer"), {
    allowTaint: true,
    useCORS: true,
  })
    .then(function(canvas) {
      let image = canvas.toDataURL("image/png", 0.9);
      localStorage.setItem("userPizza", image);
    })
    .catch((e) => { console.log(e); });

  setTimeout(() => { location.href = "/finalise.html"; }, 600);
}
