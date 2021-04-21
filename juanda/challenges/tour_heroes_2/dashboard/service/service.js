const header_nav_elem = [
    {name: "dashboard",url: ""},
    {name: "heroes",url: ""},
];
function fetchHeros(){
    return fetch('./service/superHeroData.json')
    .then ((response)=>{
        return response.json();
    })
    .then(data => {
       return data;
    })
}
fetchHeros().then(respuesta => respuesta.forEach(element => {
    let array = [];
    array.push(element);
    return array;
}));

/*
function showHeroMess(array) {
    let heroMess = array.sort(function() {
            return Math.random() - 0.5});
    const [a,b,c,d] = heroMess;
    let four =[a,b,c,d];
    return four;
}
*/