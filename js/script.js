const btn = document.getElementById("btn");
let input = document.getElementById("input");

let errorMessage = document.getElementsByClassName("error")[0];

// valid email pattern
let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/////////////////////////////////////////

// email valid or invalid function

btn.addEventListener("click", function () {
  // get the value of input
  let Value = input.value;

  //if the value match pattern  --
  if (pattern.test(Value)) {
    errorMessage.classList.remove("active");
    input.style.border = "1px solid hsl(0, 36%, 70%)";
    // clear input
    input.value = "";
  }

  //if the value is empty --
  else if (Value == "" || Value == null) {
    errorMessage.classList.add("active");
    input.style.border = "1px solid red";
  }
  // otherwise
  else {
    errorMessage.classList.add("active");
    input.style.border = "1px solid red";
  }
});
