//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

for(i=0;i<100;i++){
    console.log()
}

function randomNumber(){
    const randNum = Math.random()
    const oneto21 = randNum * 25
    const oneto21final = Math.floor(oneto21)
    console.log(oneto21final)
}
randomNumber();
console.log()

function randomLetter(){
    const randLetter = Math.random()
    const randLetterScale = randLetter * 26
    const randLetterFinal = Math.floor(randLetterScale)
    console.log(alphabet[randLetterFinal])
}
randomLetter()
console.log()

function randomFood(){
    const randFood = Math.random()
    const randFoodScale = randFood * 6
    const randFoodFinal = Math.floor(randFoodScale)
    console.log(foods[randFoodFinal])
}
randomFood()
console.log()

function randomStudent(){
    const randStudent = Math.random()
    const randStudentScale = randStudent * 7
    const randStudentFinal = Math.floor(randStudentScale)
    console.log(students[randStudentFinal])
}
randomStudent()
console.log()

function threeRandStudents(){
    for(i=0;i<3;i++){
        const randArray = Math.random()
        const randArrayScale = randArray * 7
        const randArrayFinal = Math.floor(randArrayScale)
        console.log(students[randArrayFinal])
    }
}
threeRandStudents()
