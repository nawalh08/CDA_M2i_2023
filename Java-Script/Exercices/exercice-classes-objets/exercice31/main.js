import { person } from "./person.js";

const myPerson = [
    new person("John", "DUPONT", "2001-11-07"),
    new person("Clara", "MARTEZ", "1987-04-13"),
];


console.log(myPerson);

myPerson[0].firstname = "Titi";
myPerson[1].firstname = 123;

console.log(myPerson);

myPerson.forEach((p) => {
    const newLIElement = document.createElement("li");
    newLIElement.textContent = `${p.id}: ${p.fullname} (${p.birth})`;

    document.getElementById("result")?.appendChild(newLIElement);
});
