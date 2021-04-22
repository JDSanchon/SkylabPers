const header_nav_elem = [
    {name: "dashboard",url: ""},
    {name: "heroes",url: ""},
];
function fetchHeros(randomPos){
    return fetch('./service/superHeroData.json')
    .then ((response)=>{
        return response.json();
    })
    .then(data => {
        showRandomHeroes(data[randomPos]);
    })
}
function takeRandomHeroes (){
    let first = Math.round(Math.random()*563);
    let second = Math.round(Math.random()*563);
    let third  = Math.round(Math.random()*563);
    let fourth = Math.round(Math.random()*563);
    let randomNumbers = new Array
    randomNumbers.push(first,second,third,fourth);
    randomNumbers.forEach(element => {
        fetchHeros(element);
    });
}

function showRandomHeroes(data){
    debugger
    let bodier = document.getElementById('bodier');
    
    let ul = document.createElement('ul');
   
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `${data.name}`;
        a.innerText=`${data.name}`;
        li.appendChild(a);
        ul.appendChild(li);
   
    bodier.appendChild(ul);
}

takeRandomHeroes();

/*
fetchHeros().then(fetchHeros().forEach(element => {
    console.log(element);
}));
/*
function fourDashboard(numOfHero,parentElement){
    let ulList = document.createElement('ul');
    let padre = document.querySelector(parentElement);
    numOfHero.forEach((hero) => {
        let listHero = document.createElement('li');
        let linkHero = document.createElement('a');
        linkHero.innerText = `${hero.name}`;
        listHero.appendChild(linkHero);
        ulList.appendChild(listHero);
    });
    padre.appendChild(ulList);    
}
function createHeroesList(heroes) {
    const navigationList = document.createElement('ul');
    navigationList.setAttribute('id', 'heroes-list');
    document.body.appendChild(navigationList);
    heroes.forEach((hero) => {
      const eachHero = document.createElement('li');
      eachHero.setAttribute('id', `${hero.name}`);
      const link = document.createElement('a');
      const name = document.createTextNode(`${hero.id} ${hero.name}`);
      eachHero.appendChild(link);
      link.appendChild(name);
      document.body.appendChild(eachHero);
      link.href = `./../details/details.html?heroid=${hero.id}`;
    });
  }
function showHeroMess(array) {
    let heroMess = array.sort(function() {
            return Math.random() - 0.5});
    const [a,b,c,d] = heroMess;
    let four =[a,b,c,d];
    return four;
}
*/