class Worker {
constructor(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}
get getFullName(){
    return this.surname +" "+this.name;
}
getSalary (){
    return this.rate * this.days;
}
}

// const worker = new Worker("Иван","Иванов", 10, 31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.getFullName);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

class Boss extends Worker {
constructor(name, surname, rate, days, workers){
    // super(name);
    // super(surname);
    // super(rate);
    // super(days);
        super(name, surname, rate, days);
    this.workers = workers;
}
getSalary (){
    return this.rate * this.days * this.workers;
}
}
const boss = new Boss ("Иван","Иванов", 10, 31, 10);

console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName);
console.log(boss.rate);
console.log(boss.days);
console.log(boss.getSalary());