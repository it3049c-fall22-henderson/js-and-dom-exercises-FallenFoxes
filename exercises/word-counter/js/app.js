// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const text = document.getElementById("text");
const stat = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
text.addEventListener('input', function(){
  var text = this.value
  count = text.trim().replace(/\s+/g, ' ').length;
  document.getElementById('stat').textContent = "There are " + count + " words written";
});
