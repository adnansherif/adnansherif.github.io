var myImage=document.querySelector('img');
myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if (mySrc==='images/act-logo.png'){
        myImage.setAttribute('src','images/adnan-sherif.jpg')
    } else {
        myImage.setAttribute('src','images/act-logo.png')
    }
}
var myButton=document.querySelector('button');
var myHeader=document.querySelector('h1');

function setUserName(){
    var userName=prompt('enter your name');
    localStorage.setItem('name',userName);
    myHeader.textContent= userName+'!  Welcome to Ultimate Prep ';
}
if (!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName=localStorage.getItem('name');
    myHeader.textContent= storedName+'!  Welcome to Ultimate Prep ';
}
myButton.onclick=function(){
    setUserName();
}


