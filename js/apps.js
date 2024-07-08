// class Boxer{
//     // constructor(name,age,weight) {
//     //     this.name = name;
//     //     this.age = age;
//     //     this.weight = weight;
//     // }

//     constructor(params) {
//         this.name = params.name;;
//         this.age = params.age;;;
//         this.weight = params.weight;
//     }
//     about(){
//         console.log(`
// ismi: ${this.name}
// yoshi: ${this.age} 
// weight: ${this.weight}`);
//     }
// }


// const Tayson = new Boxer({
//     name:"Tayson",
//     age: 55,
//     weight:100
// })
//     const Bahodir = new Boxer({
//     age: 28,
//     name:"Bahodir",
//     weight:105
// })

// Tayson.about();
// Bahodir.about();

// class Animal {
//     constructor(params) {
//         this.name = params.name;
//         this.age = params.age;
//         this.color = params.color;
//     }
//     voice(){
//         console.log("Animal voice");
//     }
// }

// class Dog extends Animal {
//     constructor(params) {
//         super(params);
//         this.speed = params.speed;
//         this.isTail = true;
//     }
//     voice(){
//         console.log("Dog voice");
//     }
// }

// const mushu = new Dog({
//     name: "Jorch",
//     age: 88,
//     color: "white",
//     speed: 0.1,
// })

// console.log(mushu);

// class Arslon extends Dog{
//     constructor(params) {
//         super(params);
//         this.isJumper = params.isJumper
//     }
//     voice(){
//         console.log("Arslon voice");
//     }
// }

// const arslocha = new Arslon({
//     name: "Arslon",
//     age: 35,
//     color: "brown",
//     speed: 0.2,
//     isJumper: true,
// })
// console.log(arslocha);

// arslocha.voice();

// console.log(document);

// const box1 = document.querySelector("#box1");

// box1.style.backgroundColor= "black";
// box1.style.width = "200px";

// console.log(box1);

// class Mycomponent {
//     constructor(params) {
//       this.$el = document.querySelector(params.selector);
//     }
//     show() {
//       this.$el.style.display = "block";
//     }
  
//     hide() {
//       this.$el.style.display = "none";
//     }
//   }
  
//   class Box extends Mycomponent {
//     constructor(params) {
//       super(params);
//       this.$el.style.width = params.width;
//       this.$el.style.height = params.height;
//       this.$el.style.background = params.color;
//     }
    
//   }
  
//   const box1 = new Box({
//     selector: "#box1",
//     width: "200px",
//     height: "200px",
//     color: "darkgreen",
//   });
  
//   const box2 = new Box({
//     selector: "#box2",
//     width: "200px",
//     height: "200px",
//     color: "darkred",
//   });
  
//   const box3 = new Box({
//     selector: "#box3",
//     width: "200px",
//     height: "200px",
//     color: "darkblue",
//   });

//   box1.hide();
//   box1.show();
  
//   class MainBox extends Mycomponent {
//     constructor(params) {
//       super(params);
//     }
//     ustun() {
//       this.$el.style.display = "block";
//     }
//     qator() {
//       this.$el.style.display = "flex";
//     }
//   }
  
//   const mainBox = new MainBox({
//     selector: "#main",
//   });
  
  
//   mainBox.qator();

// class Circl extends Box {
//     constructor(params) {
//         super(params);
//     }
//     dumaloq(){
//         this.$el.style.borderRadius = "50%";
//     }
// }
// const circlBox = new Circl({
//     selector: "#circle",
//     width: "200px",
//     height: "200px",
//     color: "yellow",
// })

// circlBox.dumaloq();

// class Workers {
//     name; //public
//     birthday; //public
//     constructor(name,birthday){
//         this.name= name;
//         this.birthday = birthday;
//     }
//     static sortByDate(worker1,worker2){
//         return worker1.birthday - worker2.birthday;
//     }
// }

// const workers = [
//     new Workers("Zombie", new Date(2000,2,10)),
//     new Workers("ZombieLedi", new Date(2008,6,8)),
//     new Workers("ZombieJalollidin", new Date(2005,11,15))
// ]
// workers.sort(workers.sortByDate)
// console.log(workers);


// _oilali; //protected

// class Workers {
//     name; //public
//     birthday; //public
//     constructor(name,birthday,oilali){
//         this.name= name;
//         this.birthday = birthday;
//         this._oilali = true;
//     }
// }
// class Staff extends Workers {
//     constructor(name,birthday,oilali,subject,maoshi){
//         super(name,birthday);
//         this.subject = subject;
//         this.maoshi = maoshi
//     }
//     set chaneFamily(newOila){
//         this._oilali = newOila;zz
//     }
//     get chaneFamily(){
//         return this._oilali;
//     }
// }

// const staff1 = new Staff("Zombie", new Date(2000,2,10), "ZombieFamily","Math");

// staff1.chaneFamily = false;
// console.log(staff1);

class BankHisobi {
    constructor(balance) {
        this._balance = balance;
    }
    deposite(amount){
        this._balance += amount;
        return `Sizni balansingizga ${amount}$ qoshildi...`
    }
    withdraw(amount){
        if(this._balance >= amount){
            this._balance -= amount;
            return `Sizni balansingizdan ${amount}$  pul yechildi...`
        }else{
            return "Balansingizda mablag yetarli emas..."
        }
    }
    checkBalance(){
        return `Sizning balansingiz pul miqdori: ${this._balance}$`
    }
}

const hisobi = new BankHisobi(1000);

console.log(hisobi.deposite(1000));6
console.log(hisobi.checkBalance());
console.log(hisobi.withdraw(1500));
console.log(hisobi.checkBalance());