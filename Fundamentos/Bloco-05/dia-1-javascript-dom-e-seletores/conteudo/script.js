let header = document.getElementById("header-container");
header.style.backgroundColor = "green";

//prettier-ignore
let backgroundEmergency = document.getElementsByClassName("emergency-tasks")[0];
backgroundEmergency.style.backgroundColor = "salmon";

let emergencySubtitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencySubtitle.length; index += 1) {
  emergencySubtitle[index].style.backgroundColor = "magenta";
}

//prettier-ignore
let backgroundNoEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
backgroundNoEmergency.style.backgroundColor = "yellow";

let noEmergencySubtitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencySubtitle.length; index += 1) {
  noEmergencySubtitle[index].style.backgroundColor = "black";
}

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "green";
