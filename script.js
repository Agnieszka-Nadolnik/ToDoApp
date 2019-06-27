const btnAdd = document.querySelector('.add-element');
const btnRemove = document.querySelector('.remove-element');
const btnClear = document.querySelector('.clear-list');
const list = document.querySelector('ul');

let taskNummber = 0;

const addTask = () => {

    taskNummber++;
    let liElement = document.createElement('li');
    list.appendChild(liElement);
    liElement.textContent = `Task nummber - ${taskNummber}`;
};

const removeTask = () => {

    if(taskNummber > 0) {
        list.lastElementChild.remove('li');
        taskNummber--;
    } else if(taskNummber === 0) {
        alert('no more task to remove!');
    }
}

const clearTask = () => {

    let listArr = document.querySelectorAll('li');
    listArr.forEach((el) => {
        el.parentNode.removeChild(el);
    })

    taskNummber = 0;
}
  
btnAdd.addEventListener('click', addTask);
btnRemove.addEventListener('click', removeTask);
btnClear.addEventListener('click', clearTask);


