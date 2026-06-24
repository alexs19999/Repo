document.writeln("<table border ='1'>");

for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {.
        // если это первый столбец или строка - не закрашиваем
        if (i == 1 || j == 1){
document.writeln("<td>" + i * j + "</td>")
continue;
        }
        // проверяем на четность строку - если не четная - красной будет каждая первая ячейка, если нет - каждая вторая
        if (i % 2 != 0) {
            if (j % 2 != 0) {
                document.writeln("<td bgcolor= 'red'>" + i * j + "</td>");
            }
            else {
                document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
            }
        }
        else {
            if (j % 2 != 0) {
                document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
                
            }
            else {
                document.writeln("<td bgcolor= 'red'>" + i * j + "</td>");
            }
        }
    }
    document.writeln("</tr>");
}
document.writeln("</table>");