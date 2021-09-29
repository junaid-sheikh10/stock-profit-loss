var initialp = document.querySelector("#initial");
var squantity = document.querySelector("#quantity");
var currentp = document.querySelector("#current");
var submit = document.querySelector("#btn");
var output = document.querySelector("#out");



submit.addEventListener("click", submitHandler);

function submitHandler() {
  console.log("clicked");
  var ip = Number(initialp.value);
  var qty = Number(squantity.value);
  var cur = Number(currentp.value)
  calculate(ip, qty, cur);
}
function calculate(i, q, c) {
  var totalin = i * q;
  var totalc = q * c;
  console.log("total input " + totalin);

  profitloss(totalin, totalc);
}

function profitloss(tinput, toutput) {
  var ans=0
  
  if (toutput > tinput) {
    var pr = toutput - tinput;
     ans = (pr * 100) / tinput;
     var message="profit of "+ans+"%"
  } else {
    var ls = tinput - toutput;
     ans = (ls * 100) / tinput;
     var message="loss of "+ans+"%"
  }
  printoutput(message);
}

function printoutput(a) {
  output.innerHTML=a
  console.log(a)
}