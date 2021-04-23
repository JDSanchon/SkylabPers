let hero = { //esto es un objeto literal, no se ha creado con una funcion or something
    heroname:"spiderman",
    name:"peter",
    age:17,
    city:'New York',
}
//  esto ya no es un objeto literal
function createHERO (heroname,name,city){
    return {heroname,name,city};
}
let spiderman = createHERO('spideran','pedro','17');

class Heroe{
    constructor(heroName,name,city,specialPower){ //construc es una funcion
        this.heroName = heroName;
        this.name = name;
        this.city = city;
        this.specialPower = specialPower;
    }
    lastcomment = "";
    if (batisenial){
        this.goToAction();
    }
    goToAction (){
        this.lastcomment = 'I am batman';
    }

}