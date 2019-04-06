// Select color input
selectedColor = document.querySelector("#colorPicker");

selectedColor.value = "#000000"; // default value
selectedColor.addEventListener("input", colorUpdate, false);

function colorUpdate(event) {  //Stores the color input.
  selectedColor.value = event.target.value;
}


// Select size input
selectedGridHeight = document.querySelector("#inputHeight");
selectedGridHeight.value = "1"; // default value

selectedGridHeight.addEventListener("input", heightUpdate, false);

function heightUpdate(event) {  //Stores the height input.
  selectedGridHeight.value = event.target.value
}

selectedGridWidth = document.querySelector("#inputWidth");
selectedGridWidth.value = "1"; // default value

selectedGridWidth.addEventListener("input", widthUpdate, false);

function widthUpdate(event) { //Stores the width input.
  selectedGridWidth.value = event.target.value
}

// When size is submitted by the user, call makeGrid()
gridCall = document.querySelector("#inputButton"); //Sets button element tag to variable.
gridCall.addEventListener("click", makeGrid, false); //Listens for button click.

container = document.querySelector('ul');
containerDiv = document.querySelector('div');
const newLi = '<li></li>'; //html text for new li element

//Constructs the pixel grid.
function makeGrid() {
  document.querySelector('ul').innerHTML = ""; //Resets the grid.
  containerDiv.style.borderWidth = '1px'; //Creates grid border.
  heightString = 20 * selectedGridHeight.value + 'px'; //Height in px calculation
  widthString = 20 * selectedGridWidth.value + 'px'; //Width in px calculation
  containerDiv.style.height = heightString; //Sets the grid height.
  containerDiv.style.width = widthString; //Sets the grid width.

//Loop that creates all the grid subdivisions as li elements.
  for(var i = 1; i <= (selectedGridHeight.value*selectedGridWidth.value); i++) {
    container.insertAdjacentHTML('beforeend', newLi);
  };
}

// Change grid element color
container.addEventListener("click", colorChange, false); //Listens for clicks in grid.

function colorChange(element) {
  block = event.target; //Gets clicked li.

  if(block.tagName != 'UL'){ //Prevents coloring of the ul element.
    block.style.backgroundColor = selectedColor.value; //Colors the clicked li element.
  };
}
