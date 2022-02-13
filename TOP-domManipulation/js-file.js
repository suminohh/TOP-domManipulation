const content = document.querySelector('#container');

const red = document.createElement('p');
red.textContent = "Hey I'm red";
red.style.color = 'red';

container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3";
blue.style.color = 'blue';

container.appendChild(blue);

const background = document.createElement('div');
background.style.cssText = 'border: solid black; background: pink;';
const h1Div = document.createElement('h1');
h1Div.textContent = "I'm in a div"
const pDiv = document.createElement('p');
pDiv.textContent = "NO WAY! ME TOO!"

background.appendChild(h1Div);
background.appendChild(pDiv);

container.appendChild(background);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

//const container = document.querySelector('#container');

//const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = 'This is the glorious text-content!';

//container.appendChild(content);


