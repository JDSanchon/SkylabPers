test('dada una funcion suma que recibe los valores 1 y3 y retorna 3')

function sum(a,b){
    return a+b
}

const scenarios = [
    { a:1,b:2,result:3},
]

/**
 * @description
 * escribir una funcion que recie dos parametros
 * y da como resultado strict equality 
 * pero sin usar strict equality
 * 
 * @scenarios
 * nan nan false
 * 1 1 true
 * false false true
 * true false false
 */

/**
 * GHERKIN
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

describe('GIven a function',() =>{
    const scenarios = [
        {a:1,b:1,result:true},
        {a:NaN,b:NaN,result:false},
        {a:false,b:false,result:true},
        {a:{},b:{},result:false},

    ]
    scenarios.forEach(scenario => {
    describe(`when invoked with values ${scenario.a} and ${scenario.b}`, () => {
        test('then return boolean',() => {
                //arrange
                const a= scenario.a;
                const b= scenario.b;
                //act
                const b= scenario.b;

                //Assert

                expect().toBe();
        })
    })
}
