var person = {
    firstName : 'Rom',
    lastName : 'Fatal'
};
var colorState = 0;

console.log('hello');
function calcName(p) {
return p.firstName.length * p.lastName.length
}

(function () {
    numOfRectangle=calcName(person);
    for (let index = 0; index < numOfRectangle; index++) {
    var main = document.getElementById('boxContainer');
    var rec = document.createElement('article');
    main.appendChild(rec)
 }
})();

document.querySelector('#paint').addEventListener('click', function (e) {
    const rec = document.getElementsByTagName('article');
    for (let  index= 0;  index< person.firstName.length; index++) {
        rec[index].style.backgroundColor=('gray')  
    }
    colorState = 1;
});
    
    document.querySelector('#clear-btn').addEventListener('click', function (e) {
        const rec = document.getElementsByTagName('article');
        for (let  index= 0;  index< person.firstName.length; index++) {
            rec[index].style.backgroundColor=('white')  
        }
        colorState = 0;
});

var firstRec = document.querySelector('article');
firstRec.addEventListener('mouseover', function (e) {
    
    firstRec.appendChild(document.createTextNode(person.firstName.charAt(0)))
    firstRec.style.fontSize = '270px';
    firstRec.style.fontWeight = ('bold');
    firstRec.style.color = ('white');
    firstRec.style.backgroundColor = ('#003fe6')
});
    
firstRec.addEventListener('mouseout', function (e) {
    firstRec.removeChild(firstRec.firstChild);
    if(colorState===0)
        firstRec.style.backgroundColor = ('white');
    else
    firstRec.style.backgroundColor = ('gray');
});