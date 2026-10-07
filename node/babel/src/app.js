const student= "Hardik";
const greet = (name="Student") => {
    return `Hello ${name}`;
};
console.log(greet(student));
console.log(greet());