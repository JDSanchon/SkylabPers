let main = document.querySelector('main');
let header = document.createElement('header');
let title = document.createElement('h1');
title.innerText ="Tour of Heroes";
header.appendChild(title);
let list = document.createElement('ul');
header_nav_elem.forEach((elem) =>{
    let objList = document.createElement('li');
    objList.classList.add(`nav_list`);
    let link = document.createElement('a');
    link.href= elem.url;
    link.innerText = elem.name;
    objList.appendChild(link);
    list.appendChild(objList);
})
header.appendChild(list);
main.appendChild(header);
//bodier here
let bodier = document.createElement('bodier');
bodier.setAttribute('id','bodier');
let subhead = document.createElement('h3');
subhead.innerText = "top heroes";
let body = document.querySelector('body');
body.appendChild(bodier);
bodier.appendChild(subhead);
//fourDashboard(then.fetchHeros(),bodier);
/*
showHeroMess().forEach((elem) => {
    let li = document.createElement('li');
    li.classList.add(`nav_list`);
    let a = document.createElement('a');
    a.href= elem.url;
    a.innerText = elem.name;
    li.appendChild(a);
    fourthTop.appendChild(li);
})*/
