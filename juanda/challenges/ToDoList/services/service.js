function listToDo (elemParent,navigation){
    elemParent.appendChild(navigation);
    navList.forEach(namebtn => {
        let btn = document.createElement('button')
        btn.innerText = namebtn;
        btn.setAttribute('id',`${namebtn}`);
        btn.setAttribute('onClick',`btn${namebtn.toLowerCase()}()`);
        navigation.appendChild(btn);
    })
}
function createForm(elemParent){
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
    btnform.setAttribute('onclick',addData());
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

function dispatcher (opcion){
    switch (opcion) {
        case btnread: 
                btnread()
            break;
        case btnread:
                btnread()
            break;
        case btnupdate:
                btnupdate()
            break;

        case btndelete:
                btndelete()
            break;
    
        default:
            break;
    }
}