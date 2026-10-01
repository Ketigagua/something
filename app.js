const person = {
  isHuman: true,
};

const me = Object.create(person);

console.log(me.isHuman);

const students = {
  studentA: 90,
  studentB: 80,
  studentC: 70,
  StudentD: 51,
};

console.log(Object.keys(students));
console.log(Object.values(students));
console.log(Object.entries(students));

const array = [1, 2, 3];

for ( const [student, grade] of Object.entries(students) {
  console.log(num);
}
