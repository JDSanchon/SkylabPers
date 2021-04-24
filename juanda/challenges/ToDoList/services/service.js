// FIXME: this function name is dooming humanity

function menuCreator (elemParent,navigation){
    elemParent.appendChild(navigation);
    navList.forEach(namebtn => {
        let btn = document.createElement('button')
        btn.innerText = namebtn;
        btn.setAttribute('id',`${namebtn}`);
        // create
        // update
        // delete
        // show
        btn.setAttribute('onClick',`btn${namebtn.toLowerCase()}()`);
        navigation.appendChild(btn);
    })
}
/*
function newNode (nameOfNode,classOfNode,attributType,nameOfAttribute){
    let nameOfNode = document.createElement(nameOfNode);
    nameOfNode.classList.add(classOfNode);
    nameOfNode.setAttribute(attributType,nameOfAttribute)
}
*/



function createForm(elemParent){
    // let myHtmlNode = callmyhtmlCreator(queTagQuiero, queHtml, attributo, valordelatributo, className)
    let form = document.createElement('form');
    form.classList.add('createForm')
    let inputform = document.createElement('input');
    inputform.setAttribute('id','formText');
    inputform.setAttribute('type','text');
    inputform.setAttribute('placeholder','ingresa nueva tarea...');
    let btnform = document.createElement('button');
    btnform.setAttribute('type','submit');
    btnform.classList.add('button-form');
    btnform.innerText='Enviar';
    form.appendChild(inputform);
    form.appendChild(btnform);
    elemParent.appendChild(form);
}

let formulario = document.querySelector('form');

function addData(){
    debugger
    let data = document.getElementById('formText');
    state.tasks.push(data);
}

function btncreate(){
    let bodi = document.getElementById('bodier');
    createForm(bodi);
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', event =>{
        event.preventDefault();
        console.log(event.target.querySelector('input').value);
    })
}

function btnread(){
    console.log("Read");
}
function btnupdate(){
    console.log("Update");
}
function btndelete(){
    console.log("Delete");
}

function handleButton(actionType) {
    switch (actionType) {
        case basicActionTypes.create:
            // callFuncion(), 
        break;
        case basicActionTypes.read:
            // callFuncion(), 
        break;
        case basicActionTypes.update:
            // callFuncion(), 
        break;
        case basicActionTypes.delete:
            // callFuncion(), 
        break;

    }
}
