const student = {
  namee: "roy",
  age: 12,
  grade: 80,
  subjects: ["Maths", "English", "Science"]
}//defines the object called student with properties.

function displayInfo(message) {
  console.log(message);
  console.log(`Name: ${this.namee}`);
  console.log(`Age: ${this.age}`);
  console.log(`Grade: ${this.grade}`);
  // return message;
}//it takes message as parameters and prints it on the console with name, grade, and age.

const boundFn = displayInfo.bind(student);//bind is used to create a function called boundfn and this inside function refers to the object.
let out = boundFn("hello");
// console.log(out);


displayInfo.call(student, "Message(with call):");
displayInfo.apply(student, ["Message(with apply):"]);
//call and apply used to invoke displayInfo with student ('this').


function processSubjects(subjects, callback) {
  subjects.forEach(callback);
}//takes an array of subjects and callback function, then applies callback to each subjects using foreach


function displaySub(subject) {
  console.log("Subjects: " + subject);
}//it prints each subject to console.


const studentSub = student.subjects;
processSubjects(studentSub, displaySub);

function doubleGrades() {
  const original = student.subjects.map(subject => ({
    subject: subject,
    original: student.grade
  }));

  const modified = student.subjects.map(subject => ({
    subject: subject,
    modified: student.grade * 2
  }));
  console.log("Original Grades: ");
  console.log(original);
  console.log("Modified Grades: ");
  console.log(modified);

}//creates two array original and modified using map. Each array contains object with subject and either the original or modified.


function passingSubjects(passinglimit) {
  const passedSubjects = student.subjects.filter(subject => student.grade >= passinglimit);
  console.log("Subjects passed: ");
  console.log(passedSubjects);
}//it uses filter to create an array containing only the subjects hwose student grade is equal to or greater than the specified limit.


doubleGrades();
passingSubjects(60);