/*
const screen = document.getElementById("bodier");
let blinker = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
];
function tableroInicial(){
    let aux = '<table>';
        for(let i = 0 ; i<5 ; i++){
            aux +="<tr>";
            for (let j = 0 ; j<5 ; j++){
                aux += `<td>[${blinker[i][j]}]</td>`;
            }
            aux +="</tr>";
        }
        aux +="</table>";
        screen.innerHTML = aux;
}
function checkearArray (posX,posY,valor){
    let sum;
    for(let i=-1 ; i<2 ; i++){
        for(let j=-1 ; j<2 ;j++){
            if((blinker[i][j])===1){
                sum += 1;
            }else{

            }
        }
    }
    console.log(`existen ${sum} casillas con el 1`);
}
function recorrerArray(){
    for(let i=0 ; i<5 ; i++){
        for(let j=0 ; j<5 ;j++){
            checkearArray(i,j,blinker[i][j]);
        }
    }
}
*/

const board = document.getElementById('board');
const celdas = document.getElementsByClassName('col');
const totalRow = 5;
const totalColumn = 5;
function hiddenArray() {
  const hiddenarray = new Array(totalRow);
  for (let i = 0; i < totalRow; i++) {
    hiddenarray[i] = new Array(totalColumn);
  }
  return hiddenarray;
}
function emptyArray(hiddenAr) {
  const table = hiddenAr;
  for (let i = 0; i < totalRow; i++) {
    for (let j = 0; j < totalColumn; j++) {
      table[i][j] = 0;
    }
  }
  return table;
}

function createBoard(arr) {
  const arr1 = arr;
  for (let i = 0; i < totalRow; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < totalColumn; j++) {
      const col = document.createElement('div');
      col.classList.add('col');
      col.classList.add('hidden');
      col.id = `${i.toString()}-${j.toString()}`;
      row.appendChild(col);

      // row.textContent('1');
    }
    board.appendChild(row);
  }
  $('.col').click(function () {
    const posicion = this.id.split('-');
    arr1[parseInt(posicion[0])][parseInt(posicion[1])] = 1;
    $(this).css('background-color', 'red');
  });
  return arr1;
}
const world = createBoard(emptyArray(hiddenArray()));

function iniciar() {

}

function checkLife(algo) {
  for (let i = 0; i < totalRow; i++) {
    for (let j = 0; j < totalColumn; j++) {
      //    if(algo[i][j]===0 && checkNearby(i,j)===3){
      //        world[i][j] = 1;
      //    }
      //    if(algo[i][j]===1 && (checkNearby(i,j) < 2 || checkNearby(i,j) > 3)){
      //        world[i][j] = 0;
      //    }
      //    if(algo[i][j]===1 && (checkNearby(i,j) === 2 || checkNearby(i,j) === 3)){
      //        world[i][j] = 1;
      //    }
      const nearby = checkNearby(i, j);

      if (algo[i][j] === 1 && (nearby === 2 || nearby === 3)) {
        world[i][j] = 1;
      } else if (algo[i][j] === 0 && nearby === 3) {
        world[i][j] = 1;
      } else {
        world[i][j] = 0;
      }
    }
  }
}

function life() {
  const tempWorld = world;
  checkLife(tempWorld);
  paint();
}

function paint() {
  let aux;
  for (let i = 0; i < totalRow; i++) {
    for (let j = 0; j < totalColumn; j++) {
      aux = `${i.toString()}-${j.toString()}`;
      if (world[i][j] === 1) {
        $(`#${aux}`).css('background-color', 'red');
      }
      if (world[i][j] === 0) {
        $(`#${aux}`).css('background-color', '#33FFD1');
      }
    }
  }
}

function checkNearby(posI, posJ) {
  let nearby = 0;
  for (let i = posI - 1; i < posI + 2; i++) {
    for (let j = posJ - 1; j < posJ + 2; j++) {
      if (i >= 0 && i < totalRow) {
        if (j >= 0 && j < totalColumn) {
          if (world[i][j] === 1) {
            if (i === posI && j === posJ) {

            } else {
              nearby++;
            }
          }
        }
      }
    }
  }
  return nearby;
}

setInterval('life()', 10000);
/* function changecolor (){
    const cambiocolor = element => {s
        element.target.style.backgroundColor = 'red';
    }
    celdas.forEach(casilla => {
        casilla.addEventListener("click",()=>{
            alert ("has tocado algo");
        });
    });
} */

// createBoard(emptyArray(hiddenArray()));

// let divs = document.querySelectorAll(".grid-item");
// const changeBackgroundColor = e => {
// e.target.style.backgroundColor = "red";
// }
// divs.forEach(div => {
// div.addEventListener("click", changeBackgroundColor, {once: true});
// })
