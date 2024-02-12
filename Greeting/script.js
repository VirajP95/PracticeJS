function generateGreeting() {
  //Get user input
  const name = document.getElementById("nameInput").value.trim();
  const color = document.getElementById("colorSelect").value;

  //validate user input

  if (name === "") {
    alert("Please enter your name");
    return; //Exit the function early if the name is empty
  }

  //create greeting message
  const greetingMessage = `<span style="color: ${color};">Hello, ${name} have a wonderful day!<span>`;

  //Display greeting message
  document.getElementById("greetingOutput").innerHTML = greetingMessage;
}

//event listener for the button click
document
  .getElementById("generateGreetingBtn")
  .addEventListener("click", generateGreeting);
