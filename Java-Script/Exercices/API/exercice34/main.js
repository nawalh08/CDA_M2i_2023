const BASE_URL = "https://pokeapi.co/api/v2/";

function mapPokemon(data) {
    return {
        height: data.height,
        weight: data.weight,
        name: data.name,
        picture : data.picture,
        

    }
}

async function getPokemonByName(name) {
    const response = await fetch(BASE_URL + "pokemon/" + name);
    const data = await response.json();
    return data;
}

async function createPokemon(post) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "Content-Type": "application/json"
        },

        method: "POST",

        body: JSON.stringify(post)
    });
    const data = await response.json();
    return data;
}

// async function deletePostById(postId) {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/" + postId,
//         {
//             method: "DELETE", // Ici, on informe le serveur que l'on veut supprimer quelque chose
//         }
//     );

//     if (response.status === 200) return true;
//     else throw new Error("Suppression impossible..."); // Si le serveur ne permet pas la suppression, il va nous retourner un code status différent de 200 - Tout s'est bien passé
// }
async function main() {
    let nomPoke = prompt("Veuillez entrer le nom du pokémon")
    const resultat = await getPokemonByName(nomPoke);
   

const datas = [resultat].map(mapPokemon);
console.log(datas)


function imgPoke(pokeID) {
    
}

}
main();
