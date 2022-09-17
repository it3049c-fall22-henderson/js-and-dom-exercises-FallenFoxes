// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passIn = document.getElementById("password");
const reveal = document.getElementById("togglePassword");

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
reveal.addEventListener("click", funciton ()) {
	const type = passIn.getAttribute("type") === "password" ? "text" : "password";
	passIn.setAttribute("type", type);

	this.classList.toggle("bi-eye")
}


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
