var enterButton = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

enterButton.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", function (event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
});

function createListElement() {
  var li = document.createElement("li"); //creating li element
  li.append(document.createTextNode(input.value)); //making access text from input field to the li text
  ul.prepend(li); //adding li to ul
  input.value = ""; // reset text input field

  li.addEventListener("click", function () {
    li.classList.toggle("done"); //  "toggles" token, removing it if it's present and adding it if it's not present
  }); // adding event to li

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("clear"));
  li.appendChild(dBtn);

  dBtn.addEventListener("click", function () {
    li.remove();
  });
}
