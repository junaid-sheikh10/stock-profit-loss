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
     var message="Hey you got profit of "+pr+" & percent profit is "+ans+"% 🤑"
  } else if(tinput>toutput){
    var ls = tinput - toutput;
     ans = (ls * 100) / tinput;
     var message="Hey you got a loss of "+ls+" & percent loss of "+ans+"%😥"
  }
  else{
    var message="No profit no loss"
  }
  printoutput(message);
}

function printoutput(a) {
  output.innerHTML=a
  console.log(a)
}