let inName = document.querySelector("#fname");

inName.addEventListener("change", upperCase);


function upperCase(eventDetails) {
let out = eventDetails.target; // Access the input field triggering the event
  let newValue = out.value.toUpperCase();
  out.value = newValue;
}