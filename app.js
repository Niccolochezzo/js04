// task 1

const Div = document.querySelector('#main');

const ul = document.createElement('ul');
Div.appendChild(ul);

const array = [
    {
        userName: 'user1',
        age: 17
    },
    {
        userName: 'user2',
        age: 19
    },
    {
        userName: 'user3',
        age: 21
    },
    {
        userName: 'user4',
        age: 15
    },
];

let names = array.map((person) => {
    if (person.age > 18) {
        return person.userName
    }
    
});

names.forEach(Element => {
    const li = document.createElement('li');
    li.textContent = Element;
    ul.appendChild(li);
});


// task 2 
const removeUl = document.getElementById('remove')
const addUl = document.getElementById('add')
addUl.style.display = 'none';

function remove() {
    ul.remove();
    removeUl.style.display = 'none';
    addUl.style.display = 'block';
}

function add() {
    main.appendChild(ul);
    removeUl.style.display = 'block';
    addUl.style.display = 'none';
}

// task 3
function tryMe() {
    text.classList.toggle("toggle")
}