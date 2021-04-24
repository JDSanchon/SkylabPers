function listToDo (elemParent,navigation,elemUl,elemLi,namesList){
    elemParent.appendChild(navigation);
    navigation.appendChild(elemUl);
    namesList.forEach(nameList => {
        elemLi = document.createElement('li');
        elemLi.innerText = nameList;
        elemUl.appendChild(elemLi);
    });
}
