/*const grade = 80;

if (grade >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (grade < 80 && grade >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}*/

let status = "aprovada";

switch (status) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("não se aplica");
    break;
}
