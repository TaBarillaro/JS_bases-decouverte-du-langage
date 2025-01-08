console.log("exo-7");

console.log(jsonDatas);

// 2 Créer un objet qui servira à traduire les types.
const translationOfType = {
    "car": "voiture",
    "house": "maison",
    "game": "jeux",
    "videoGame": "jeux video",
    "show": "spectacle"
}

// 3 Ajouter une nouvelle clé aux objets existants pour stocker le type traduit, sans modifier le fichier data.js. Répéter l'étape 1 pour vérifier le type traduit.
jsonDatas.forEach((item) => {
    item.translation = translationOfType[item.type];
});
console.log(jsonDatas);

// 4 Créer une page HTML et lister les articles depuis la donnée
// function fetchData() {
//     fetch('datas.js')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(`Error Fetching data : ${error}`)
//         document.getElementById('list').innerHTML = 'Error Loading Data'
//     })
// }
// fetchData();