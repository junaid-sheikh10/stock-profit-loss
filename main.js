var initialp=document.querySelector("#initial");
var squantity=document.querySelector("#quantity");
var currentp=document.querySelector("#current");
var submit=document.querySelector("#btn");

submit.addEventListener("click",submitHandler)
 
function submitHandler(){

    
    var ip =Number(initialp.value);
    var qty=Number(squantity.value);
    var cur=Number(currentp.value);
    console.log(ip)
    calculate(ip,qty, cur)
}

function calculate(i,q,c){
    var totalin=i*q;
    var totalc=q*c;

    console.log("in"+totalin)
    console.log("out"+totalc)
}
submit.addEventListener("click" , submitHandler);