let number = prompt("Введите пятизначное число");
let one, two, three, four, five;
one = parseInt(number/10000);
two = parseInt(number/1000)% 10;
three = parseInt(number/100)% 10;
four = parseInt(number/10)% 10;
five = parseInt(number % 10); // parseInt - тут не обязателен
let compos = 1;
let sum = one + two + three + four + five;
compos = one * two * three * four * five;
let midle = sum/5;
alert("Среднее арифметическое равно " + midle + "\n Произведение равно " + compos);

// далее с помощью FORa
document.writeln("Далее вывод с помощью цикла FOR <br>");
// заново инициализируем сумму и произведение
sum =0;
compos = 1;
for(let i = 4; i>=0; i--){
    // идем от последней цифры к первой, при этом счетчик начинаем с 4, иначе произведение начнет множить на 0
    sum = sum + (parseInt(number/ 10 ** i)) % 10;
    compos = compos * ( (parseInt(number/ 10 ** i)) % 10 );
}
document.writeln("Среднее арифметическое равно " + sum/5 + " <br>" );
document.writeln("Произведение равно " + compos);