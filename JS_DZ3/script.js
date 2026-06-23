let count = prompt("Введите количество символов");
let char = prompt("Введите тип символа");
let direction = prompt("Введите направление 0 - вертикально, 1 - горизонтально");
// document.writeln("Количество символов " + char + " равно " + count);
for(let i = 0; i< count; i++){
    if (direction == 0){
        document.writeln(char + '<br>');
    }
    else if(direction == 1) {
        document.writeln(char);
    }
    else{
        alert("Направление заданно некорректно");
        break
    }
}