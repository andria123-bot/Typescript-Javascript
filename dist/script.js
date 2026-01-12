// let x // Declaration
// x = 10000 // Assignment
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Variable Types: 
// const, let, var
// const age = 16
// const name = "Andria"
// let underAge = true
// console.log(`You Are ${age} Years Old And Your Name Is ${name}, type: ${typeof age}`)
// if (underAge){
//   console.log("Diddy Will Grape You :3")
// }else{
//   console.log("Awh Nevermind")
// }
//////////////////////////////////////////////////////
// let fullName = "Andria Lezhava"
// let age = 16
// let isStudent = true
// document.getElementById("p1").textContent = `Your Name Is: ${fullName}`
// document.getElementById("p2").textContent = `You Are ${age} Years Old`
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`
///////////////////////////////////////////////////////
// let students = 31
// // students += 1
// // students -= 1
// // students *= 2
// // students /= 2
// // students **= 2
// students ++
// students --
// // let extraStudents = students %= 3
// console.log(students)
////////////////////////////////////////////////////////////
// let result = 1 + 2 * 3 ** 4
// // Math Prioriteties
// //1. ()
// //2. exponents(**)
// //3. multiplication division modulo
// //4. addition subtraction
// console.log(result)
/////////////////////////////////////////////////////////////
// let username = window.prompt("What's your username?")
// console.log(username)
// let username
// document.getElementById("mySubmit").onclick = function() {
//   username = document.getElementById("myText").value
//   document.getElementById("myH1").textContent = `Welcome ${username}`
// }
/////////////////////////////////////////////////////////////
// // let age = window.prompt("How Old Are You?")
// // age = Number(age)
// // console.log(age)
// let y = "Pizza"
// let x = "0"
// let z = ""
// x = Number(x)
// y = String(x)
// z = Boolean(x)
/////////////////////////////////////////////////////////////
// const PI = 3.14159
// let radius
// let circumference
// document.getElementById("mySubmit").onclick = function() {
//   radius = document.getElementById("myText").value
//   radius = Number(radius)
//   circumference = 2 * PI * radius
//   document.getElementById("myH3").textContent = circumference + "cm"
// }
/////////////////////////////////////////////////////////////
// console.log(Math.PI)
// console.log(Math.E)
// let x = 3
// let y = 2
// let z  = 1
// z = Math.round(x) // Rounds like: 3.99 = 4, 15.11 = 15.5
// z = Math.floor(x) // Rounds to down like: 3.99 = 3, 15.11 = 15
// z = Math.ceil(x) // Rounds to up like: 3.99 = 4, 15.11 = 16
// z = Math.trunc(x) // Removes Decimal like: 3.12 = 3
// z = Math.pow(x, y) // x power of y
// z = Math.sqrt(x) // Finds Square Root
// z = Math.log(z) // something with logarithm idk lol
// z = Math.sin(x) // Idk what these 3 is
// z = Math.cos(x) 
// z = Math.tan(x) 
// z = Math.abs(z) // Returnes absolute nubmer like -3.21 = 3.21
// z = Math.sign(z) // ik tf is this bruh
// let max = Math.max(x, y, z) Returnes max
// let min = Math.min(x, y, z) Returnes min 
// console.log(max)
/////////////////////////////////////////////////////////////
// const min = 50
// const max = 100
// const randomNum = Math.floor(Math.random() * (max - min)) + min
// console.log(randomNum)
/////////////////////////////////////////////////////////////
// const age = 16
// if (age >= 18){
//   console.log("U can go in strip club lol")
// }else{
//   console.log("Lool get back to house lil bro")
// }
// const age = 16
// const hasID = true
// if (age >= 18 || !hasID){
//   console.log("1")
// }
// ||(or) Operator, Atleast one of the statements must be true
// &&(and) Operator, Both must be true 
/////////////////////////////////////////////////////////////
// const myCheckbox = document.getElementById("myCheckbox")
// const visaBtn = document.getElementById("visaBtn")
// const mastercardBtn = document.getElementById("mastercardBtn")
// const googlePayBtn = document.getElementById("googlePayBtn")
// const mySubmit = document.getElementById("mySubmit")
// const subResult = document.getElementById("subResult")
// const paymentResult = document.getElementById("paymentResult")
// mySubmit.onclick = () => {
//   if(myCheckbox.checked){
//     subResult.textContent = `You are subscribed!`
//   } else {
//     subResult.textContent = `You are not subscribed!`
//   }
//   if(visaBtn.checked){
//     paymentResult.textContent = `You are paying with Visa`
//   } else if(mastercardBtn.checked) {
//     paymentResult.textContent = `You are paying with Mastercard`
//   } else if (googlePayBtn.checked) {
//     paymentResult.textContent = `You are paying with Google Pay`
//   } else {
//     paymentResult.textContent = `You must select a payment type!`
//   }
// }
/////////////////////////////////////////////////////////////
// let age = 16
// console.log(age >= 18 ? "You're an adult" : "You're minor lol")
// let time = 16
// console.log(time < 12 ? "Good Morning" : "Good afternoon")
// let student = true
// console.log(student ? "You are student" : "You are not student")
/////////////////////////////////////////////////////////////
// let day = 1
// switch(day){
//   case 1:
//     console.log("It is Monday!")
//     break
//   case 2:
//     console.log("It is Tuesday!")
//     break
//   case 3:
//     console.log("It is Wednesday!")
//     break
//   case 4:
//     console.log("It is Thursday!")
//     break
//   case 5:
//     console.log("It is Friday!")
//     break
//   case 6:
//     console.log("It is Saturday!")
//     break
//   case 7:
//     console.log("It is Sunday!")
//     break
//   default:
//     console.log(`${day} Is not a day`)
// }
// let testScore = 92;
// let letterGrade;
// switch(true){
//   case (testScore >= 90):
//     letterGrade = "A";
//     break;
//   case (testScore >= 80):
//     letterGrade = "B";
//     break;
//   case (testScore >= 70):
//     letterGrade = "C";
//     break;
//   case (testScore >= 60):
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F"
// }
/////////////////////////////////////////////////////////////
// let username = "0x85"
// console.log(username.charAt(0)) // console.log(username[0])
// console.log(username.indexOf("x")) // Returns index of given parameter
// console.log(username.lastIndexOf("x")) // Returns index from end anu bolodan ra
// console.log(username.length) // Returns length of username
// console.log(username.trim()) // Returns cleared version of old variable like: " Andria Lezhava " to "Andria Lezhava"(Removes empty things from end and start)
// console.log(username.toUpperCase()) // Returns Uppercased username
// console.log(username.toLowerCase()) // Returns Lowercased username
// console.log(username.repeat(3)) // Repeats username to given parameters, like: "0x850x850x85"
// console.log(username.startsWith("0")) // Returns if variable starts with given parameter, returnes true or false
// console.log(username.endsWith("5")) // Returns if variable ends with given parameter, returnes true or false
// console.log(username.includes("5")) // Returns if variable includes given parameter, returnes true or false
// let phoneNum = "591-40-25-35"
// console.log(Number(phoneNum.replaceAll("-", ""))) // Replaces given argument by second argument, "a-s-d" => "asd"
// console.log(phoneNum.padStart(15, "0")) // Adds "Padding" at start of character, first argument is our variable's length, our variable - 15 = 3 so it adds 3 "0" to our variable
/////////////////////////////////////////////////////////////
// const fullName = "Andria Lezhava"
// console.log(fullName.slice(0, 6)) // Slices from first parameter to second parameter(First Name) 
// console.log(fullName.slice(7)) // Slices from first parameter to second parameter(Last Name) you can remove second parameter if u want to slice to the end
// console.log(fullName.slice(Math.floor(Math.random() * 14))) // Returnes last character, works with -3 and it will returl last 3 character, also u can put math library operators lol
// console.log(fullName.slice(0, fullName.indexOf(" ")))
// console.log(fullName.slice(fullName.indexOf(" ") + 1))
// const email = "andria.lezhava660@gmail.com"
// console.log(email.slice(0, email.indexOf("."))) // does not modify original variable
// console.log(email.slice(email.indexOf(".") + 1, email.indexOf("6")))
// console.log(email.slice(email.indexOf("@") + 1))
/////////////////////////////////////////////////////////////
// let username = window.prompt("Enter Your Username: ").trim()
// username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()
// console.log(username)
/////////////////////////////////////////////////////////////
// const temp = 20;
// if(temp > 0 && temp <= 30){
//   console.log("The weather is good :3")
// } else {
//   console.log("The weather is bad :(")
// }
// if(temp <= 0 || temp > 30){
//   console.log("The weather is bad :(")
// } else {
//   console.log("The weather is good :3")
// }
// const isSunny = true
// if(!isSunny){
//   console.log("It Is Cloudy")
// } else {
//   console.log("It Is Sunny")
// }
/////////////////////////////////////////////////////////////
// const PI = 3.14
// if(PI !== "3.14"){ // ===, !=
//   console.log("This is not PI")
// } else {
//   console.log("This is  PI")
// }
/////////////////////////////////////////////////////////////
// let username = ""
// while(username === "" || username === null){
//   username = window.prompt("Enter your name: ")
// }
// console.log(`Hello ${username}`)
// let username
// do {
//   username = window.prompt("Enter your name: ")
// } while(username === "" || username === null)
// console.log(`Hello ${username}`)
// let loggedIn = false
// let username
// let password
// do {
//   username =  window.prompt(`Enter Your Username`)
//   password =  window.prompt(`Enter Your Password`)
//   if (username === "Admin" && password === "admin123"){
//     loggedIn = true
//     console.log("You are logged in!")
//   } else {
//     console.log("Invalid credentials, try again")
//   }
// } while(!loggedIn)
/////////////////////////////////////////////////////////////
// for(i = 10; i > 0; i--){
//   console.log(i)
// }
// for(let i = 1; i <= 20; i++){
//   if(i == 13){
//     continue
//   } else {
//     console.log(i)
//   }
// }
/////////////////////////////////////////////////////////////
// const minNum = 1
// const maxNum = 100
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
// let attempts = 0
// let guess
// let running = true
// while(running){
//   guess = Number(window.prompt(`Gues a number between ${minNum} - ${maxNum}!`))
//   if(isNaN(guess)){
//     window.alert("Please enter a valid number!")
//   } else if(guess < minNum && guess > maxNum){
//     window.alert("Please enter a valid number!")
//   } else {
//     attempts += 1
//     if (guess < answer){
//       window.alert("Too low, try again")
//     } else if (guess > answer){
//       window.alert("Too High, try again")
//     } else {
//       running = false
//       window.alert(`You won! number: ${answer}, attempts: ${attempts}`)
//     }
//   }
// }
/////////////////////////////////////////////////////////////
// function hbd(name, age){ // Parameters
//   console.log(`Happy birthday to ${name}`)
//   console.log(`Happy birthday to ${name}`)
//   console.log(`Happy birthday dear ${name}`)
//   console.log(`You are ${age} years old`)
// }
// hbd("Andria", 17) // Arguments
// function add(x, y){
//   return x + y
// }
// console.log(add(2, 5))
// function greet(name = "Guest"){ // Default parameter
//   return `Hello ${name}`
// }
// console.log(greet())
// function isEven(n){
//   if (n % 2 === 0){
//     console.log("Evend")
//   } else {
//     console.log("Odd")
//   }
// }
// isEven(3)
// const a = function(name = "Guest"){
//   return `Hello ${name}`
// }
// console.log(a())
// console.log(test())
// function test(){
//   return 1
// }
/////////////////////////////////////////////////////////////
// function test(...a){ // REST OPERATOR 
//   return a.reduce((prevArgument, nextArgument) => (
//     prevArgument + nextArgument
//   )) // 3 argument for starting point
// } // Rest operator, Gathers input from code and puts in list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(test(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// const nums = [1, 2, 3, 4] // SPREAD OPERATOR
// function test(a, b, c, d){
//   return a + b + c + d
// }
// console.log(test(...nums))
// const nums = [1, 2, 3, 4] // SPREAD & SPREAD & REDUCE
// function test(...a){
//   return a.reduce((prev, next) => (
//     prev + next
//   ))
// }
// console.log(test(...nums))
// function greeting(name, formatter){
//   return formatter(name)
// }
// function format(name){
//   return name.toUpperCase() + "!!!" 
// }
// console.log(greeting("Andria", format))
// const l = 5
// function double(n){
//   return n * 2
// }
// function triple(n, d){
//   return d * n
// }
// console.log(triple(l, double(l)))
// const l = [1, 2, 3, 4, 5]
// function double(n){
//   return n.map((arg) => arg * 2)
// }
// function triple(lst, number){
//   return lst.map((elem) => elem * number)
// }
// function quad(lst, number){
//   return lst.map((elem) => elem * number)
// }
// console.log(quad(triple(double(l), 3), 4))
/////////////////////////////////////////////////////////////
// class Person{
//   constructor(name, age, skill) {
//     this.name = name
//     this.age = age
//     this.skill = skill
//   }
//   greet() {
//     console.log(this)
//     console.log(`Hello My Name Is ${this.name} And I Am ${this.age} Years Old, My Skill Is ${this.skill}.`)
//   }
// }
// const andria = new Person("Andria", 16, "Programming")
// const dato = new Person("Dato", 14, "Drone Pilot")
// andria.greet()
// dato.greet()
// class Animal{
//   constructor(name, age, animalType) {
//     this.name = name
//     this.age = age
//     this.animalType = animalType
//   }
//   readData() {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.animalType}.`)
//   }
// }
// class Dog extends Animal {
//   showProps(){
//     console.log(this.name)
//     console.log(this.age)
//     console.log(this.animalType)
//   }
// }
// const d = new Dog("Jeka", 7, "Dog")
// d.showProps()
// class Car {
//   constructor(brand, model, price){
//     this.brand = brand
//     this.model = model
//     this.price = price
//   }
//   buyCar(){
//     console.log(`You bought, ${this.brand} ${this.model} for ${this.price}$`)
//   }
//   startEngine(){
//     console.log(`Starting engine for ${this.name}`)
//   }
//   acelerator(){
//     console.log(`Accelerating for ${this.name}`)
//   }
// }
// class Toyota extends Car {}
// const corolla = new Toyota("Toyota", "Corolla", 25000)
// console.log(corolla)
// class FighterJets {
//   constructor(
//     public name: string,
//     public speed: number,
//     public madeIn: string,
//     public fighterJetType: string,
//     public inService: boolean,
//   ){}
//   logInfo(){
//     console.log(`Name: ${this.name}, Top Speed: ${this.speed}, Made In: ${this.madeIn}, Type: ${this.fighterJetType}, In Service: ${this.inService}`)
//   }
// }
// class LockheedMartin extends FighterJets{}
// const f35 = new LockheedMartin("F35", 1930, "USA", "Fighter", true)
// const f16 = new LockheedMartin("F16", 2165, "USA", "Fighter", true)
// console.log(f35)
// console.log(f16)
// class mySecret{
//   private crush = "Taso"
//   revivalSecret(){
//     console.log(`My Crush Is: ${this.crush}`)
//   }
// }
// const tellMeTruth = new mySecret()
// console.log(tellMeTruth.revivalSecret())
// class IsCloseFriend{
//   constructor(
//     private closeFriend: boolean,
//     private crushName: string = "Taso"
//   ){
//     if(closeFriend){
//       console.log(`Yeah my crush is: ${this.crushName}`)
//     } else {
//       console.log(`Dude Ur NOT Close Friend Lol`)
//     }
//   }
// }
// const Dato = new IsCloseFriend(true)
// let name: string = "Andria"
// let age: number = 16
// let hobbies: string[] = ["Coding", "Fpv Drones", "Gaming", "Hiking"]
// let underAge: boolean = true
// let array: Array<number> = [1, 2, 3]
// let unioned: string | number = "a" // Or you can set value to integer 
// console.log(hobbies, array)
// function add(a: number, b: number): number | string{
//   return a + b.toString()
// }
// console.log(typeof add(5, 10))
// function multiply(a: number, b: number = 2): number | string {
//   return a * b // If Default parameter are writen you dont have to give enough arguments when calling function!
//   // When calling function, the given arguments will be higher priority
// }
// console.log(multiply(5, 5))
// interface Person {
//   name: string
//   age: number
//   greet(): void
// }
// // Example: interface - Creates box for dji drone which has slots for parts(camera, joystick etc.), class - Puts parts inside box 
// class Student implements Person{
//   constructor(
//     public name: string = "Guest", 
//     public age: number = 19
//   ){}
//   greet(){
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`)
//   }
// }
// const me = new Student("Andria").greet()
// type Drone = {
//   model: string,
//   name: string,
//   speed: number,
//   fly(): void
// }
// const fpv: Drone = {
//   model: "Custom FPV",
//   name: "GayBee",
//   speed: 167,
//   fly() {
//     console.log(`Name: ${this.name}, Model: ${this.model}, Speed: ${this.speed}`)
//   }
// }
// const dji: Drone = {
//   model: "Dji Inspire 1",
//   name: "Inspire 1",
//   speed: 79,
//   fly() {
//     console.log(`Name: ${this.name}, Model: ${this.model}, Speed: ${this.speed}`)
//   }
// }
// fpv.fly()
// dji.fly()
// type Drone = {
//   model: string
//   name: string
//   speed: number
//   fly(): void
// }
// const cinematic: Drone = {
//   model: "Dji Mavic 2",
//   name: "Dji Mavic",
//   speed: 23,
//   fly() {
//     console.log(`Imagine that ur flying ${this.model}`)
//   }
// }
// const fpv: Drone = {
//   model: "Custom FPV Drone",
//   name: "FPV",
//   speed: 162,
//   fly() {
//     console.log(`Imagine that ur flying ${this.model}`)
//   }
// }
// fpv.fly()
// cinematic.fly()
// interface Drone {
//   model: string
//   name: string
//   speed: number
// }
// class FPV implements Drone{
//   constructor (
//     public model: string = "Undefined by you", // public model: "Custom FPV Drone", = if we do this then we must call it by same name(Custom FPV Drone)
//     public name: string = "Undefined by you",
//     public speed: number = -0,
//   ) {}
// }
// const DJIFPV = new FPV("DJI FPV Drone", "DJI FPV", 142) // const DJIFPV = use: new FPV() and default values will work
// console.log(DJIFPV)
// function add(x: number, y: number) {
//   return x + y
// }
// const test = [add(1, 2), add(2, 3), add(4, 5)]
// for (let i = 0; i < test.length; i++){
//   console.log(test[i])
// }
// const dict = {
//   1: add(1, 1),
//   2: add(2, 2)
// }
// console.log(dict[2])
// const a = true
// console.log(a ? a : !a)
// let x = 4;
// function fun1 (){
//   let x = 2;
//   console.log(x)
//   function fun3 () {
//     let x = 5;
//     console.log(x);
//   }
//   return fun3;
// }
// function fun2 (){
//   let x = 3;
//   console.log(x)
// }
// let f3 = fun1()
// fun2()
// console.log(x)
// f3()
// interface components {
//   part: string 
//   price: number
//   inStock: boolean
// }
// class GPU implements components {
//   constructor (
//     public part: string,
//     public price: number,
//     public inStock: boolean,
//   ){}
// }
// class CPU implements components {
//   constructor (
//     public part: string,
//     public price: number,
//     public inStock: boolean,
//   ){}
// }
// const gpu1 = new GPU("RTX 4090", 1600, true)
// const cpu1 = new CPU("Ryzen 9 7950X", 700, false)
// const inventory: components[] = [gpu1, cpu1]
// inventory.forEach((item) => {
//   console.log(`Part: ${item.part}, Price: ${item.price}, In Stock: ${item.inStock}`)
// })
var Component = /** @class */ (function () {
    function Component(part, price) {
        this.part = part;
        this.price = price;
    }
    Component.prototype.info = function () {
        console.log("Part: ".concat(this.part, ", Price: ").concat(this.price));
    };
    Component.prototype.discount = function (precent) {
        this.price = this.price * precent;
        console.log("".concat(this.part, " Discounted by ").concat(precent, "%!, New Price: ").concat(this.price));
    };
    return Component;
}());
var GPU = /** @class */ (function (_super) {
    __extends(GPU, _super);
    function GPU(part, price, inStock) {
        var _this = _super.call(this, part, price) || this;
        _this.part = part;
        _this.price = price;
        _this.inStock = inStock;
        return _this;
    }
    GPU.prototype.info = function () {
        _super.prototype.info.call(this);
        console.log("In Stock: ".concat(this.inStock ? "Yes" : "No"));
    };
    return GPU;
}(Component));
var gpu1 = new GPU("RTX 4090", 1600, true);
gpu1.discount(10);
