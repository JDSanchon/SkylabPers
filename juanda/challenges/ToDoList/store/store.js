/*
let listOfHeroes = [];
function fetchHeroes() {
    
    return fetch ('./store/superHeroData.json')
    .then(response => response.json())
    .then(heroes => {
        heroes.forEach(heroe => {
            listOfHeroes.push(heroe);
        })
    })
}
fetchHeroes();
NO MOSTRARA NADA, POR LA ASINCRONIA. NO DA ERROR, PERO NO MUESTRA NADA
YA QUE EN ESTE PUNTO, listofheroes AUN NO CONTIENE NADA.
for(let i = 0 ; i< listOfHeroes.length; i++){
    console.log(listOfHeroes[i]);
}

//create = add, read=mostrar , update=modifica..q parte?, delete =elimina
let navList = ["Create","Read","Update","Delete"]
basicActionTypes = {
    create: 'CREATE', 
    read: 'READ',
    update: 'UPDATE',
    delete: 'DELETE'
}
let state = {
    tasks:[],
};
*/