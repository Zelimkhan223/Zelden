let human =  {
    name: {
        firstName: 'ulan',
        secondName: 'Suleimanov'
    },
    age: 22,
    gender: 'male',
    isMaried: true
}

let name1 = human.name;
let age1 = human.age;
let gender1 = human.gender;
let isMaried1 = human.isMaried;

console.log(name1, age1, gender1, isMaried1);

let {name: { firstName, secondName }, age, gender, isMaried} = human;
console.log(age, gender, isMaried);






let arr = ['ulan', 'mirlan', 'maksat', 'nurbolot', 'pika', 'zelya'];
let a = arr[0];
let b = arr[1];
let c = arr[2];

let [student1, student2, student3, ...students] = arr;

console.log(students);