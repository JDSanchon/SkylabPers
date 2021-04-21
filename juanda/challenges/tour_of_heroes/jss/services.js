function showHeroMess() {
    let heroMess = heroes.sort(function() {
            return Math.random() - 0.5});
    const [a,b,c,d] = heroMess;
    let four =[a,b,c,d];
    return four;
}
/*
const showFour = showHeroMess().forEach((elem) => {
    let li = document.createElement('li');
    li.classList.add(`nav_list`);
    let a = document.createElement('a');
    a.href= elem.url;
    a.innerText = elem.name;
    li.appendChild(a);
    fourthTop.appendChild(li)
})
*/

