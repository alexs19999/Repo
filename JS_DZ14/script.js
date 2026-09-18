document.writeln("JavaScript №14");
function Worker (name, age, job){
this.name = name;
this.age = age;
this.job = job;

this.who = function() {
    console.log("Я " + this.name + ", мне " + this.age + " лет. Я работаю " + this.job + "ом.");
    // console.log('Я  + ${this:name} + , мне  + ${this:age} +  лет. Я работаю  + ${this:job} + ом.');
}
}

let empl = new  Worker ("Дмитрий", 26, "Дизайнер");
empl.who();
empl = new  Worker ("Станислав", 29, "Программист");
empl.who();
empl = new  Worker ("Сергей", 35, "Менеджер");
empl.who();
// а можно так? Одной переменной три раза создавать один конструктор?