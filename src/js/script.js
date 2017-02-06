console.log('Hello World!');

var t1 = document.createElement('h1');
var t2 = document.createElement('p');

t1.className = 'siteHeader';
t2.className = 'siteText';

document.body.innerHTML = t1 + t2;

t1.innerText = 'Hello World!';
t2.innerHTML = 'Lorem ipsum dolor <span>sit amet</span>.'