const antwoorden = {
    Frankrijk : "Parijs",
    spin : "8",
    meer : "IJsselmeer"
};

function check(){
let allsgoed = true;

Object.keys(antwoorden).forEach(function (item) {
let element = document.getElementById(item)
if (element.value === antwoorden[item]) {
 let input = document.getElementsByTagName("input")
for (i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = "green";
  }

}else {
  let input = document.getElementsByTagName("input")
  for (i = 0; i < input.length; i++) {
     input[i].style.backgroundColor = "red";
   }
  allsgoed = false
document.getElementById("juist").innerText ='😥je hebt een paar fouten😥'
}
});

if (allsgoed) {
  document.getElementById("juist").innerText = "🎊🎉Alle antwoorden zijn correct✌️🎊🎉"
  }

}
