// Let's caclulate the average score for students per section

let introScore = 20;
let gitScore = 30;
let jsScore = 50;
let averageScore = (introScore + gitScore + jsScore) / 3;
let studentName = "Vasya";
let studentSurname = "Pupkin";
let fullName = studentName + " " + studentSurname;

// Rounded the average score to one after decimal
console.log(
  `The average score for ${fullName} is ${averageScore.toFixed(1)}.`
);

// We could also use student as an object
// and pass his scores per person to use several people
let student = {
  studentName: "Gena",
  studentSurname: "Krokin",
  introScore: 50,
  gitScore: 80,
  jsScore: 90,
};

let fullStudentName = student.studentName + " " + student.studentSurname;

// Rounded the average score to one after decimal
let averageStudentScore = (
  (student.gitScore + student.introScore + student.jsScore) / 3).toFixed(1);

console.log(
  `The average score for student ${fullStudentName} is ${averageStudentScore}.`
);
