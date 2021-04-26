/*
let sectionTop = document.getElementById('subheader');
let nav = document.createElement('nav');
let button = document.createElement('button');
let bodier = document.getElementById('bodier');
let body = document.querySelector('body');

//navList = 4 nombres para el subtitulo
//li se debe generar de nuevo en el cuerpo de la funcion, mejor borrar aqui
menuCreator(sectionTop,nav);
*/
//traemos elementos del DOM y creamos objetos
const formulario = document.getElementById('form');
const ulList = document.getElementById("unordered_list");

const fragment = document.createDocumentFragment();

//// store
let tasksList = {
    actionType: 'CREATE',
    data : {
        taskID : 1,
        state : false,
        value : " ",//textoImput
    },
    actionType: 'UPDATE',
    data : {
        taskID : 2,
        state : false,
        value : " ",//textoImput
    },
}

let listaTareas = {}

///// service ? action ?//////

function addNewLi (tagToLi,tagButton,enteredText,idButton){
    let ul = document.getElementById('unordered_list');
    let tagLi = document.createElement(tagToLi);
    let paragraph = document.createElement('p');
    let tagButton1 = document.createElement(tagButton);
    tagButton1.classList.add('boton1');
    tagButton1.innerText = 'DONE';
    tagButton1.setAttribute('id',idButton);
    tagButton1.setAttribute('onclick',`updateText(${idButton})`);
    let tagButton2 = document.createElement(tagButton);
    tagButton2.classList.add('boton2');
    tagButton2.innerText = 'Eliminar';
    tagButton2.setAttribute('id',idButton);
    tagButton2.setAttribute('onclick',`deleteText(${idButton})`);
    paragraph.innerHTML = enteredText;
    tagLi.appendChild(paragraph);
    tagLi.appendChild(tagButton1);
    tagLi.appendChild(tagButton2);
    ul.appendChild(tagLi);
}

//addNewLi('li','button','lista'); BORRAR CUANDO SE HAGA USO

formulario.addEventListener('submit',event => {
    event.preventDefault();
    //console.log(event.target.querySelector('input').value);
    introduceTask(event);
})//evento, target = formulario --> seleccionamos el input. mas el valor.

const introduceTask = (evento) => {
    //validar formulario
    let text = evento.target.querySelector('input').value;
    if(text === ""){
        console.log("está vacío...");
        return
    }
    //introducir en taskList
    const task = {
        id : Date.now(),
        texto : text,
        state : false,
    }
    listaTareas[task.id] = {...task}
    //limpiamos formulario
    formulario.reset();

    //añadir al html la nueva lista
    printTask();
}

const printTask = () => {
    ulList.innerHTML = " ";
    Object.values(listaTareas).forEach(tarea => {
        //console.log(tarea.texto);
        addNewLi('li','button',tarea.texto,tarea.id);
    });
    //addNewLi('li','button',newText);
}
function deleteText(numID){
    Object.values(listaTareas).forEach(element => {
        if(element.id === numID){
            delete listaTareas[numID];
        }
    });
    printTask();
    
    //ulList.addEventListener('click',event =>{
    //    if(event.target.classList.contains('boton2')){
    //        console.log(event.target.dataset.id);
    //    }event.stopPropagation();
    //})
}

function updateText (numID){
    Object.values(listaTareas).forEach(element => {
        if(element.id === numID){
            element.texto = 'MODIFICADO';
        }
    });
    printTask();
}