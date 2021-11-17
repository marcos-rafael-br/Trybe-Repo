const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(11,176,105";

const emergency = document.getElementsByClassName("emergency-tasks")[0];
emergency.style.backgroundColor = "rgb(255,159,132)";

const emergencyTaskHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyTaskHeaders.length; i++) {
  emergencyTaskHeaders[i].style.backgroundColor = "rgb(165, 80, 243)";
}

const noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergency.style.backgroundColor = "rgb(249, 219, 94)";

const noEmergencyTaskHeaders = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (let i = 0; i < emergencyTaskHeaders.length; i++) {
  noEmergencyTaskHeaders[i].style.backgroundColor = "black";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";
