let userCount = 0;
let users = []; // Je crée un nouveau tableau vide pour pouvoir insérer mes newusers par la suite 

// Je récupére tout mes elements grâce à l'ID de chaque que je retrouve dans le HTML.
const myForm = document.getElementById("my-form");  // Je récupére le formulaire 
const usernameElement = document.getElementById("userName");
const passwordElement = document.getElementById("passWord");
const submitElement = document.getElementById("btn-submit");

const invalidFields = document.getElementById("invalid-fields");


// Au moment de submit , je récupére les valeurs de mes newUser. 
myForm.addEventListener("submit", (event) => {
    
    event.preventDefault();  // Le formulaire n'est pas envoyer automatiquement grâce à la méthode 'preventListener'
    let newUser = { // Remplissage du nouveau tableau 
        id: ++userCount, // On donne un Id au départ qui est égale à 0, on rajoute un ++ avant le userCount pour éliminer l'id 0 et commencé directement à l'id 1.
        username: usernameElement.value,
        password: passwordElement.value,
    };
    users.push(newUser);
    console.log(newUser);
});


// Je fais un if concernant les inputs, pour pouvoir styliser mes inputs.
// Ici je modifie le style des input du username
usernameElement.addEventListener("input", (event) => { 
    const inputElement = event.target;

    if (!inputElement.value) { //Si la valeur de mon input est vide
        inputElement.style.backgroundColor = "#D43E1D"; // je mets en rouge le input

       
        invalidFields.style.display = 'block'; // Je met en display block mon champs "les champs sont vides" pour le faire apparaitre si les champs sont pas remplis.
        invalidFields.style.color = "red"

    } else { // sinon
        inputElement.style.backgroundColor = "#1DD42B"; // je met en vert 
        submitElement.removeAttribute('disabled'); // Je met le bouton submit non cliquable si les champs sont vides 
        invalidFields.style.display = "none" ; // Je mets ensuite mon champs "les champs sont vides" en dispay : none pour le faire disparaitre si les champs sont remplis.
    };

});
 
// Je fais la même chose mais cette fois si avec l'input du password 
passwordElement.addEventListener("input", (event)=> {

    const inputElement = event.target;

    if (!inputElement.value) {
        passwordElement.style.backgroundColor = "#D43E1D";
    } else {
        passwordElement.style.backgroundColor = "white";
    }
});