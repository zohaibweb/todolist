const addForm = document.querySelector('.add');
const list = document.querySelector('.list');
const search = document.querySelector('.search');

const generateTemplete = todo =>  {
    const html = `
    <li class="listItem">
        <span>${todo}</span>
        <i class=" icon-basic-trashcan delete"></i>
    </li>
    
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit',e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
    generateTemplete(todo);
    addForm.reset();
    }
});


//deleting the items
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


//search method

const filterTodo = (trem) => {
   Array.from(list.children)
     .filter((todo) => !todo.textContent.toLowerCase().includes(trem))
      .forEach((todo) => todo.classList.add('filtered'));

      Array.from(list.children)
     .filter((todo) => todo.textContent.toLowerCase().includes(trem))
      .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () =>{
    const trem =search.value.trim().toLowerCase();
    filterTodo(trem);
});