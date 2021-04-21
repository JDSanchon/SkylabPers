const header_nav_elem = [
    {name: "dashboard",url: "./../index.html"},
    {name: "heroes",url: ""},
]
let main = document.querySelector('.list');



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
 
createHeader();