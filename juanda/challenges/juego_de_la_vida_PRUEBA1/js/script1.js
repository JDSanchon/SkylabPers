/*
const screen = document.getElementsByClassName('game_screen');


function starting(){
    console.log("hola mundo");
}
*/
let canvas;//screen
let context;
let framespersecond = 5;

let canvasX= 300; //screen_ejex --referencia a los pixels
let canvasY= 300;//screen_ejey

let tileX; //anchura del pixel - pendiente cambiar nombre
let tileY; //altura del pixel

let tablero;//board
let filas = 10;
let columnas = 10;

let blanco = '#FFFFFF';
let negro = '#000000';

function creaArray2D (fil,col){
    let array = new Array(fil); //genera array con num. de filas. si fil=3 array = [[],[],[]]
    for(let i=0 ; i<fil ; i++){//itera por numero de fil.
        array[i]= new Array(col);//gene. new. array x posi. de fil. col=2 -> [[x,x],[x,x],[x,x]]
    }
    return array;
}
//agente o turmita(maquina de turin)
let Agente = function(coordX,coordY,estado){
    this.coordX = coordX;
    this.coordY = coordY;
    this.estado = estado; //vivo=1, vivo=2
    this.estadoProx = this.estado; //estado de la próxima vuelta
    this.vecinos = [] //guardamos los vecinos

    //metodo que añade vecinos del objeto actual
    this.addVecinos = function (){
        let xVecino;
        let yVecino;
        //generamos coordenadas (x,y). j=x i=y
        for(i=-1 ; i<2 ; i++){
            for(j=-1 ; j<2 ; j++){
                xVecino = (this.coordX + j + columnas) % columnas;
                yVecino= (this.coordY + i + filas) % filas;
//(this.coordX + j + columnas) % columnas: añadir la suma de columnas y el modulo
//provoca que cuando sale por un extremo, entre de nuevo por el lado opuesto.
                
                //descartamos agente actual. No puedo ser mi vecino.
                if(i!==0 || j!==0){
                    this.vecinos.push(tablero[yVecino][xVecino]);
                //cuando i y j sean 0, significa que soy yo. Entonces no hace nada
                }
            }
        }
    }

    this.dibuja = function (){
        let color;

        if(this.estado === 1){
            color = blanco;
        }else{
            color = negro;
        }
        context.fillStyle = color;
        context.fillRect(this.coordX*tileX , this.coordY*tileY, tileX, tileY);
    }

    //leyes de conway
    this.nuevoCiclo = ()=>{
        let suma = 0;
        //calculamos cantidad de vecinos vivos
        for (i = 0; i<this.vecinos.length ; i++){
            suma += this.vecinos[i].estado;
        }

        //Aplicamos normas
        this.estadoProx = this.estado; //por defecto se queda igual

        //muerte: tiene -2 o +3
        if(suma<2 || suma >3){
            this.estadoProx = 0;
        }
        //vida/reproduccion tiene 3 vecinos
        if (suma === 3){
            this.estadoProx =1;
        }
    }
    this.mutacion = function(){
        this.estado = this.estadoProx;
    }
}

function startingTablero(obj){
    let estado;

    for(let i = 0; i<filas ; i++){
        for(let j = 0; j< columnas ; j++ ){
            estado = Math.floor(Math.random()*2);
            obj[i][j] = new Agente (i,j,estado);
        }
    }

    for(let i = 0; i<filas ; i++){
        for(let j = 0; j< columnas ; j++ ){
            obj[i][j].addVecinos();
        }
    }
}


function starting(){
    //asociamos el canvas
    canvas = document.getElementById('screen');
    context = canvas.getContext ('2d');
    //ajustamos tamaño
    canvas.width = canvasX;
    canvas.height = canvasY;
    //calculamos tamaño tileX e Y. 
    tileX = Math.floor(canvasX / filas);
    tileY= Math.floor(canvasY / columnas);

    //creamos el tablero
    tablero = creaArray2D (filas,columnas);
    //iniciamos el tablero
    startingTablero(tablero);


    //se indica cada cuanto refresca la página
    setInterval( ()=>{principal()},1000/framespersecond); //1000 ms = 1seg
}

//funcion para dibujar
function dibujaTablero (obj){

    //dibuja los agentes
    for(i=0; i<filas; i++){
        for(j=0; j<columnas ; j++){
            obj[i][j].dibuja();
        }
    }

    //calcula siguuiente ciclo
    for(i=0; i<filas; i++){
        for(j=0; j<columnas ; j++){
            obj[i][j].nuevoCiclo();
        }
    }
    
    //aplica mutacion
    for(i=0; i<filas; i++){
        for(j=0; j<columnas ; j++){
            obj[i][j].mutacion();
        }
    }
}


//funcion para borrar el canvas
function borraCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function principal(){
    borraCanvas();
    dibujaTablero(tablero);
}
