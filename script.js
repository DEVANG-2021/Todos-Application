

// alert('hello world');
const button = document.getElementById('button');
const input = document.getElementById('input');
const todos = document.getElementById('ul');
const form = document.getElementsByClassName('form');
const search = document.getElementById('search');
const menu = document.getElementsByClassName('menu-btn');
// form.addEventListener("submit",function(e){
// //     e.preventDefault();
// //     addtasks();
// // });
const todoitems = JSON.parse(localStorage.getItem("todoitems"));
// const todobtntxt = JSON.parse(localStorage.getItem("btn1"));


if(todoitems){
    todoitems.forEach(todo => {
        showtasks(todo);
    });
}

// if(todobtntxt){
//     todobtntxt.forEach(bt => {
//         showbtn(bt);
//     });
// }

button.addEventListener("click", function(e){
   e.preventDefault();
    addtasks();
    
});

// function showbtn(bt){
//     if(bt){
//         let tododelbtntxt = bt.clue;

        
   
//         locbtn();
//     }
// }

function showtasks(todo){  // version of addtask and todo is fetch li
    if(todo)
    {
    let todotext1 = todo.text;

    const tododelbtn = document.createElement('button');

    tododelbtn.innerHTML = "Delete"; 
    tododelbtn.classList.add('btn3');
 
    
 
   
    const todoE1 = document.createElement('li');
  todoE1.innerHTML = todotext1;
   todoE1.classList.add('list');
   todos.appendChild(tododelbtn);

    tododelbtn.addEventListener("click",function(){
        // e.preventDefault();
           todoE1.remove();
           tododelbtn.remove();
           localstorage();
        //    locbtn();
       });
      
   todos.appendChild(todoE1);

   
   localstorage();

    }
}

function addtasks(todo){
   
    let todotext = input.value;
    if(input.value==''){
        alert("Please Enter the Valid Task in Input box...");
    }else{

    if(todo){
         todotext = todo.text;
    }

    const todoE1 = document.createElement('li');
    const tododelbtn = document.createElement('button');
    tododelbtn.innerText = "Delete";
    tododelbtn.classList.add('btn3');
   todoE1.innerHTML = todotext;
   todoE1.classList.add('list');
   todos.appendChild(tododelbtn);
   todos.appendChild(todoE1);
   
   tododelbtn.addEventListener("click",function(){
    // e.preventDefault();
       todoE1.remove();
       tododelbtn.remove();
       localstorage();
    //    locbtn();
   });
   input.value = '';
   localstorage();
//    locbtn();
    }
}

function localstorage(){
   const todosE1 = document.querySelectorAll('.list');

  
   const todoitems = [];
   
   todosE1.forEach((todoE1) => {
         todoitems.push({
           
             text : todoE1.innerText,
       })
   });
  localStorage.setItem("todoitems",JSON.stringify(todoitems));
}



// function locbtn(){
//     const btn = document.querySelectorAll('.btn3');
//     const btn1 = [];

//     btn.forEach((b) => {
//         btn1.push({
//             clue : b.innerText,
//         })
//     });

//     localStorage.setItem("btn",JSON.stringify(btn1));
// }

const searchfunc = () => {
    let searchbox = document.getElementById('search').value.toUpperCase();
    let btn3 = document.getElementsByClassName('btn3');

    let ul = document.getElementById('ul');
    let li = ul.getElementsByTagName('li');
    let delbtn = ul.getElementsByTagName('button');

    for(var i=0; i< li.length; i++){
        let textvalue = li[i].textContent || li[i].innerHTML;
        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
             li[i].style.display = "";
             delbtn[i].style.display = "";
        }else{
             li[i].style.display = "none";
             delbtn[i].style.display = "none";       
        }
    }

}