function getInfo() {
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;

  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  if (validateInfo(fName, lName, number)) {
    //add to database
  } else {
    //display a message on screen
    console.log("Invalid credentials");
  }
}

function validateInfo(fName, lName, number) {
  if (
    fName.length == 0 ||
    lName.length == 0 ||
    number.length > 10 ||
    number.length < 10
  ) {
    return false;
  } else return true;
}
