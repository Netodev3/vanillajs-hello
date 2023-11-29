/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function randExcuse() {
    let who = ["Mi perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
    let action = ["se comió", "meó", "aplastó", "rompió"];
    let what = ["mis deberes", "las llaves", "el coche"];
    let when = [
      "antes de las clases",
      "justo a tiempo",
      "cuando acabé",
      "durante mi almuerzo",
      "cuando estaba rezando"
    ];

    const whoRand = who[Math.floor(Math.random() * who.length)];
    const actionRand = action[Math.floor(Math.random() * action.length)];
    const whatRand = what[Math.floor(Math.random() * what.length)];
    const whenRand = when[Math.floor(Math.random() * when.length)];

    let excusaRandom = `${whoRand} ${actionRand} ${whatRand} ${whenRand}`;

    return excusaRandom;
  }

  document.querySelector("#excuse-button").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = randExcuse();
  });
};
