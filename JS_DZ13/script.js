

let inpForm = document.getElementById("inpForm");
let inpFld = document.createElement("input");
// let str = "-1.5 0 2 -123.4.";
inpFld.type = "text";

inpFld.value ="-1.5 0 2 -123.4.";
let btn = document.createElement("button");
btn.textContent = "Ввести строку";

inpForm.prepend(inpFld);
inpForm.append(btn);

// console.log(inpForm);

// let reg = /-?\d+\.?\d+?/g;
btn.addEventListener("click", function(){
    let str = inpFld.value;
    let reg = /-?\d+(\.\d+)?/g;
console.log(str.match(reg));// -1.5,0,2,-123.4
alert(str.match(reg));
});


// document.writeln();