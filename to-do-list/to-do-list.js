
const todoList = [];
renderTodoList();
function renderTodoList(){
   let todoListHTML = '';
   todoList.forEach((todoObject,index) => {
       const {name , dueDate} = todoObject;
       const html = `
       <div>${name}</div>
       <div>${dueDate}</div>
        <button class="delete-button js-delete-todo-button"> Delete </button>
       `;
       todoListHTML += html;
   
   });
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton,index) => {
   deleteButton.addEventListener('click', () => {
         todoList.splice(index,1);
         renderTodoList();
   });
});

}

document.querySelector('.js-addtodo-button')
.addEventListener('click' , () => {
   addTodo();
});
document.body
.addEventListener('keydown' , (event) => {
   if(event.key === 'Enter') {
      console.log(event.key);
      addTodo();}
});



function addTodo(){
   const inputElement =  document.querySelector('.js-name-input');
   const dateInputELement = document.querySelector('.js-date-input');
   const name = inputElement.value;
   const dueDate = dateInputELement.value;
   todoList.push({name,dueDate});
   inputElement.value = '';
   renderTodoList();
} 
