const myPromise = new Promise((resolve,reject)=>{  //params de ok! o... fail.
    if(true){
        resolve({name:'pepe',id:11});
    }else{
        reject(null);
    }
}) 

ejemplo:
const heros = new Promise(resolve => resolve([]))

const getHeroId = (id) => heros.then(heros => heroes.find(hero=> hero.id ===id.catch()));



/////////////////////////////////////////////
let pokes = [];

function loadPokes () {
    return fetch ('https://pokeapi.co/api/v2/')
}




////////////////////
//como testeo una funcion que debe devolverme una promesa
//sync o asyn¿? arrenge act asset --> apra el async, en el act debo retornar la llamada al a funcion y luego, hago el asset

//DENTRO DEL TEST
const myAsync (mySyncFN,myAsyncFN) = require('./assync');

test ('muestra lo esperado al resolver una func sync',() =>{
    const result = mySyncFN();
    expect (result).toBe(true);
})
test ('muestra lo esperado al resolver una func async',()=>{
    return myAsyncFN().then(result => {
        expect(result).toBe(true);
    })
})
test('muestra lo esperado al resolver una func async AwAIT',()=>{
    const result = await myAsyncFN();
    expect(result).toBe(true);
    return myAsyncRejectedFn().then(null,result => {
        expect(result).toBe(true);
    })
})


function mys


module.exports = {mySyncFN,myAsyncFN}; // todos ls js exportados en un html costituyen un scope



test('muestra lo esperado al resolver una func async AwAIT',async()=>{
   try{
       await myAsyncRejectedFn()
   }catch (result){
       expect(result).toBe(true);
   }
})

