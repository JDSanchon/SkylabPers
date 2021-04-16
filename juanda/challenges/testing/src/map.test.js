function maptest (a){
    let array = [];
    for(let i= 0 ; i < a.length; i++ ){
            array[i] = a[i];
    }
    return array
}

function maptest2 (a){
    let newArray = a.map(element =>{
        element * 1;
    })
    return newArray
}

describe(`dada un array`,() =>{
    const arrayAux = [1,2,3,4,5];
    arrayAux.forEach((aux)=>{
        describe(`te da otra array, con la misma longitud de la primera`, ()=>{
            test('comprobamos',()=>{
                expect(maptest2(arrayAux)).toBe(arrayAux[aux]);
            })
        })
    })
})