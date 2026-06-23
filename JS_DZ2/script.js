do{
let coins = prompt("введите колличество копеек от 0 до 99\n или введите 'выход' для прекращения программы");
if (coins<0 || coins>99){
    alert("Некорректное значение");
    break;
}
if(coins == "выход"){
    break;
}

let remains = coins % 10;
if(remains == 0 || (remains>=5 && remains<=9) || ((coins>=10 && coins<=20) && (remains>=2 && remains<=4)) ){
    // если 0 или от 5 - 9, или 11 - 20 - проверяем как количество монет больше 10 и остаток от деления
    alert("У вас "+ coins + " копеек");
}
else if(remains ==1){
    alert("У вас "+ coins + " копейка");
}
else {
    // оставшиеся значения 2,3,4
    alert("У вас "+ coins + " копейки");
}

} while(true);